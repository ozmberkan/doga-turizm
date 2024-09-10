import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";

const AllServices = () => {
  return (
    <FooterDetailBox>
      <div className="flex items-center justify-start mb-6  ">
        <img src={logoBlack} alt="" className="w-44" />
      </div>
      <hr className="w-full my-4" />
      <div className="flex flex-col gap-y-5 items-start">
        <h1 className="text-4xl">Hizmetlerimiz</h1>
        <p>
          Doğayla iç içe bir deneyim sunmak için, sürdürülebilir ve çevre dostu
          turizm hizmetlerimizle karşınızdayız. Doğanın güzelliklerini
          keşfederken, çevreye saygılı olmayı ve doğal dengeyi korumayı
          önemsiyoruz.
        </p>
        <p>
          Güvenli ve konforlu doğa gezileri, rehberli yürüyüşler, ekolojik kamp
          alanları ve daha fazlasıyla, misafirlerimize unutulmaz bir deneyim
          sunuyoruz. Her ayrıntı, doğanın sunduğu huzur ve güzellikleri tam
          anlamıyla yaşayabilmeniz için titizlikle planlanmıştır.
        </p>
        <p>
          Çevreye olan bağlılığımız, sürdürülebilir uygulamalarımızla kendini
          gösteriyor. Kullandığımız tüm malzemeler doğaya zarar vermeyen, geri
          dönüştürülebilir ürünlerdir. Ayrıca, tüm etkinliklerimizde minimum
          atık ve enerji tüketimi hedeflenmektedir.
        </p>
        <p>
          Güvenliğiniz bizim için her zaman ön planda. Tüm turlarımız, deneyimli
          rehberler eşliğinde, güvenlik önlemleri alınarak düzenlenir. Amacımız,
          doğanın içinde özgürce ve güvenli bir şekilde vakit geçirmenizi
          sağlamaktır.
        </p>
        <p>
          Doğa turizminde konforun da mümkün olduğuna inanıyoruz. Konforlu
          konaklama seçeneklerimiz ve ulaşım hizmetlerimizle, doğayla baş başa
          kalırken konforunuzdan ödün vermemiş olacaksınız.
        </p>
        <p>
          Sizleri, doğanın sunduğu bu eşsiz deneyimi birlikte keşfetmeye davet
          ediyoruz. Çevreci, sürdürülebilir ve konforlu doğa turizmi
          hizmetlerimizle tanışmak için bizimle iletişime geçin!
        </p>
      </div>
    </FooterDetailBox>
  );
};

export default AllServices;
