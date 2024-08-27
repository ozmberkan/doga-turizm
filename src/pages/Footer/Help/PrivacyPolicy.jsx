import React from "react";
import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";

const PrivacyPolicy = () => {
  return (
    <FooterDetailBox>
      <div className="flex items-center justify-start mb-6">
        <img src={logoBlack} alt="Doğa Turizm Logo" className="w-44" />
      </div>
      <hr className="w-full my-4" />
      <div className="flex flex-col gap-y-5 items-start">
        <h1 className="text-4xl">Gizlilik Politikası</h1>
        <p className="text-left ">
          <strong>Giriş</strong>
          <br />
          Bu Gizlilik Politikası, Doğa Turizm olarak, kişisel verilerinizi nasıl
          topladığımızı, kullandığımızı, sakladığımızı ve koruduğumuzu
          açıklamaktadır. Web sitemizi kullanarak, bu politikayı kabul etmiş
          olursunuz.
        </p>
        <p className="text-left ">
          <strong>Topladığımız Bilgiler</strong>
          <br />
          Web sitemizi ziyaret ettiğinizde, aşağıdaki bilgileri toplayabiliriz:
          <br />
          - Kişisel bilgiler (ad, e-posta adresi, telefon numarası)
          <br />
          - Kullanıcı davranışları (ziyaret edilen sayfalar, tıklama bilgileri)
          <br />- Teknik bilgiler (IP adresi, tarayıcı türü, işletim sistemi)
        </p>
        <p className="text-left ">
          <strong>Bilgilerin Kullanımı</strong>
          <br />
          Topladığımız bilgileri aşağıdaki amaçlarla kullanabiliriz:
          <br />
          - Size hizmet sunmak ve destek sağlamak
          <br />
          - Web sitemizin performansını analiz etmek ve geliştirmek
          <br />
          - Size güncellemeler ve teklifler hakkında bilgi vermek
          <br />- Yasal yükümlülükleri yerine getirmek
        </p>
        <p className="text-left ">
          <strong>Bilgilerin Korunması</strong>
          <br />
          Kişisel verilerinizi korumak için gerekli güvenlik önlemlerini
          alıyoruz. Verilerinizi korumak için çeşitli fiziksel, teknik ve idari
          önlemler uygulamaktayız. Ancak, internet üzerinden veri iletiminin
          tamamen güvenli olduğunu garanti edemeyiz.
        </p>
        <p className="text-left ">
          <strong>Bilgilerin Paylaşımı</strong>
          <br />
          Kişisel bilgilerinizi üçüncü taraflarla paylaşmayacağız, ancak yasal
          gereklilikler veya şirketin haklarını koruma amacıyla paylaşabiliriz.
          Üçüncü taraf hizmet sağlayıcılarla, yalnızca hizmetlerini sağlamak
          amacıyla veri paylaşabiliriz.
        </p>
        <p className="text-left ">
          <strong>Kullanıcı Hakları</strong>
          <br />
          Kişisel verilerinize erişim hakkına sahip olduğunuzu unutmayın.
          Kişisel verilerinizi güncelleme, düzeltme veya silme hakkınızı
          kullanabilirsiniz. İlgili taleplerinizi [e-posta adresi] adresine
          iletebilirsiniz.
        </p>
        <p className="text-left ">
          <strong>Politika Değişiklikleri</strong>
          <br />
          Gizlilik politikamız zaman zaman güncellenebilir. Politika
          değişikliklerini web sitemizde yayınlayacağız ve değişikliklerin
          yürürlüğe girmesiyle ilgili olarak sizi bilgilendireceğiz.
        </p>
        <p className="text-left ">
          <strong>İletişim</strong>
          <br />
          Gizlilik politikamız hakkında herhangi bir sorunuz varsa, lütfen
          bizimle iletişime geçin:
          <br />
          - E-posta: dogaturizm@help.com
          <br />
          - Telefon: +90123456789 
          <br />- Adres: İzmir, Türkiye
        </p>
      </div>
    </FooterDetailBox>
  );
};

export default PrivacyPolicy;
