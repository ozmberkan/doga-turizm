import React, { useEffect } from "react";
import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";

const About = () => {
  return (
    <FooterDetailBox>
      <div className="flex items-center justify-start mb-6  ">
        <img src={logoBlack} alt="" className="w-44" />
      </div>
      <hr className="w-full my-4" />
      <div className="flex flex-col gap-y-5 items-start">
        <h1 className="text-4xl">Hakkımızda</h1>
        <p className="text-left">
          <b>Doğa Turizm</b>, çevreye duyarlı ve sürdürülebilir turizm
          anlayışıyla doğa severlere eşsiz bir deneyim sunmak amacıyla
          kurulmuştur. Şirketimiz, doğanın korumasını ve ekosistemlerin
          sürdürülebilirliğini ön planda tutarak, yeşil bir geleceğe katkıda
          bulunmayı hedefliyor.{" "}
        </p>
        <p>
          <b> Çevre Dostu Yaklaşımımız</b>, Doğa Turizm olarak, çevre bilincini
          her şeyin önünde tutuyoruz. Bu doğrultuda, tüm ulaşım araçlarımızı
          çevre dostu elektrikli otobüslerle donatmış bulunuyoruz. Elektrikli
          otobüslerimiz, sıfır emisyonlu bir sürüş deneyimi sunarak hava
          kirliliğini azaltmakta ve doğanın korunmasına önemli bir katkı
          sağlamaktadır. Modern teknolojiyle donatılmış bu araçlar, sessiz ve
          konforlu bir yolculuk sunarken, çevresel etkileri en aza
          indirgemektedir.
        </p>{" "}
        <p>
          <b>Sürdürülebilir Turizm Anlayışımız</b>, sadece ulaşım araçlarımızla
          sınırlı değildir. Doğa Turizm olarak, bütün operasyonlarımızda çevre
          dostu uygulamalara yer veriyoruz. Enerji tasarrufu sağlayan sistemler
          kullanıyor, geri dönüşüm projelerine destek veriyor ve doğa dostu
          malzemeler tercih ediyoruz. Ayrıca, hizmet verdiğimiz bölgelerde yerel
          topluluklarla işbirliği yaparak, hem çevre hem de sosyal sorumluluk
          projelerine katkıda bulunuyoruz.
        </p>
        <p>
          <b>Eşsiz Doğa Deneyimleri</b>, Müşterilerimize sunmuş olduğumuz tur
          paketleri, doğanın kalbinde unutulmaz anlar yaşamanız için özenle
          hazırlanmıştır. Doğa yürüyüşlerinden, ekoturizme kadar geniş bir
          yelpazede hizmet sunuyoruz. Doğanın sunduğu güzellikleri keşfetmek ve
          temiz hava eşliğinde huzurlu bir tatil geçirmek isteyenler için ideal
          bir tercih sunuyoruz. Rehberlerimiz, doğanın korunmasına yönelik
          bilgilendirmeler yaparak, ziyaretçilerimizi çevre bilinci konusunda da
          eğitiyor.
        </p>{" "}
        <p>
          <b>Misyon ve Vizyonumuz</b>, Misyonumuz doğa ile iç içe, çevre dostu
          bir turizm anlayışını yaymak ve bu anlayışla doğayı korumak adına
          adımlar atmaktır. Vizyonumuz ise, doğa turizmi sektöründe lider bir
          rol üstlenerek, tüm paydaşlarımızla birlikte sürdürülebilir bir
          geleceğin inşasına katkıda bulunmaktır. Doğa Turizm olarak, siz
          değerli misafirlerimizi çevre dostu bir yolculuğa çıkarmaktan ve
          doğanın muhteşem güzelliklerini keşfetmenize yardımcı olmaktan büyük
          mutluluk duyuyoruz. Doğayla uyum içinde, sorumlu ve keyifli bir
          deneyim için bizi tercih ettiğiniz için teşekkür ederiz.
        </p>
      </div>
    </FooterDetailBox>
  );
};

export default About;
