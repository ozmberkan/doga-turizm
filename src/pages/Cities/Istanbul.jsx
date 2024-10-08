import React from "react";

const Istanbul = () => {
  return (
    <div className="w-full">
      <img
        className="h-[500px] w-full object-cover"
        src="https://firebasestorage.googleapis.com/v0/b/dogaturizm-5858.appspot.com/o/istanbul.jpg?alt=media&token=2ba3aa32-cf11-4f14-80b6-59d5633a5cb2"
        alt="İstanbul"
      />
      <div className="container mx-auto mt-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          İstanbul'u Keşfet
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          İstanbul’un eşsiz güzelliklerini ve tarihi yerlerini keşfedin.
        </p>
      </div>

      <div className="container mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img
            className="h-48 w-full object-cover"
            src="https://www.meroddi.com/wp-content/uploads/2022/06/ayasofyanin-gizemi-945x480.png"
            alt="Ayasofya"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 dark:text-white">Ayasofya</h2>
            <p className="text-gray-600 dark:text-gray-400">
              İstanbul’un sembolik yapılarından biri olan Ayasofya, hem müze hem
              de cami olarak büyük bir tarihi geçmişe sahip.
            </p>
          </div>
        </div>

        <div className="bg-white  dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img
            className="h-48 w-full object-cover"
            src="https://www.bizevdeyokuz.com/wp-content/uploads/sultanahmet-cami-istanbul-kapak.jpg"
            alt="Sultanahmet Meydanı"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 dark:text-white">
              Sultanahmet Meydanı
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Tarihi dokusuyla bilinen Sultanahmet Meydanı, çevresindeki camiler
              ve müzelerle turistlerin ilgisini çekiyor.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img
            className="h-48 w-full object-cover"
            src="https://blog.tatil.com/wp-content/uploads/2024/01/galata-kulesi-tarihi.webp"
            alt="Galata Kulesi"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 dark:text-white">
              Galata Kulesi
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              İstanbul'un eşsiz manzarasını izleyebileceğiniz bu tarihi kule,
              şehrin en çok ziyaret edilen yerlerinden biri.
            </p>
          </div>
        </div>
      </div>

      {/* Alt bilgi bölümü */}
      <div className="container mx-auto mt-10 px-4 text-center pb-5">
        <p className="text-gray-600">
          İstanbul'da gezilecek birçok yer bulunuyor. Boğaz'da yürüyüş yapmayı,
          tarihi mekanları ziyaret etmeyi ve eşsiz lezzetlerin tadına bakmayı
          unutmayın!
        </p>
      </div>
    </div>
  );
};

export default Istanbul;
