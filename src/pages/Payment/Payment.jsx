import { ConfigProvider, Steps } from "antd";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import moment from "moment";
import React, { useState } from "react";
import { FaFemale, FaMale } from "react-icons/fa";
import { MdEventSeat, MdPayment } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import PaymentCreditCart from "~/components/Payment/PaymentCreditCart";
import { db } from "~/firebase/firebaseConfig";
import { setUpdate } from "~/redux/slices/userSlice";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { validCoupons } from "~/data/data";
import PaymentTicket from "./PaymentTicket/PaymentTicket";

const Payment = () => {
  const { finalTicket } = useSelector((store) => store.finalTicket);
  const { user } = useSelector((store) => store.user);
  const theme = useSelector((store) => store.theme.theme);
  const { pnr, arrival, departure, date, price, seats } = finalTicket;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [coupon, setCoupon] = useState("");

  if (!finalTicket) {
    toast.error("Bilet bilgisi bulunamadı.");
    navigate("/");
  }

  const applyCoupon = async () => {
    try {
      if (user.usedDiscount) {
        toast.error("Daha önce indirim kullandınız.");
        return;
      }

      if (validCoupons.includes(coupon)) {
        setDiscountedPrice(price * seats?.length - 50);

        try {
          const userRef = doc(db, "users", user.uid);
          await updateDoc(userRef, {
            usedDiscount: true,
          });
          dispatch(setUpdate({ ...user, usedDiscount: true }));
        } catch (error) {
          console.error("Kupon kullanım hatası:", error);
        }
        toast.success("Kupon başarıyla uygulandı.");
      } else {
        toast.error("Geçersiz kupon kodu.");
      }
    } catch (error) {
      console.error("Kupon uygulama hatası:", error);
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  const getFinalPrice = () => {
    if (user?.emailVerified === false) {
      return 650;
    }
    return discountedPrice !== null ? discountedPrice : price * seats?.length;
  };

  const paymentDone = async () => {
    if (!user || !finalTicket) {
      toast.error("Geçersiz kullanıcı veya bilet bilgisi.");
      return;
    }

    try {
      const userRef = doc(db, "users", user.uid);
      const ticketRef = doc(db, "tickets", finalTicket.id);
      const ticketSnapshot = await getDoc(ticketRef);

      if (!ticketSnapshot.exists()) {
        toast.error("Bilet bulunamadı.");
        return;
      }

      const existingSeats = ticketSnapshot.data().seats;

      const updatedSeats = existingSeats.map((seat) => {
        const selectedSeat = seats.find((s) => s.number === seat.number);
        return selectedSeat
          ? { ...seat, isAvailable: false, gender: selectedSeat.gender }
          : seat;
      });

      const finalPrice = getFinalPrice();

      await updateDoc(ticketRef, {
        seats: updatedSeats,
      });

      const updatedOwnedTickets = [
        ...user.ownedTickets,
        { ...finalTicket, seats, price: finalPrice },
      ];

      const updatedFullTickets = [
        ...user.fullTickets,
        { ...finalTicket, seats, price: finalPrice },
      ];

      await updateDoc(userRef, {
        ownedTickets: updatedOwnedTickets,
        fullTickets: updatedFullTickets,
      });

      dispatch(
        setUpdate({
          ...user,
          ownedTickets: updatedOwnedTickets,
          fullTickets: updatedFullTickets,
        })
      );

      navigate("/profile");
    } catch (error) {
      console.log("Bir hata oluştu, lütfen tekrar deneyiniz." + error);
    }
  };

  const configTheme = {
    token: {
      colorPrimary: theme === "dark" ? "#202020" : "#4FC647",
      colorText: theme === "dark" ? "#E5E5E5" : "#000",
    },
  };

  return (
    <>
      <div
        className={`w-full h-screen container mx-auto p-7 flex flex-col gap-y-5 font-rubik ${
          theme === "dark" ? "bg-gray-900 text-white" : " text-black"
        }`}
      >
        <ConfigProvider theme={configTheme}>
          <Steps
            size="large"
            current={4}
            items={[
              { title: "Sefer Seçimi" },
              { title: "Koltuk Seçimi" },
              { title: "Ödeme Bilgileri" },
            ]}
          />
        </ConfigProvider>
        <div className="flex w-full mt-5 sm:gap-x-5 gap-y-5 sm:flex-row flex-col ">
          <div className="w-full flex flex-col gap-y-3">
            <PaymentTicket
              finalTicket={finalTicket}
              getFinalPrice={getFinalPrice}
            />
          </div>
          <div className="flex flex-col gap-y-3 sm:w-1/3 pb-12">
            <div
              className={`relative w-full flex flex-col h-[200px] aspect-[16/9] rounded-xl overflow-hidden shadow-2xl ${
                theme === "dark"
                  ? "bg-gradient-to-br from-gray-800 to-gray-600"
                  : "bg-gradient-to-br from-primary to-[#45B23E]"
              }`}
            >
              <PaymentCreditCart />
            </div>
            <form className="grid grid-cols-2 gap-4">
              <input
                placeholder="Ad Soyad"
                className="border-primary focus:ring-primary border p-4 rounded-md dark:bg-gray-700 dark:text-white dark:bg-transparent dark:border-gray-600"
              />
              <input
                placeholder="1234 1234 1234 1234"
                className="border-primary focus:ring-primary border p-4 rounded-md dark:bg-gray-700 dark:text-white dark:bg-transparent dark:border-gray-600"
                maxLength={19}
              />
              <select className="border-primary focus:ring-primary border p-4 rounded-md dark:bg-gray-700 dark:text-gray-500 dark:bg-transparent dark:border-gray-600">
                <option value="">Ay Seçin</option>
                <option value="Ocak">Ocak</option>
                <option value="Şubat">Şubat</option>
                <option value="Mart">Mart</option>
              </select>
              <input
                placeholder="CVC"
                maxLength={3}
                className="border-primary focus:ring-primary border p-4 rounded-md dark:bg-gray-700 dark:text-white dark:bg-transparent dark:border-gray-600 "
              />
              <div className="w-full  col-span-2">
                <form className="flex flex-1 gap-x-3">
                  <input
                    className="px-4 py-2 rounded-md border focus:ring-2 transition-all ring-offset-1 ring-primary outline-none dark:bg-transparent dark:border-gray-600 dark:ring-gray-600 dark:text-white dark:ring-offset-transparent"
                    placeholder="İndirim Kuponu"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={applyCoupon}
                    className="px-3 flex-1 flex justify-center items-center rounded-md bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  >
                    <TbRosetteDiscountCheckFilled size={25} />
                  </button>
                </form>
              </div>

              <p className="flex justify-between items-center w-full dark:bg-gray-700 bg-white col-span-2 py-2 px-5 rounded-md">
                Toplam Tutar
                <span className="text-primary dark:text-white font-semibold text-2xl">
                  {getFinalPrice(price)}₺
                </span>
              </p>
              <Link
                onClick={paymentDone}
                className="w-full flex items-center gap-x-3 col-start-1 col-end-3 p-4 rounded-md border dark:border-gray-700 dark:hover:bg-gray-600 bg-primary dark:bg-gray-700 text-white hover:bg-primary/90 transition-all"
              >
                <MdPayment size={24} /> Ödemeyi Gerçekleştir
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
