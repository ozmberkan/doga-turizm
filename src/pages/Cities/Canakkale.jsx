import React from "react";

const Canakkale = () => {
  return (
    <div className="w-full">
      <img
        className="h-[500px] w-full object-cover"
        src="https://firebasestorage.googleapis.com/v0/b/dogaturizm-5858.appspot.com/o/canakkale.jpg?alt=media&token=fake-token"
        alt="Çanakkale"
      />
      <div className="container mx-auto mt-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Çanakkale'yi Keşfet
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Tarih dolu Çanakkale’nin doğal ve tarihi güzelliklerini keşfedin.
        </p>
      </div>

      <div className="container mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
        <div className="bg-white dark:bg-gray-800  rounded-lg shadow-md overflow-hidden">
          <img
            className="h-48 w-full object-cover"
            src="https://catab.ktb.gov.tr/Resim/192890,sehitler-abidesi-677-x-381jpg.png?0"
            alt="Çanakkale Şehitler Anıtı"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 dark:text-white">
              Çanakkale Şehitler Anıtı
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Çanakkale Savaşı'nın anısına inşa edilen bu anıt, şehitlerimizi
              onurlandırmak için yapılmış sembolik bir yapıdır.
            </p>
          </div>
        </div>

        <div className="bg-white  dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img
            className="h-48 w-full object-cover"
            src="https://basin.ktb.gov.tr/Resim/35505,dsc6412345678enhancerjpg.png?0"
            alt="Truva Antik Kenti"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 dark:text-white">
              Truva Antik Kenti
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Dünyaca ünlü Truva Atı ve antik kalıntılarıyla bilinen Truva,
              Homeros'un İlyada Destanı'na konu olmuştur.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800  rounded-lg shadow-md overflow-hidden">
          <img
            className="h-48 w-full object-cover"
            src="https://ayderkibris.com/uploads/p/o/Z4lX9gh8ApIW.jpg"
            alt="Aynalı Çarşı"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 dark:text-white">
              Aynalı Çarşı
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Çanakkale'nin ünlü tarihi çarşısı olan Aynalı Çarşı, geleneksel el
              sanatları ve alışveriş imkanlarıyla dolu.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 px-4 text-center pb-5">
        <p className="text-gray-600 ">
          Çanakkale, tarihi ve doğal zenginlikleriyle her köşesinde bir hikaye
          barındırır. Şehitler Anıtı’nı ziyaret edin, Truva Antik Kenti'ni
          keşfedin ve Aynalı Çarşı'da alışveriş yapın!
        </p>
      </div>
    </div>
  );
};

export default Canakkale;
