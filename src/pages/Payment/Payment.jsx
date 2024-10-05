import { ConfigProvider, Steps } from "antd";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import moment from "moment";
import React, { useState } from "react";
import { FaFemale, FaMale } from "react-icons/fa";
import { MdEventSeat, MdPayment } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Footer from "~/components/Footer/Footer";
import PaymentCreditCart from "~/components/Payment/PaymentCreditCart";
import { db } from "~/firebase/firebaseConfig";
import { setUpdate } from "~/redux/slices/userSlice";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { validCoupons } from "~/data/data";

const Payment = () => {
  const { finalTicket } = useSelector((store) => store.finalTicket);
  const { user } = useSelector((store) => store.user);
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
        // dispatch(setUser({ ...user, usedDiscount: true }));
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
        fullTickets: [
          ...user.fullTickets,
          { ...finalTicket, seats, price: finalPrice },
        ],
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

  const formattedDate = moment(date, "MMMM DD, YYYY hh:mm:ss A").format(
    "DD.MM.YYYY HH:mm"
  );

  return (
    <>
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
              { title: "Sefer Seçimi" },
              { title: "Koltuk Seçimi" },
              { title: "Ödeme Bilgileri" },
            ]}
          />
        </ConfigProvider>
        <div className="flex w-full mt-5 sm:gap-x-5 gap-y-5 sm:flex-row flex-col">
          <div className="w-full flex flex-col gap-y-3">
            <div className="sm:w-full w-full p-5 ring-2 ring-offset-1 flex flex-col gap-y-1 rounded-md ring-primary">
              <h1 className="text-2xl font-semibold text-primary">
                Seçilen Bilet / Biletler
              </h1>
              <div className="w-full h-full bg-[#4ABD43] text-white rounded-md gap-4 p-5 grid grid-cols-1 justify-between text-xl">
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
                  {getFinalPrice()}₺
                </div>
                <div className="w-full flex justify-between items-center">
                  <span className="font-semibold">Seçilen Koltuk:</span>
                  <div className="flex gap-x-2">
                    {seats?.map((seatItem, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-x-2 p-2 rounded-md bg-white text-primary"
                      >
                        <MdEventSeat /> {seatItem.number} - {seatItem.gender}
                        {seatItem.gender === "Erkek" ? (
                          <span className="text-blue-500">
                            <FaMale />
                          </span>
                        ) : (
                          <span className="text-pink-500">
                            <FaFemale />
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="flex w-1/2 gap-x-3">
                <input
                  className="px-4 py-2 rounded-md border bg-white focus:ring-2 transition-all ring-offset-1 ring-primary outline-none"
                  placeholder="İndirim Kuponu"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button
                  type="button"
                  onClick={applyCoupon}
                  className="bg-primary/20 text-primary px-3 rounded-md hover:bg-primary hover:text-white transition-colors"
                >
                  <TbRosetteDiscountCheckFilled size={25} />
                </button>
              </form>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-12">
            <div className="relative w-full flex flex-col h-[200px] aspect-[16/9] bg-gradient-to-br from-primary to-[#45B23E] rounded-xl overflow-hidden shadow-2xl">
              <PaymentCreditCart />
            </div>
            <form className="grid grid-cols-2 gap-5">
              <input
                placeholder="Ad Soyad"
                className="border-primary focus:ring-primary border p-4 rounded-md bg-transparent"
              />
              <input
                placeholder="1234 1234 1234 1234"
                className="border-primary focus:ring-primary border p-4 rounded-md bg-transparent"
                maxLength={19}
              />
              <select className="border-primary focus:ring-primary border p-4 rounded-md bg-transparent text-zinc-400">
                <option value="">Ay Seçin</option>
                <option value="Ocak">Ocak</option>
                <option value="Şubat">Şubat</option>
                <option value="Mart">Mart</option>
              </select>
              <input
                placeholder="CVC"
                maxLength={3}
                className="border-primary focus:ring-primary border p-4 rounded-md bg-transparent"
              />
              <Link
                onClick={paymentDone}
                className="w-full flex items-center gap-x-3 col-start-1 col-end-3 p-4 rounded-md border bg-primary hover:bg-[#4fc615] text-white focus:ring-primary"
              >
                <MdPayment size={24} /> Ödemeyi Gerçekleştir
              </Link>
            </form>
          </div>
        </div>
        <Footer footerWidth={"w-1/2"} />
      </div>
    </>
  );
};

export default Payment;
