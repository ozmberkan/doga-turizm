import { ConfigProvider, Steps } from "antd";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import moment from "moment";
import React, { useState } from "react";
import { FaFemale, FaMale } from "react-icons/fa";
import { MdEventSeat, MdPayment } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "~/components/Footer/Footer";
import PaymentCreditCart from "~/components/Payment/PaymentCreditCart";
import { db } from "~/firebase/firebaseConfig";
import { setUser } from "~/redux/slices/userSlice";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { validCoupons } from "~/data/data";

const Payment = () => {
  const [cartNo, setCartNo] = useState("");
  const [cartName, setCartName] = useState("");
  const [cartLast, setCartLast] = useState("");
  const [cartCvc, setCartCvc] = useState("");
  const [coupon, setCoupon] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { finalTicket } = useSelector((store) => store.finalTicket);
  const { user } = useSelector((store) => store.user);

  if (!finalTicket) {
    toast.error("Bilet bilgisi bulunamadı.");
    return null;
  }

  const { pnr, arrival, departure, date, price, seats } = finalTicket;

  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  const handleCardNumberChange = (e) => {
    setCartNo(formatCardNumber(e.target.value));
  };

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const applyCoupon = () => {
    if (validCoupons.includes(coupon)) {
      setDiscountedPrice(price * seats.length - 50);
      toast.success("İndirim kuponu uygulandı!");
    } else {
      toast.error("Geçersiz indirim kuponu.");
    }
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

      const updatedSeats = existingSeats?.map((seat) => {
        const selectedSeat = seats.find((s) => s.number === seat.number);
        if (selectedSeat) {
          return {
            ...seat,
            isAvailable: false,
            gender: selectedSeat.gender,
          };
        }
        return seat;
      });

      const finalPrice =
        discountedPrice !== null ? discountedPrice : price * seats.length;

      await updateDoc(ticketRef, {
        seats: updatedSeats,
      });

      const updatedOwnedTickets = [
        ...user.ownedTickets,
        { ...finalTicket, seats: seats, price: finalPrice },
      ];

      const updatedFullTickets = [
        ...user.fullTickets,
        { ...finalTicket, seats: seats, price: finalPrice },
      ];

      await updateDoc(userRef, {
        ownedTickets: updatedOwnedTickets,
        fullTickets: updatedFullTickets,
      });

      dispatch(
        setUser({
          ...user,
          ownedTickets: updatedOwnedTickets,
          fullTickets: updatedFullTickets,
        })
      );

      toast.success("Ödeme başarıyla tamamlandı!, yönlendiriliyorsunuz!");
      navigate("/profile/mytickets");
    } catch (error) {
      toast.error("Bir hata oluştu, lütfen tekrar deneyiniz." + error);
    }
  };

  const formattedDate = moment(date, "MMMM DD, YYYY hh:mm:ss A").format(
    "DD.MM.YYYY HH:mm"
  );

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
            { title: "Sefer Seçimi" },
            { title: "Koltuk Seçimi" },
            { title: "Ödeme Bilgileri" },
          ]}
        />
      </ConfigProvider>
      <div className="flex w-full mt-5 sm:gap-x-5 gap-y-5 sm:flex-row flex-col">
        <div className="w-full  flex flex-col gap-y-3">
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
                {discountedPrice !== null
                  ? discountedPrice
                  : price * seats?.length}
                ₺
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
            <form className="flex w-1/2 gap-x-3 ">
              <input
                className="px-4 py-2 rounded-md border bg-white focus:ring-2 transition-all ring-offset-1 ring-primary outline-none"
                placeholder="İndirim Kuponu"
                value={coupon}
                onChange={handleCouponChange}
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
              className="border-primary focus:ring-primary border p-4 rounded-md bg-transparent"
              onChange={(e) => setCartName(e.target.value)}
            />
            <input
              id="name"
              placeholder="1234 1234 1234 1234"
              className="border-primary focus:ring-primary border p-4 rounded-md bg-transparent"
              onChange={handleCardNumberChange}
              maxLength={16}
            />
            <select
              id="name"
              placeholder="Ad Soyad"
              className="border-primary focus:ring-primary border p-4 rounded-md bg-transparent text-zinc-400"
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
              className="border-primary focus:ring-primary border p-4 rounded-md bg-transparent"
              onChange={(e) => setCartCvc(e.target.value)}
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
  );
};

export default Payment;
