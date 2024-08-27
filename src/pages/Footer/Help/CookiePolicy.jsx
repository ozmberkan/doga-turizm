import React from "react";
import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <FooterDetailBox>
      <div className="flex items-center justify-start mb-6">
        <img src={logoBlack} alt="Doğa Turizm Logo" className="w-44" />
      </div>
      <hr className="w-full my-4" />
      <div className="flex flex-col gap-y-5 items-start">
        <h1 className="text-4xl">Çerez Politikası</h1>
        <p className="text-left">
          <strong>Çerezler Nedir?</strong> Çerezler, web tarayıcınızda saklanan
          küçük veri dosyalarıdır. Bu dosyalar, web sitelerinin sizinle ilgili
          bilgileri hatırlamasına yardımcı olur ve tarayıcı deneyiminizi
          kişiselleştirir.
        </p>
        <p className="text-left ">
          <strong>Çerezleri Nasıl Kullanıyoruz?</strong> Web sitemiz, kullanıcı
          deneyimini geliştirmek ve analiz yapmak amacıyla çerezler
          kullanmaktadır. Çerezler sayesinde, ziyaretçi davranışlarını analiz
          edebilir ve hizmetlerimizi iyileştirebiliriz. Çerezler ayrıca,
          kullanıcıların giriş bilgilerini hatırlamaya ve tercihlerini
          kaydetmeye yardımcı olur.
        </p>
        <p className="text-left">
          <strong>Çerez Türleri</strong>
          <ul className="list-disc list-inside mt-2">
            <li>
              <strong>Zorunlu Çerezler:</strong> Web sitesinin düzgün çalışması
              için gerekli çerezlerdir. Bu çerezler genellikle tarayıcı
              kapatıldığında silinir.
            </li>
            <li>
              <strong>Performans Çerezleri:</strong> Web sitesinin performansını
              analiz etmek için kullanılır. Bu çerezler, kullanıcıların web
              sitesindeki davranışlarını izler.
            </li>
            <li>
              <strong>Fonksiyonel Çerezler:</strong> Kullanıcı tercihlerini
              hatırlamak ve daha kişiselleştirilmiş bir deneyim sunmak için
              kullanılır.
            </li>
            <li>
              <strong>Reklam Çerezleri:</strong> İlgi alanlarına dayalı
              reklamlar sunmak ve reklam performansını izlemek için kullanılır.
            </li>
          </ul>
        </p>
        <p className="text-left ">
          <strong>Çerez Yönetimi</strong> Çerezleri tarayıcı ayarlarınızdan
          yönetebilir veya devre dışı bırakabilirsiniz. Ancak, çerezleri devre
          dışı bırakmak bazı web sitesi işlevlerini etkileyebilir.
        </p>
        <p className="text-left ">
          <strong>Gizlilik Politikamız</strong> Çerezler ve diğer gizlilik
          konuları hakkında daha fazla bilgi için lütfen{" "}
          <Link to="/privacy" className="text-green-500 underline">
            Gizlilik Politikamızı
          </Link>{" "}
          inceleyin.
        </p>
      </div>
    </FooterDetailBox>
  );
};

export default CookiePolicy;
