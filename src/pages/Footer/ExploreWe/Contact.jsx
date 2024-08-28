import React from "react";
import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";
import { useForm } from "react-hook-form";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "~/firebase/firebaseConfig";
import { toast } from "react-toastify";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const sendMessage = async (data) => {
    try {
      const newContactRef = doc(collection(db, "contacts"));
      await setDoc(newContactRef, {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
      toast.success("Başarıyla mesajınız gönderildi!");
      reset();
    } catch (error) {
      toast.error(
        "Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyin."
      );
    }
  };

  return (
    <FooterDetailBox>
      <div className="flex items-center justify-start mb-6">
        <img src={logoBlack} alt="Doğa Turizm Logo" className="w-44" />
      </div>
      <hr className="w-full my-4" />
      <div className="flex flex-col gap-y-5 items-start">
        <h1 className="text-4xl">İletişim</h1>
        <p className="text-left">
          Bizimle iletişime geçmek için aşağıdaki formu doldurabilirsiniz.
          Sorularınızı, önerilerinizi veya geri bildirimlerinizi bize iletmekten
          çekinmeyin. Size en kısa sürede geri dönüş yapacağız.
        </p>
        <form onSubmit={handleSubmit(sendMessage)} className="w-full max-w-lg">
          <div className="flex flex-col gap-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2"
              >
                Adınız
              </label>
              <input
                type="text"
                id="name"
                name="name"
                {...register("name")}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2"
              >
                E-posta Adresiniz
              </label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email")}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-semibold mb-2"
              >
                Telefon Numaranız (Opsiyonel)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                {...register("phone")}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-2"
              >
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                {...register("message")}
                required
                rows="4"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white p-3 rounded-md mt-4 hover:bg-green-600 transition duration-300"
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </FooterDetailBox>
  );
};

export default Contact;
