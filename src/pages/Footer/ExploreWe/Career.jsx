import React from "react";
import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";
import { Link } from "react-router-dom";

const Career = () => {
  return (
    <FooterDetailBox>
      <div className="flex items-center justify-start mb-12">
        <img src={logoBlack} alt="Doğa Turizm Logo" className="w-44" />
      </div>
      <hr className="w-full my-4" />
      <div className="flex flex-col gap-y-5 items-start">
        <h1 className="text-4xl">Kariyer</h1>
        <div className="text-left ">
          <p>
            Doğa Turizm olarak, çevre dostu ve sürdürülebilir bir geleceğe
            katkıda bulunmak amacıyla dinamik ve yetenekli bireylerden oluşan
            bir ekip oluşturmayı hedefliyoruz. Şirketimizdeki her bir çalışan,
            doğa ve çevre bilincine sahip, yaratıcı ve yenilikçi yaklaşımlarla
            ekibimize değer katmaktadır.
          </p>

          <h2 className="text-2xl font-semibold mt-5">Neden Doğa Turizm?</h2>
          <ul className="list-disc list-inside mt-2">
            <li>
              <strong>Sürdürülebilirlik ve Çevre Bilinci:</strong>{" "}
              Çalışanlarımız, doğa ve çevre konularında güçlü bir bilinçle
              hareket ederler. Elektrikli otobüslerimizden, enerji tasarrufu
              sağlayan sistemlerimize kadar her aşamada çevre dostu uygulamalara
              katkıda bulunur.
            </li>
            <li>
              <strong>Kişisel ve Profesyonel Gelişim:</strong> Çalışanlarımızın
              kişisel ve profesyonel gelişimlerine büyük önem veriyoruz.
              Düzenlediğimiz eğitim programları, seminerler ve atölye
              çalışmaları ile ekip üyelerimizin bilgi ve becerilerini sürekli
              olarak geliştirmelerine destek oluyoruz.
            </li>
            <li>
              <strong>Yenilikçi ve Destekleyici Çalışma Ortamı:</strong>{" "}
              İnovasyonu teşvik eden bir çalışma ortamı sunuyoruz. Yaratıcı
              fikirlerinizi paylaşabileceğiniz ve gelişime katkıda
              bulunabileceğiniz bir atmosfer sağlıyoruz.
            </li>
            <li>
              <strong>Toplumsal Sorumluluk:</strong> Sosyal sorumluluk
              projelerine aktif katılımı destekliyoruz. Çalışanlarımız, çevresel
              ve toplumsal konularda farkındalık oluşturacak projelerde yer
              alabilirler.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-5">Açık Pozisyonlar</h2>
          <p>
            Doğa Turizm olarak, çeşitli alanlarda açık pozisyonlar sunuyoruz.
            Ekibimize katılmak isteyen adaylar, aşağıdaki alanlarda başvuruda
            bulunabilirler:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <strong>Rehberlik ve Tur Operatörlüğü:</strong> Doğa turlarımızda
              misafirlerimize rehberlik edecek, doğa hakkında bilgi verecek ve
              unutulmaz bir deneyim sunacak profesyoneller arıyoruz.
            </li>
            <li>
              <strong>Sürdürülebilirlik ve Çevre Yönetimi:</strong> Çevre dostu
              uygulamaları geliştirecek ve uygulayacak uzmanlar arıyoruz.
              Sürdürülebilir projelerde rol alacak takım arkadaşları
              aramaktayız.
            </li>
            <li>
              <strong>Müşteri Hizmetleri:</strong> Misafirlerimizin
              memnuniyetini sağlamak ve yüksek kaliteli hizmet sunmak için
              müşteri hizmetleri alanında yetenekli kişiler arıyoruz.
            </li>
            <li>
              <strong>Pazarlama ve İletişim:</strong> Şirketimizin vizyonunu ve
              misyonunu etkili bir şekilde iletecek, çevre bilincini yayacak ve
              markamızın tanıtımını yapacak pazarlama ve iletişim uzmanları
              arıyoruz.
            </li>
            <li>
              <strong>Destek ve İdari İşler:</strong> Operasyonel süreçleri
              destekleyecek ve günlük iş akışını yönetecek idari personel
              arıyoruz.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-5">Başvuru Süreci</h2>
          <p>
            Doğa Turizm’de kariyer fırsatlarını keşfetmek ve ekibimize katılmak
            için{" "}
            <Link to="/contact" className="text-green-500 underline">
              web sitemizdeki başvuru formunu doldurabilir
            </Link>{" "}
            veya özgeçmişinizi dogaturizm@carier.com adresine gönderebilirsiniz.
            Başvurularınız incelenecek ve uygun pozisyonlarda sizinle iletişime
            geçilecektir.
          </p>
          <p className="mt-4">
            Doğa Turizm ailesinin bir parçası olmak ve çevreye duyarlı bir
            geleceği inşa etmek için sizleri aramızda görmekten mutluluk
            duyarız.
          </p>
        </div>
      </div>
    </FooterDetailBox>
  );
};

export default Career;
