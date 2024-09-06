import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="flex flex-col items-center justify-center p-6  rounded-lg  max-w-2xl w-full text-center">
        <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-rubik font-bold bg-gradient-to-r from-primary to-green-700 bg-clip-text text-transparent">
          404!
        </span>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-rubik font-medium text-black mt-4 mb-6 px-4">
          Aradığınız sayfa burada değil, sayfayı bulamadık ya da yapım
          aşamasındayız, ama size yardımcı olmak için buradayız.
        </h1>
        <p className="text-sm sm:text-base text-zinc-600/70 mb-6">
          Üzgünüz, lütfen ana sayfaya dönün veya arama yapın.
        </p>
        <Link
          to="/"
          className="px-4 py-2 bg-primary text-white border rounded-md font-rubik hover:bg-green-500 transition-colors duration-300"
        >
          Anasayfaya geri dön!
        </Link>
      </div>
    </div>
  );
};

export default Error;
