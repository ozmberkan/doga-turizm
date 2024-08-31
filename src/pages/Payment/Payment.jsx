import { ConfigProvider, Steps } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { MdPayment } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "~/components/Footer/Footer";
import PaymentCreditCart from "~/components/Payment/PaymentCreditCart";

const Payment = () => {
  const [cartNo, setCartNo] = useState("");
  const [cartName, setCartName] = useState("");
  const [cartLast, setCartLast] = useState("");
  const [cartCvc, setCartCvc] = useState("");

  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const { pnr, arrival, departure, date, price } = user.ownedTickets[0];

  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  const handleCardNumberChange = (e) => {
    setCartNo(formatCardNumber(e.target.value));
  };

  const paymentDone = () => {
    toast.success("Ödeme başarıyla tamamlandı!, yönlendiriliyorsunuz!", {
      autoClose: 1000,
    });
    setTimeout(() => {
      user
        ? navigate("/profile/mytickets")
        : toast.error("Kullanıcı bulunamadı hata!");
    }, 2000);
  };
  const formattedDate = moment(date, "MMMM DD, YYYY hh:mm:ss A").format(
    "DD.MM.YYYY HH:mm"
  );

  console.log(user);
  return (
    <div className="w-full h-screen container mx-auto p-7 flex flex-col gap-y-5 font-rubik">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#4FC647",
            contentBg: "#aaac1d",
          },
        }}
      >
        <Steps
          size="large"
          current={2}
          items={[
            {
              title: "Sefer Seçimi",
            },
            {
              title: "Koltuk Seçimi",
            },
            {
              title: "Ödeme Bilgileri",
            },
          ]}
        />
      </ConfigProvider>
      <div className="flex w-full mt-5 sm:gap-x-5 gap-y-5 sm:flex-row flex-col">
        <div className="sm:w-2/3 w-full  p-5 border-2 flex flex-col gap-y-5 rounded-md border-[#4FC647]">
          <h1 className="text-3xl font-semibold text-[#4FC647]">
            Seçilen Bilet / Biletler
          </h1>
          <div className="w-full h-full bg-[#4ABD43] text-white rounded-md gap-5 divide-y p-5  grid grid-cols-1 justify-between text-xl">
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold">PNR:</span> {pnr}
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold">Kalkış:</span> {departure}
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold">Varış:</span> {arrival}
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold">Tarih:</span> {formattedDate}
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold">Fiyat:</span>{" "}
              {price *
                user.ownedTickets.map((item) => item.selectedSeats.length)}₺
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold">Seçilen Koltuk:</span>{" "}
              {user.ownedTickets.map((item) =>
                item.selectedSeats.map((seatItem) => (
                  <span>
                    {seatItem.number} - {seatItem.cinsiyet}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-12">
          <div className="relative w-full flex flex-col h-[200px] aspect-[16/9] bg-gradient-to-br from-[#4FC647] to-[#45B23E] rounded-xl overflow-hidden shadow-2xl">
            <PaymentCreditCart
              cartNo={cartNo}
              cartLast={cartLast}
              cartName={cartName}
              cartCvc={cartCvc}
            />
          </div>
          <form className="grid grid-cols-2 gap-5">
            <input
              id="name"
              placeholder="Ad Soyad"
              className="border-[#4FC647] focus:ring-[#4FC647] border p-4 rounded-md bg-transparent"
              onChange={(e) => setCartName(e.target.value)}
            />
            <input
              id="name"
              placeholder="1234 1234 1234 1234"
              className="border-[#4FC647] focus:ring-[#4FC647] border p-4 rounded-md bg-transparent"
              onChange={handleCardNumberChange}
              maxLength={16}
            />
            <select
              id="name"
              placeholder="Ad Soyad"
              className="border-[#4FC647] focus:ring-[#4FC647] border p-4 rounded-md bg-transparent text-zinc-400"
              onChange={(e) => setCartLast(e.target.value)}
            >
              <option value="Ocak">Ocak</option>
              <option value="Şubat">Şubat</option>
              <option value="Mart">Mart</option>
            </select>
            <input
              id="name"
              placeholder="CVC"
              maxLength={3}
              className="border-[#4FC647] focus:ring-[#4FC647] border p-4 rounded-md bg-transparent"
              onChange={(e) => setCartCvc(e.target.value)}
            />
            <Link
              onClick={paymentDone}
              className="w-full flex items-center gap-x-3 col-start-1 col-end-3 p-4 rounded-md border bg-[#4FC647] hover:bg-[#4fc615] text-white focus:ring-[#4FC647]"
            >
              <MdPayment size={24} /> Ödemeyi Gerçekleştir
            </Link>
          </form>
        </div>
      </div>
      <Footer footerWidth={"w-1/2"} />
    </div>
  );
};

export default Payment;
