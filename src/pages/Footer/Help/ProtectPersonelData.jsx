import React from "react";
import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";

const ProtectPersonelData = () => {
  return (
    <FooterDetailBox>
      <div className="flex items-center justify-start mb-6">
        <img src={logoBlack} alt="Doğa Turizm Logo" className="w-44" />
      </div>
      <hr className="w-full my-4" />
      <div className="flex flex-col gap-y-5 items-start text-left">
        <h1 className="text-4xl">Kişisel Verilerin Korunması</h1>
        <p className="text-left ">
          Doğa Turizm olarak, kişisel verilerinizin güvenliğine büyük önem
          veriyoruz. Gizliliğinizi korumak ve veri güvenliğini sağlamak amacıyla
          çeşitli önlemler alıyoruz. İşte kişisel verilerinizi korumak için
          uyguladığımız bazı temel prensipler:
        </p>
        <div className="flex flex-col gap-y-4 ">
          <h2 className="text-2xl font-semibold">
            1. Veri Toplama ve Kullanım
          </h2>
          <p>
            Kişisel verilerinizi yalnızca hizmetlerimizi sağlamak ve
            iyileştirmek amacıyla topluyoruz. Bu veriler, rezervasyonlarınız,
            müşteri destek talepleriniz ve geri bildirimleriniz gibi çeşitli
            işlemler için kullanılabilir.
          </p>
          <h2 className="text-2xl font-semibold">2. Veri Güvenliği</h2>
          <p>
            Kişisel verilerinizi korumak için en son güvenlik teknolojilerini ve
            prosedürlerini kullanıyoruz. Verileriniz, yetkisiz erişimlere karşı
            korunur ve şifreleme yöntemleri ile güvenliği sağlanır.
          </p>
          <h2 className="text-2xl font-semibold">3. Veri Paylaşımı</h2>
          <p>
            Kişisel verilerinizi yalnızca yasal yükümlülüklerimizi yerine
            getirmek ve hizmetlerimizi sunmak için gerekli olan durumlarda
            üçüncü taraflarla paylaşabiliriz. Bu tür paylaşımlar, verilerinizin
            güvenliğini sağlayacak şekilde yapılır.
          </p>
          <h2 className="text-2xl font-semibold">4. Haklarınız</h2>
          <p>
            Kişisel verilerinizle ilgili olarak erişim, düzeltme, silme ve işlem
            kısıtlaması haklarına sahipsiniz. Bu haklarınızı kullanmak için
            bizimle iletişime geçebilirsiniz.
          </p>
          <h2 className="text-2xl font-semibold">5. Politika Güncellemeleri</h2>
          <p>
            Çerez ve veri koruma politikalarımızda zaman zaman değişiklikler
            yapabiliriz. Güncellemeleri takip etmek için bu sayfayı düzenli
            olarak kontrol etmenizi öneririz.
          </p>
        </div>
      </div>
    </FooterDetailBox>
  );
};

export default ProtectPersonelData;
