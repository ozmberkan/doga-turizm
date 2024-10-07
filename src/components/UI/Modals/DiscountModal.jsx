import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "~/firebase/firebaseConfig";
import { setUpdate } from "~/redux/slices/userSlice";
import { MdOutlineDiscount } from "react-icons/md";
import { CgCloseR } from "react-icons/cg";
import { MdOutlineContentCopy } from "react-icons/md";
import { toast } from "react-toastify";
import { FiAlertCircle } from "react-icons/fi";

const DiscountModal = ({ setIsModalOpen }) => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const closeModal = async () => {
    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        hasBeenLogin: true,
      });

      dispatch(setUpdate({ ...user, hasBeenLogin: true }));
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const copyText = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("DOGA50");
    toast.success("Başarıyla indirim kodu kopyalandı.");
  };

  return (
    <div>
      <div
        className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 "
        onClick={closeModal}
      >
        <div
          className="bg-white dark:bg-gray-900 rounded-md shadow-lg max-w-2xl w-full flex flex-col relative z-10 overflow-hidden "
          onClick={(e) => e.stopPropagation()}
        >
          <FiAlertCircle className="text-primary/20 dark:text-gray-700 rotate-12 text-[250px] absolute -z-20 -bottom-16 -right-20" />
          <div className="py-4 rounded-t-md text-primary w-full dark:bg-gray-800 dark:text-gray-400 bg-primary/20 flex justify-between items-center px-4 gap-x-2">
            <span className="flex items-center gap-x-3">
              <MdOutlineDiscount size={20} />
              <h1 className="text-lg font-semibold">İndirim Fırsatı!</h1>
            </span>
            <button
              onClick={closeModal}
              className=" text-primary py-2 px-4 rounded hover:bg-primary/10 transition-colors dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <CgCloseR />
            </button>
          </div>
          <div className="w-full h-full flex flex-col gap-y-3 p-5">
            <h1 className="text-xl text-zinc-700 dark:text-white">
              Merhaba, Doğa Turizm'e Hoşgeldin!
            </h1>
            <p className="dark:text-white">
              Bizlere duymuş olduğunuz güven için teşekkür ederiz. Sana özel bir
              indirim kodu hazırladık. E-Postanı Doğruladıktan sonra indirim
              kodunu kullanarak bir sonraki rezervasyonunda 50TL indirim
              kazanabilirsin.
            </p>
            <form className="flex gap-x-3 items-center">
              <input
                type="text"
                readOnly
                value={"DOGA50"}
                className="px-4 py-2 h-10 rounded-md border bg-zinc-200/40 outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white
                "
              />
              <button
                onClick={copyText}
                className="bg-primary/25 text-primary p-4 py-2 h-10 rounded-md dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                <MdOutlineContentCopy />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountModal;
