import { ConfigProvider, Steps } from "antd";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { MdPayment } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "~/firebase/firebaseConfig";
import { setUpdate } from "~/redux/slices/userSlice";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { validCoupons } from "~/data/data";
import PaymentCreditCart from "~/components/Payment/PaymentCreditCart";
import PaymentTicket from "./PaymentTicket/PaymentTicket";

const Payment = () => {
  const { finalTicket } = useSelector((store) => store.finalTicket);
  const { user } = useSelector((store) => store.user);
  const { theme } = useSelector((store) => store.theme);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [coupon, setCoupon] = useState("");

  const { seats, price } = finalTicket;
  const [discountPrice, setDiscountPrice] = useState(price);

  if (!finalTicket) {
    toast.error("Bilet bilgisi bulunamadı.");
    navigate("/");
  }

  const applyCoupon = async () => {
    const filtered = validCoupons.find((c) => c === coupon);

    if (user.emailVerified === false) {
      toast.error("Önce e-posta doğrulaması yapmalısınız.");
      return;
    }

    if (user.usedDiscount === true) {
      toast.error("Daha önce indirim kullanılmış!");
      return;
    } else {
      await updateDoc(doc(db, "users", user.uid), {
        usedDiscount: true,
      });
      dispatch(setUpdate({ ...user, usedDiscount: true }));
    }

    if (filtered) {
      const discountedPrice = price - 50;
      setDiscountPrice(discountedPrice);
      toast.success("Kupon başarıyla uygulandı. 50₺ indirim kazandınız.");
    } else {
      toast.error("Geçersiz kupon kodu.");
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

      const updatedSeats = existingSeats.map((seat) => {
        const selectedSeat = seats.find((s) => s.number === seat.number);
        return selectedSeat
          ? { ...seat, isAvailable: false, gender: selectedSeat.gender }
          : seat;
      });

      const priceValid =
        user.emailVerified === true ? discountPrice || finalTicket.price : 650;

      await updateDoc(ticketRef, {
        seats: updatedSeats,
      });

      const updatedOwnedTickets = [
        ...user.ownedTickets,
        { ...finalTicket, seats, price: priceValid },
      ];

      const updatedAllTickets = [
        ...user.allTickets,
        { ...finalTicket, seats, price: priceValid },
      ];

      await updateDoc(userRef, {
        ownedTickets: updatedOwnedTickets,
        allTickets: updatedAllTickets,
      });

      dispatch(
        setUpdate({
          ...user,
          ownedTickets: updatedOwnedTickets,
          allTickets: updatedAllTickets,
        })
      );

      toast.success("Ödeme başarılı. Biletleriniz profilinize eklendi.");

      navigate("/profile");
    } catch (error) {
      console.log("Bir hata oluştu, lütfen tekrar deneyiniz." + error);
    }
  };

  return (
    <>
      <div className="w-full h-screen container mx-auto p-7 flex flex-col gap-y-5 font-rubik">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: theme === "dark" ? "#202020" : "#4FC647",
              colorText: theme === "dark" ? "#E5E5E5" : "#000",
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
        <div className="flex w-full mt-5 sm:gap-x-5 gap-y-5 sm:flex-row flex-col ">
          <div className="w-full flex flex-col gap-y-3">
            <PaymentTicket finalTicket={finalTicket} />
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
                <div className="flex flex-1 gap-x-3">
                  <input
                    className="px-4 py-2 rounded-md border focus:ring-2 transition-all ring-offset-1 ring-primary outline-none dark:bg-transparent dark:border-gray-600 dark:ring-gray-600 dark:text-white dark:ring-offset-transparent"
                    placeholder="İndirim Kuponu"
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={applyCoupon}
                    className="px-3 flex-1 flex justify-center items-center rounded-md bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  >
                    <TbRosetteDiscountCheckFilled size={25} />
                  </button>
                </div>
              </div>

              <p className="flex justify-between items-center w-full dark:bg-gray-700 dark:text-white bg-white col-span-2 py-2 px-5 rounded-md">
                Toplam Tutar
                <span className="text-primary dark:text-white font-semibold text-2xl">
                  {user.emailVerified === true
                    ? discountPrice * seats.length
                    : 650 * seats.length}
                  ₺
                </span>
              </p>
              <Link
                onClick={paymentDone}
                className="w-full flex items-center gap-x-3 col-start-1 col-end-3 p-4 rounded-md border dark:border-gray-700 dark:hover:bg-gray-700 bg-primary dark:bg-gray-800 text-white hover:bg-primary/90 transition-all"
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
