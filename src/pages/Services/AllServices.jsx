import Footer from "~/components/Footer/Footer";
import logoBlack from "~/assets/logos/LogoBlack.png";

const AllServices = () => {
  return (
    <div className="sm:px-5 px-3 mt-5 sm:mt-5">
      <div className="w-full bg-white h-auto border rounded-md p-12 flex flex-col gap-y-5">
        <img src={logoBlack} alt="" className="w-44" />
        <hr className="w-full my-4" />

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
      <Footer />
    </div>
  );
};

export default AllServices;
