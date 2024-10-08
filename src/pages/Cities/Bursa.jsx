import React from "react";

const Bursa = () => {
  return (
    <div className="w-full">
      <img
        className="h-[500px] w-full object-cover"
        src="https://firebasestorage.googleapis.com/v0/b/dogaturizm-5858.appspot.com/o/bursa.jpg?alt=media&token=fake-token"
        alt="Bursa"
      />
      <div className="container mx-auto mt-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Bursa'yı Keşfet
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Yeşil Bursa’nın tarihini ve doğal güzelliklerini keşfedin.
        </p>
      </div>

      <div className="container mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img
            className="h-48 w-full object-cover"
            src="https://kampturu.com/wp-content/uploads/2022/12/uludag-2.jpeg"
            alt="Uludağ"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 dark:text-white">Uludağ</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Türkiye'nin en ünlü kayak merkezlerinden biri olan Uludağ, kış
              sporları ve doğa yürüyüşleri için ideal bir yer.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img
            className="h-48 w-full object-cover"
            src="https://holitera.com/blog/wp-content/uploads/2022/12/izz1124_large.jpg"
            alt="Yeşil Türbe"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 dark:text-white">
              Yeşil Türbe
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Osmanlı döneminin en güzel yapılarından biri olan Yeşil Türbe,
              muhteşem mimarisiyle ünlüdür.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img
            className="h-48 w-full object-cover"
            src="https://img.piri.net/mnresize/900/-/resim/imagecrop/2022/11/17/01/36/resized_4584b-f684b7a0cumalc4b1kc4b1zc4b1k.jpg"
            alt="Cumalıkızık Köyü"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 dark:text-white">
              Cumalıkızık Köyü
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Osmanlı'dan günümüze kadar korunmuş bu tarihi köy, geleneksel
              evleri ve kahvaltı sofralarıyla ünlüdür.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 px-4 text-center pb-5">
        <p className="text-gray-600 dark:text-gray-400">
          Bursa, doğal güzellikleri ve tarihi dokusuyla ziyaretçilerine eşsiz
          bir deneyim sunar. Doğayı keşfedin, tarihi yerleri gezin ve Bursa’nın
          lezzetli yemeklerini tadın!
        </p>
      </div>
    </div>
  );
};

export default Bursa;
