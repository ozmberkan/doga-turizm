import React from "react";
import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";
import { Link } from "react-router-dom";

const Rent = () => {
  return (
    <FooterDetailBox>
      <div className="flex items-center justify-start mb-6">
        <img src={logoBlack} alt="Doğa Turizm Logo" className="w-44" />
      </div>
      <hr className="w-full my-4" />
      <div className="flex flex-col gap-y-5 items-start text-left">
        <h1 className="text-4xl">Otobüsünü Kirala</h1>
        <p className="text-left ">
          Doğa Turizm olarak, otobüs kiralama hizmetimizle ihtiyaçlarınıza uygun
          esnek ve konforlu çözümler sunuyoruz. İster grup gezileri, okul
          etkinlikleri, ister özel organizasyonlar için geniş ve konforlu
          otobüslerimizle hizmetinizdeyiz.
        </p>
        <div className="flex flex-col gap-y-4 ">
          <h2 className="text-2xl font-semibold">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <p>
            • Modern ve konforlu araçlarımız ile güvenli ulaşım
            <br />
            • Çevre dostu elektrikli otobüs seçenekleri
            <br />
            • Esnek kiralama süreleri ve uygun fiyat seçenekleri
            <br />• Profesyonel şoför hizmeti
          </p>
          <h2 className="text-2xl font-semibold">
            Nasıl Kiralama Yapabilirsiniz?
          </h2>
          <p>
            Otobüs kiralama taleplerinizi dogaturizm@help.com üzerinden bize
            iletebilir veya{" "}
            <Link to="/contact" className="text-green-500 underline">
              kiralama formu linki
            </Link>{" "}
            üzerinden online başvuru yapabilirsiniz. Talep formunuzu
            doldurduktan sonra, en kısa sürede sizinle iletişime geçeceğiz ve
            kiralama süreci hakkında detayları paylaşacağız.
          </p>
          <h2 className="text-2xl font-semibold">Bizimle İletişime Geçin</h2>
          <p>
            Sorularınız veya özel talepleriniz için bizimle iletişime geçmekten
            çekinmeyin. Size yardımcı olmak ve ihtiyaçlarınıza uygun en iyi
            çözümü sunmak için buradayız.
          </p>
        </div>
      </div>
    </FooterDetailBox>
  );
};

export default Rent;
