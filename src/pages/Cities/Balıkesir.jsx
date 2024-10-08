import React from "react";

const Balikesir = () => {
  return (
    <div className="w-full">
      <img
        className="h-[500px] w-full object-cover"
        src="https://firebasestorage.googleapis.com/v0/b/dogaturizm-5858.appspot.com/o/bal%C4%B1kesir.jpg?alt=media&token=8fbe5b76-0989-42d1-8cb9-702ae2651075"
        alt="Balıkesir"
      />
      <div className="container mx-auto mt-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Balıkesir'i Keşfet
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Ege ve Marmara’nın buluştuğu Balıkesir'in güzelliklerini keşfedin.
        </p>
      </div>

      <div className="container mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img
            className="h-48 w-full object-cover"
            src="https://static.baranselgrup.com/nwm-147370-w1920-cunda-adasi-hakkinda-bilinmesi-gerekenler.png"
            alt="Cunda Adası"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 dark:text-white">
              Cunda Adası
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Ege Denizi’nin kıyısında yer alan Cunda Adası, tarihi sokakları ve
              eşsiz plajlarıyla ünlüdür.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img
            className="h-48 w-full object-cover"
            src="https://gezimanya.com/sites/default/files/inline-images/kazdaglari_0.jpg"
            alt="Kaz Dağları"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 dark:text-white">
              Kaz Dağları
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Doğa tutkunları için ideal bir destinasyon olan Kaz Dağları,
              zengin bitki örtüsü ve oksijen oranıyla ünlüdür.
            </p>
          </div>
        </div>

        <div className="bg-white  dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img
            className="h-48 w-full object-cover"
            src="https://www.geziport.com.tr/upload/images/cunda%20adas%C4%B1/ayvalik.jpg"
            alt="Ayvalık"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 dark:text-white">Ayvalık</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Ayvalık, tarihi Rum evleri, zeytinlikleri ve muhteşem deniz
              manzarasıyla Balıkesir'in incilerinden biridir.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 px-4 text-center pb-5">
        <p className="text-gray-600">
          Balıkesir, doğal ve tarihi zenginlikleriyle ziyaretçilerine huzurlu
          bir tatil sunar. Cunda Adası’nda denizin keyfini çıkarın, Kaz
          Dağları'nda doğayla buluşun, Ayvalık'ta tarih içinde yürüyün!
        </p>
      </div>
    </div>
  );
};

export default Balikesir;
