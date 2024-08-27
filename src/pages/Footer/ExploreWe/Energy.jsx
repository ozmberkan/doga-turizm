import React from "react";
import logoBlack from "~/assets/logos/LogoBlack.png";
import FooterDetailBox from "~/components/Footer/FooterDetailBox";

const Energy = () => {
  return (
    <FooterDetailBox>
      <div className="flex items-center justify-left mb-12">
        <img src={logoBlack} alt="Doğa Turizm Logo" className="w-44" />
      </div>
      <hr className="w-full my-4" />
      <div className="flex flex-col gap-y-5 items-left">
        <h1 className="text-4xl">Yenilenebilir Enerji</h1>
        <p className="text-left ">
          Doğa Turizm olarak, sürdürülebilirlik ve çevre dostu uygulamalar
          konusundaki kararlılığımızı her alanda göstermekteyiz. Yenilenebilir
          enerji, çevre üzerindeki etkimizi azaltmanın ve karbon ayak izimizi
          minimumda tutmanın temel taşlarından biridir. Şirketimiz,
          yenilenebilir enerji kaynaklarını kullanarak doğaya olan bağlılığını
          ve sorumluluğunu güçlü bir şekilde ortaya koymaktadır.
        </p>
        <p className="text-left ">
          <b>**Güneş Enerjisi:**</b> Şirketimiz, operasyonlarımızda güneş
          enerjisi kullanarak enerji ihtiyacımızı temiz ve sürdürülebilir bir
          kaynaktan karşılamaktadır. Güneş panellerimiz, enerji maliyetlerini
          düşürürken, aynı zamanda karbon salınımını azaltmaktadır.
        </p>
        <p className="text-left ">
          <b>**Rüzgar Enerjisi:**</b> Rüzgar türbinleri, yenilenebilir enerji
          stratejimizin bir diğer önemli parçasıdır. Rüzgar enerjisi kullanarak
          enerji üretimimizi çeşitlendiriyor ve rüzgarın gücünden faydalanarak
          temiz enerji sağlıyoruz.
        </p>
        <p className="text-left ">
          <b>**Enerji Verimliliği:**</b> Enerji verimliliğini artırmak ve
          gereksiz enerji tüketimini azaltmak için çeşitli stratejiler
          uyguluyoruz. Enerji tasarrufu sağlayan aydınlatma sistemleri, yüksek
          verimli cihazlar ve akıllı enerji yönetim sistemleri kullanıyoruz.
        </p>
        <p className="text-left ">
          <b>**Geleceğe Yatırım:**</b> Yenilenebilir enerji projeleri sadece
          çevreyi korumakla kalmaz, aynı zamanda geleceğe yatırım yapmamızı
          sağlar. Şirketimiz, sürdürülebilir enerji çözümlerini destekleyerek,
          hem çevreyi hem de toplumu gelecekte daha temiz bir dünya bırakmayı
          hedefliyor.
        </p>
        <p className="text-left">
          Doğa Turizm olarak, yenilenebilir enerji kullanımı ve çevre dostu
          uygulamalarımızla, doğayı korumak ve ekosistemleri desteklemek adına
          adımlar atıyoruz. Bu vizyon doğrultusunda, enerji kullanımımızı
          sürekli olarak gözden geçiriyor ve en iyi uygulamaları benimsemeye
          devam ediyoruz. Siz değerli misafirlerimizle bu sürdürülebilir
          geleceği inşa etmekten gurur duyuyoruz.
        </p>
      </div>
    </FooterDetailBox>
  );
};

export default Energy;
