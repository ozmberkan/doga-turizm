import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";
import { useForm } from "react-hook-form";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "~/firebase/firebaseConfig";
import { toast } from "react-toastify";
import { contactInput } from "~/data/data";

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
          <div className="flex flex-col gap-y-2">
            {contactInput.map((input) => (
              <div key={input.id}>
                <label
                  htmlFor={input.name}
                  className="block text-sm font-semibold mb-2"
                >
                  {input.label}
                </label>
                <input
                  type={input.type}
                  id={input.name}
                  name={input.name}
                  {...register(input.name)}
                  placeholder={input.placeholder}
                  required
                  className="w-full p-2 border placeholder:text-sm rounded-md ring-2 ring-offset-2 outline-none ring-primary"
                />
              </div>
            ))}
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
