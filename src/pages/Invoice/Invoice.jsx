import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Logo from "~/assets/logos/LogoBlack.png";
import { IoDownloadOutline } from "react-icons/io5";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Invoice = () => {
  const { id } = useParams();
  const { user } = useSelector((store) => store.user);

  const findTicket = user.ownedTickets.find((ticket) => ticket.ticketID === id);

  const downloadPDF = () => {
    const element = document.getElementById("pdf-content");

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${user.displayName}-fatura.pdf`);
    });
  };

  return (
    <div className="w-full h-screen items-center justify-center flex flex-col gap-y-2 px-4 sm:px-0">
      <div className="w-full sm:w-2/3 py-2 flex justify-end items-center">
        <button
          onClick={downloadPDF}
          className="px-4 py-2 rounded-md border bg-white flex items-center gap-x-1"
        >
          <IoDownloadOutline />
          Faturayı İndir
        </button>
      </div>

      <div
        className="p-4 rounded-md border w-full sm:w-2/3 bg-white overflow-hidden"
        id="pdf-content"
      >
        <div className="w-full flex justify-between items-center border-b py-2">
          <img src={Logo} className="w-32 sm:w-44" />
          <h1 className="text-black text-xl sm:text-2xl sm:flex hidden">
            e-Fatura
          </h1>
        </div>

        <div className="w-full flex flex-col gap-y-2 py-5">
          <div className="w-full flex justify-between items-center">
            <h1 className="font-semibold text-xl sm:text-2xl py-2">
              Bilet Bilgileri
            </h1>
            <p className="text-xs sm:text-sm text-zinc-600">
              Fatura No:{" "}
              {findTicket.ticketID.slice(0, 7) +
                "-" +
                findTicket.ticketID.slice(-1)}
            </p>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="w-full text-xs sm:text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b">
                <tr>
                  <th scope="col" className="px-1 sm:px-2 py-3 text-xs">
                    Açıklama
                  </th>
                  <th scope="col" className="px-1 sm:px-2 py-3 text-xs">
                    Bilet No
                  </th>
                  <th scope="col" className="px-1 sm:px-2 py-3 text-xs">
                    Adet
                  </th>
                  <th scope="col" className="px-1 sm:px-2 py-3 text-xs">
                    Fiyat
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-1 sm:px-2 py-4 text-xs font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {findTicket.departure} - {findTicket.arrival} Otobüs Bileti
                  </th>
                  <td className="px-1 sm:px-2 py-4 text-[7px]">
                    {findTicket.ticketID}
                  </td>
                  <td className="px-1 sm:px-2 py-4 text-xs">
                    {findTicket.seats.length}
                  </td>
                  <td className="px-1 sm:px-2 py-4 text-xs">
                    {findTicket.price * findTicket.seats.length}₺
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-full py-2 flex justify-start items-start flex-col">
            <span className="text-xs sm:text-sm text-zinc-600">
              Ödeme Yöntemi: Kredi Kartı
            </span>
            <span className="text-xs sm:text-sm text-zinc-600">
              Son 4 Hane: **** **** **** 1234
            </span>
          </div>

          <div className="w-full py-2 flex justify-start items-start flex-col">
            <span className="text-xs sm:text-sm text-zinc-600">
              Bu fatura elektronik olarak oluşturulmuştur ve geçerli bir yasal
              belgedir. Sorularınız için lütfen müşteri hizmetleri ile iletişime
              geçin: dogaturizm@destek.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
