import React from "react";
import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";
import { Link } from "react-router-dom";

const Hiring = () => {
  return (
    <FooterDetailBox>
      <div className="flex items-center justify-start mb-6">
        <img src={logoBlack} alt="Doğa Turizm Logo" className="w-44" />
      </div>
      <hr className="w-full my-4" />
      <div className="flex flex-col gap-y-5 items-left text-left">
        <h1 className="text-4xl">Şoförümüz Ol</h1>
        <p className="text-left ">
          Doğa Turizm olarak, çevreye duyarlı ve güvenli ulaşımın öncüsü olarak
          sizleri ekibimize katılmaya davet ediyoruz. Eğer siz de doğa dostu bir
          şirketin parçası olmak ve profesyonel bir sürücü olarak kariyerinize
          yeni bir yön vermek istiyorsanız, başvurularınızı bekliyoruz.
        </p>
        <div className="flex flex-col gap-y-4 ">
          <h2 className="text-2xl font-semibold">Neden Biz?</h2>
          <p>
            Çevreye duyarlılığımız ve kaliteli hizmet anlayışımız ile sektörde
            öncü bir rol üstleniyoruz. Elektrikli otobüslerimiz ve
            sürdürülebilir ulaşım çözümlerimizle doğaya olan katkımızı
            sürdürüyoruz.
          </p>
          <h2 className="text-2xl font-semibold">Aradığımız Nitelikler</h2>
          <p>
            • En az 2 yıl deneyimli ve geçerli bir sürücü belgesine sahip olmak
            <br />
            • İyi derecede trafik kurallarına hakim olmak
            <br />
            • Müşteri odaklı ve iletişim becerileri güçlü olmak
            <br />• Çevre bilincine sahip olmak ve doğa dostu uygulamalara uyum
            sağlamak
          </p>
          <h2 className="text-2xl font-semibold">Başvuru Süreci</h2>
          <p>
            Başvurunuzu dogaturizm@carier.com üzerinden bize iletebilir veya{" "}
            <Link to="/contact" className="text-green-500 underline">
              başvuru formu linki
            </Link>{" "}
            üzerinden online başvuru yapabilirsiniz. Tüm başvurular titizlikle
            değerlendirilecek ve uygun adaylarla iletişime geçilecektir.
          </p>
          <h2 className="text-2xl font-semibold">
            Sizi Aramızda Görmek İsteriz!
          </h2>
          <p>
            Doğa Turizm ailesinin bir parçası olmak ve çevre dostu bir ulaşım
            hizmetine katkıda bulunmak için başvurularınızı sabırsızlıkla
            bekliyoruz.
          </p>
        </div>
      </div>
    </FooterDetailBox>
  );
};

export default Hiring;
