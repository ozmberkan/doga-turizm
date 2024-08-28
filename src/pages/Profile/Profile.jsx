import React from "react";
import { BiSolidRightArrow, BiUser } from "react-icons/bi";
import { BsTicket } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { Link, Outlet, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";
import { BiMailSend } from "react-icons/bi";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "~/firebase/firebaseConfig";
import { toast } from "react-toastify";

const Profile = () => {
  const location = useLocation();
  const { user } = useSelector((store) => store.user);

  const emailVer = async (e) => {
    e.preventDefault();
    try {
      await sendEmailVerification(auth.currentUser);
      toast.success(
        "E-Posta Doğrulama Maili Gönderildi. Lütfen e-posta kutunuzu kontrol ediniz."
      );
    } catch (error) {
      toast.error(
        "E-Posta Doğrulama Maili Gönderilirken bir hata oluştu. Sürekli istek algılandı."
      );
    }
  };

  const newPassword = async (e) => {
    e.preventDefault();
    try {
      await sendEmailVerification(auth.currentUser);
      toast.success("Şifre Değiştirme Maili Gönderildi.");
    } catch (error) {
      toast.error("Şifre Değiştirme Maili Gönderilirken bir hata oluştu.");
    }
  };

  const renderInputField = (label, value) => (
    <div className="flex flex-col gap-y-2">
      <label className="text-xs text-zinc-500/60">{label}</label>
      <div className="flex gap-x-1">
        <input
          type="text"
          className="bg-[#f9f9f9] rounded-md border px-4 py-2 outline-none"
          value={value || ""}
          readOnly
        />
        {/* <span className="rounded-md p-2 bg-green-200 text-green-500 flex justify-center items-center cursor-pointer">
          <CiEdit size={25} />
        </span> */}
      </div>
    </div>
  );

  return (
    <div className="flex w-full h-screen p-5 gap-x-5 sm:flex-row flex-col gap-y-5">
      <ProfileMenu />
      <div className="w-full flex flex-col gap-y-5 ">
        {location.pathname !== "/profile/mytickets" &&
          location.pathname !== "/profile/lasttickets" && (
            <div className="p-5 bg-white rounded-md border flex flex-col gap-y-5 relative">
              <h1 className="text-2xl font-rubik mb-3">
                Bilgilerini Görüntüle
              </h1>
              <form className="sm:flex sm:flex-row sm:gap-x-5 flex flex-col gap-y-3 ">
                {renderInputField("Ad Soyad", user.displayName)}
                {renderInputField("Cep Telefonu", user.phoneNumber)}
                {renderInputField("E-Posta", user.email)}
                {user.emailVerified === false ? (
                  <div className="w-full flex  gap-x-2">
                    <div className=" w-full flex flex-col gap-y-2">
                      <label className="text-xs text-zinc-500/60">
                        E-Postanı doğrulaman gerek!
                      </label>
                      <div className="bg-[#f9f9f9] rounded-md border px-4 py-2 flex items-center justify-between">
                        E-Posta Doğrula
                        <button
                          onClick={emailVer}
                          className="bg-green-200 text-green-500  rounded-md flex justify-center items-center px-4"
                        >
                          <BiMailSend size={25} />
                        </button>
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-y-2">
                      <label className="text-xs text-zinc-500/60">
                        Yeni şifre oluşturmak mı istiyorsun ?
                      </label>
                      <div className="bg-[#f9f9f9] rounded-md border px-4 py-2 flex items-center justify-between">
                        Şifre Değiştir
                        <button
                          onClick={newPassword}
                          className="bg-green-200 text-green-500  rounded-md flex justify-center items-center px-4"
                        >
                          <BiMailSend size={25} />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </form>
              {/* <div className="mt-5">
                <button className="px-4 py-2 rounded-md border">Kaydet</button>
              </div> */}
            </div>
          )}

        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
