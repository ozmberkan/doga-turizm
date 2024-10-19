import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { BiLock, BiUser } from "react-icons/bi";
import { HiOutlineIdentification } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { BsTicket, BsTicketDetailed } from "react-icons/bs";
import { IoIosBusiness } from "react-icons/io";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaTree, FaUsersViewfinder } from "react-icons/fa6";
import appstore from "../assets/social-media/appstore.svg";
import googleplay from "../assets/social-media/googleplay.svg";
import huawei from "../assets/social-media/huawei.svg";
import road1 from "../assets/carousel/road.jpg";
import road2 from "../assets/carousel/road2.jpg";
import road3 from "../assets/carousel/road3.webp";
import doga from "../assets/carousel/doga.webp";

export const socialMedia = [
  {
    icon: FaXTwitter,
    name: "Twitter",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
  },
  {
    icon: FaFacebook,
    name: "Facebook",
  },
  {
    icon: FaWhatsapp,
    name: "Whatsapp",
  },
];

export const validCoupons = ["İNDİRİM50", "YAZFIRSATI50", "DOGA50", "TATİL50"];

export const carouselImg = [road1, road2, road3, doga];

export const downloadImage = [appstore, googleplay, huawei];

export const cities = [
  { id: 1, title: "Seçiniz..", value: "" },
  { id: 2, title: "İstanbul", value: "Istanbul" },
  { id: 3, title: "Çanakkale", value: "Çanakkale" },
  { id: 4, title: "Bursa", value: "Bursa" },
  { id: 5, title: "Balıkesir", value: "Balikesir" },
];

export const tableTitles = [
  { id: 1, title: "UID", key: "uid" },
  { id: 2, title: "PNR", key: "pnr", sortable: true },
  { id: 3, title: "KALKIŞ", key: "departure", sortable: true },
  { id: 4, title: "VARIŞ", key: "arrival", sortable: true },
  { id: 5, title: "TARİH", key: "date", sortable: true },
  { id: 12, title: "SAAT", key: "time", sortable: true },
  { id: 6, title: "FİYAT", key: "price", sortable: true },
  { id: 7, title: "WIFI", key: "wifi", sortable: true },
  { id: 8, title: "ELEKTRİK", key: "electric", sortable: true },
  { id: 9, title: "İKRAM", key: "food", sortable: true },
  { id: 10, title: "TV", key: "tv", sortable: true },
  { id: 11, title: "AKSİYON", key: "action", sortable: false },
];

export const campaignTableTitles = [
  { id: 1, title: "ID", key: "id", sortable: false },
  { id: 2, title: "Şehir Adı", key: "cityName", sortable: true },
  { id: 3, title: "Yeni Fiyat", key: "newPrice", sortable: true },
  { id: 4, title: "Eski Fiyat", key: "oldPrice", sortable: true },
  { id: 5, title: "Görsel", key: "image", sortable: false },
  { id: 6, title: "AKSİYON", key: "action", sortable: false },
];

export const contactsTableTitles = [
  { id: 1, title: "ID" },
  { id: 2, title: "E-Posta" },
  { id: 3, title: "İsim Soyisim" },
  { id: 4, title: "Telefon Numarası" },
  { id: 5, title: "Mesaj" },
];

export const campaignTableTitlesTexts = [
  { id: 1, title: "Kampanya Bilgi", key: "cityName" },
  { id: 2, title: "Kampanya Başlık", key: "newPrice" },
  { id: 3, title: "Kampanya Açıklama", key: "oldPrice" },
  { id: 4, title: "AKSİYON", key: "oldPrice" },
];

export const annTableTitles = [
  { id: 1, title: "Ana Başlık" },
  { id: 2, title: "Ana Açıklama" },
  { id: 3, title: "Görsel" },
  { id: 4, title: "Mobil Görsel" },
  { id: 5, title: "İç Başlık" },
  { id: 6, title: "İç Açıklama" },
  { id: 7, title: "AKSİYON" },
];

export const userTableTitles = [
  { id: 1, title: "ID" },
  { id: 2, title: "Yönetici" },
  { id: 3, title: "Ad Soyad" },
  { id: 4, title: "E-Mail" },
  { id: 5, title: "Telefon Numarası" },
  { id: 6, title: "AKSİYON" },
];

export const InputField = [
  { label: "Nereden", type: "text", name: "departure" },
  { label: "Nereye", type: "text", name: "arrival" },
  { label: "Tarih", type: "date", name: "date" },
];

export const footerAbout = [
  { title: "Hakkımızda", to: "/about" },
  { title: "Kariyer", to: "/career" },
  { title: "İletişim", to: "/contact" },
  { title: "Yenilenebilir Enerji", to: "/energy" },
];
export const footerSSS = [
  { title: "Sıkça Sorulan Sorular", to: "/questions" },
  { title: "Kişisel V. Korunması", to: "/protectData" },
  { title: "Gizlilik Politikası", to: "/privacy" },
  { title: "Çerez Politikası", to: "/cookie" },
];

export const footerWith = [
  { title: "Otobüsünü Kirala", to: "/rent" },
  { title: "Şoförümüz ol", to: "/hiring" },
  { title: "Hizmetlerimiz", to: "/services" },
];

export const footerSocial = [
  { label: "Instagram" },
  { label: "Facebook" },
  { label: "Twitter" },
  { label: "LinkedIn" },
];

export const menus = [
  { label: "Hakkımızda", to: "/about", icon: MdOutlineBusinessCenter },
  { label: "Hizmetlerimiz", to: "/services", icon: IoIosBusiness },
];

export const loginForm = [
  { id: 1, label: "E-Mail", name: "email", type: "text", icon: BiUser },
  { id: 2, label: "Parola", name: "password", type: "password", icon: BiLock },
];

export const registerForm = [
  {
    id: 1,
    label: "Ad Soyad",
    name: "displayName",
    type: "text",
    icon: HiOutlineIdentification,
  },
  {
    id: 2,
    label: "Cep Telefonu",
    name: "phoneNumber",
    type: "number",
    icon: IoCallOutline,
  },
  { id: 3, label: "E-Mail", name: "email", type: "text", icon: BiUser },
  { id: 4, label: "Parola", name: "password", type: "password", icon: BiLock },
];

export const questions = [
  {
    question: "Soru 1: Doğa Turizm'in sunduğu hizmetler nelerdir?",
    answer:
      "Doğa Turizm, doğa turları, ekolojik geziler, ve çevre dostu ulaşım seçenekleri sunmaktadır. Ayrıca, grup gezileri ve özel turlar da organize etmekteyiz.",
  },
  {
    question: "Soru 2: Rezervasyon işlemlerini nasıl yapabilirim?",
    answer:
      "Rezervasyon işlemlerini web sitemiz üzerinden online olarak yapabilirsiniz. Ayrıca, telefonla veya e-posta yoluyla da rezervasyon yapabilirsiniz.",
  },
  {
    question: "Soru 3: Kampanyalardan nasıl yararlanabilirim?",
    answer:
      "Kampanyalardan yararlanmak için ilgili kampanya şartlarını yerine getirmeniz gerekmektedir. Detaylar ve geçerlilik tarihleri için web sitemizi ziyaret edebilirsiniz.",
  },
  {
    question: "Soru 4: Tur fiyatlarına neler dahildir?",
    answer:
      "Tur fiyatlarına genellikle ulaşım, rehberlik hizmetleri ve bazı yemekler dahildir. Detaylı bilgi için tur programlarımızı inceleyebilirsiniz.",
  },
  {
    question: "Soru 5: İptal ve değişiklik politikalarınız nelerdir?",
    answer:
      "Rezervasyon iptali veya değişikliği ile ilgili politikalarımızı web sitemizdeki 'İptal ve Değişiklik Politikası' bölümünden öğrenebilirsiniz.",
  },
];

export const features = [
  {
    id: 1,
    icon: GiReceiveMoney,
    title: "Ucuz Fiyat",
    description: "Uygun fiyatlı biletlerimiz.",
  },
  {
    id: 2,
    icon: BsTicketDetailed,
    title: "Kolay Bilet",
    description: "Kolay bilet alma işlemi.",
  },
  {
    id: 3,
    icon: FaUsersViewfinder,
    title: "Müşteri Memnuniyeti",
    description: "Müşteri memnuniyeti hizmeti.",
  },
  {
    id: 4,
    icon: FaTree,
    title: "Çevre Dostu",
    description: "Çevre dostu hizmetler.",
  },
];

export const adminTabs = [
  {
    id: 1,
    label: "Gösterge Paneli",
  },
  {
    id: 2,
    label: "Biletler",
  },
  {
    id: 3,
    label: "Kampanyalar",
  },
  {
    id: 4,
    label: "Duyuru / Yenilikler",
  },
  {
    id: 5,
    label: "Kullanıcılar",
  },
  {
    id: 6,
    label: "Mesajlar",
  },
];

export const announcementEditInput = [
  {
    type: "text",
    name: "title",
    label: "Dış Başlık",
  },
  {
    type: "text",
    name: "titleDesc",
    label: "Dış Açıklama",
  },
  {
    type: "text",
    name: "image",
    label: "Görsel",
  },
  {
    type: "text",
    name: "mobileImg",
    label: "Mobil Görsel",
  },
  {
    type: "text",
    name: "annTitle",
    label: "İç Başlık",
  },
  {
    type: "text",
    name: "annDesc",
    label: "İç Açıklama",
  },
];

export const campaignEditInput = [
  {
    type: "text",
    name: "cityName",
    label: "Şehir Adı",
  },
  {
    type: "text",
    name: "newPrice",
    label: "Yeni Fiyat",
  },
  {
    type: "text",
    name: "oldPrice",
    label: "Eski Fiyat",
  },
  {
    type: "text",
    name: "image",
    label: "Görsel",
  },
];

export const ticketEditInput = [
  {
    type: "text",
    name: "pnr",
    label: "PNR",
  },
  {
    type: "text",
    name: "departure",
    label: "Kalkış",
  },
  {
    type: "text",
    name: "arrival",
    label: "Varış",
  },
  {
    type: "text",
    name: "date",
    label: "Tarih",
  },
  {
    type: "text",
    name: "time",
    label: "Saat",
  },
  {
    type: "text",
    name: "price",
    label: "Fiyat",
  },
  {
    type: "checkbox",
    name: "wifi",
    label: "Wi-Fi",
  },
  {
    type: "checkbox",
    name: "electric",
    label: "Elektrik",
  },
  {
    type: "checkbox",
    name: "food",
    label: "İkram",
  },
  {
    type: "checkbox",
    name: "tv",
    label: "TV",
  },
];

export const newCampaignInput = [
  {
    type: "text",
    name: "cityName",
    placeholder: "Şehir Adı",
    label: "Şehir Adı",
  },
  {
    type: "text",
    name: "newPrice",
    placeholder: "Yeni Fiyat",
    label: "Yeni Fiyat",
  },
  {
    type: "text",
    name: "oldPrice",
    placeholder: "Eski Fiyat",
    label: "Eski Fiyat",
  },
  {
    type: "text",
    name: "image",
    placeholder: "Görsel",
    label: "Görsel",
  },
];

export const newTicketInput = [
  {
    type: "text",
    name: "pnr",
    placeholder: "PNR",
    label: "PNR",
  },
  {
    type: "text",
    name: "departure",
    placeholder: "Kalkış",
    label: "Kalkış",
  },
  {
    type: "text",
    name: "arrival",
    placeholder: "Varış",
    label: "Varış",
  },
  {
    type: "date",
    name: "date",
    label: "Tarih",
  },
  {
    type: "time",
    name: "time",
    label: "Saat",
  },
  {
    type: "text",
    name: "price",
    placeholder: "Fiyat",
    label: "Fiyat",
  },
  {
    type: "checkbox",
    name: "wifi",
    label: "Wi-Fi",
  },
  {
    type: "checkbox",
    name: "electric",
    label: "Elektrik",
  },
  {
    type: "checkbox",
    name: "food",
    label: "İkram",
  },
  {
    type: "checkbox",
    name: "tv",
    label: "TV",
  },
];

export const usersEditInput = [
  {
    type: "text",
    name: "admin",
    label: "Yetki",
  },
  {
    type: "text",
    name: "displayName",
    label: "İsim Soyisim",
  },
  {
    type: "text",
    name: "email",
    label: "E-Posta",
  },
  {
    type: "text",
    name: "phoneNumber",
    label: "Cep No.",
  },
];

export const sideBarTabs = [
  {
    id: 1,
    label: "Kullanıcı Bilgilerim",
    to: "myprofile",
    icon: BiUser,
  },
  {
    id: 2,
    label: "Aktif Biletlerim",
    to: "mytickets",
    icon: BsTicket,
  },
  {
    id: 3,
    label: "Geçmiş Biletlerim",
    to: "lasttickets",
    icon: BsTicketDetailed,
  },
];

export const aboutData = [
  {
    id: 1,
    text: "Doğa Turizm, çevreye duyarlı ve sürdürülebilir turizm anlayışıyla doğa severlere eşsiz bir deneyim sunmak amacıyla kurulmuştur. Şirketimiz, doğanın korumasını ve ekosistemlerin sürdürülebilirliğini ön planda tutarak, yeşil bir geleceğe katkıda bulunmayı hedefliyor.",
  },
  {
    id: 2,
    text: "Çevre Dostu Yaklaşımımız, Doğa Turizm olarak, çevre bilincini her şeyin önünde tutuyoruz. Bu doğrultuda, tüm ulaşım araçlarımızı çevre dostu elektrikli otobüslerle donatmış bulunuyoruz. Elektrikli otobüslerimiz, sıfır emisyonlu bir sürüş deneyimi sunarak hava kirliliğini azaltmakta ve doğanın korunmasına önemli bir katkı sağlamaktadır. Modern teknolojiyle donatılmış bu araçlar, sessiz ve konforlu bir yolculuk sunarken, çevresel etkileri en aza indirgemektedir.",
  },
  {
    id: 3,
    text: "Sürdürülebilir Turizm Anlayışımız, sadece ulaşım araçlarımızla sınırlı değildir. Doğa Turizm olarak, bütün operasyonlarımızda çevre dostu uygulamalara yer veriyoruz. Enerji tasarrufu sağlayan sistemler kullanıyor, geri dönüşüm projelerine destek veriyor ve doğa dostu malzemeler tercih ediyoruz. Ayrıca, hizmet verdiğimiz bölgelerde yerel topluluklarla işbirliği yaparak, hem çevre hem de sosyal sorumluluk projelerine katkıda bulunuyoruz.",
  },
  {
    id: 4,
    text: "Eşsiz Doğa Deneyimleri, Müşterilerimize sunmuş olduğumuz tur paketleri, doğanın kalbinde unutulmaz anlar yaşamanız için özenle hazırlanmıştır. Doğa yürüyüşlerinden, ekoturizme kadar geniş bir yelpazede hizmet sunuyoruz. Doğanın sunduğu güzellikleri keşfetmek ve temiz hava eşliğinde huzurlu bir tatil geçirmek isteyenler için ideal bir tercih sunuyoruz. Rehberlerimiz, doğanın korunmasına yönelik bilgilendirmeler yaparak, ziyaretçilerimizi çevre bilinci konusunda da eğitiyor.",
  },
  {
    id: 5,
    text: "Misyon ve Vizyonumuz, Misyonumuz doğa ile iç içe, çevre dostu bir turizm anlayışını yaymak ve bu anlayışla doğayı korumak adına adımlar atmaktır. Vizyonumuz ise, doğa turizmi sektöründe lider bir rol üstlenerek, tüm paydaşlarımızla birlikte sürdürülebilir bir geleceğin inşasına katkıda bulunmaktır. Doğa Turizm olarak, siz değerli misafirlerimizi çevre dostu bir yolculuğa çıkarmaktan ve doğanın muhteşem güzelliklerini keşfetmenize yardımcı olmaktan büyük mutluluk duyuyoruz. Doğayla uyum içinde, sorumlu ve keyifli bir deneyim için bizi tercih ettiğiniz için teşekkür ederiz.",
  },
];

export const careerData = [
  {
    id: 1,
    title: "Kariyer",
    text: "Doğa Turizm olarak, çevre dostu ve sürdürülebilir bir geleceğe katkıda bulunmak amacıyla dinamik ve yetenekli bireylerden oluşan bir ekip oluşturmayı hedefliyoruz. Şirketimizdeki her bir çalışan, doğa ve çevre bilincine sahip, yaratıcı ve yenilikçi yaklaşımlarla ekibimize değer katmaktadır.",
  },
  {
    id: 2,
    title: "Neden Doğa Turizm?",
    items: [
      {
        subtitle: "Sürdürülebilirlik ve Çevre Bilinci",
        text: "Çalışanlarımız, doğa ve çevre konularında güçlü bir bilinçle hareket ederler. Elektrikli otobüslerimizden, enerji tasarrufu sağlayan sistemlerimize kadar her aşamada çevre dostu uygulamalara katkıda bulunur.",
      },
      {
        subtitle: "Kişisel ve Profesyonel Gelişim",
        text: "Çalışanlarımızın kişisel ve profesyonel gelişimlerine büyük önem veriyoruz. Düzenlediğimiz eğitim programları, seminerler ve atölye çalışmaları ile ekip üyelerimizin bilgi ve becerilerini sürekli olarak geliştirmelerine destek oluyoruz.",
      },
      {
        subtitle: "Yenilikçi ve Destekleyici Çalışma Ortamı",
        text: "İnovasyonu teşvik eden bir çalışma ortamı sunuyoruz. Yaratıcı fikirlerinizi paylaşabileceğiniz ve gelişime katkıda bulunabileceğiniz bir atmosfer sağlıyoruz.",
      },
      {
        subtitle: "Toplumsal Sorumluluk",
        text: "Sosyal sorumluluk projelerine aktif katılımı destekliyoruz. Çalışanlarımız, çevresel ve toplumsal konularda farkındalık oluşturacak projelerde yer alabilirler.",
      },
    ],
  },
  {
    id: 3,
    title: "Açık Pozisyonlar",
    text: "Doğa Turizm olarak, çeşitli alanlarda açık pozisyonlar sunuyoruz. Ekibimize katılmak isteyen adaylar, aşağıdaki alanlarda başvuruda bulunabilirler:",
    positions: [
      {
        position: "Rehberlik ve Tur Operatörlüğü",
        description:
          "Doğa turlarımızda misafirlerimize rehberlik edecek, doğa hakkında bilgi verecek ve unutulmaz bir deneyim sunacak profesyoneller arıyoruz.",
      },
      {
        position: "Sürdürülebilirlik ve Çevre Yönetimi",
        description:
          "Çevre dostu uygulamaları geliştirecek ve uygulayacak uzmanlar arıyoruz. Sürdürülebilir projelerde rol alacak takım arkadaşları aramaktayız.",
      },
      {
        position: "Müşteri Hizmetleri",
        description:
          "Misafirlerimizin memnuniyetini sağlamak ve yüksek kaliteli hizmet sunmak için müşteri hizmetleri alanında yetenekli kişiler arıyoruz.",
      },
      {
        position: "Pazarlama ve İletişim",
        description:
          "Şirketimizin vizyonunu ve misyonunu etkili bir şekilde iletecek, çevre bilincini yayacak ve markamızın tanıtımını yapacak pazarlama ve iletişim uzmanları arıyoruz.",
      },
      {
        position: "Destek ve İdari İşler",
        description:
          "Operasyonel süreçleri destekleyecek ve günlük iş akışını yönetecek idari personel arıyoruz.",
      },
    ],
  },
  {
    id: 4,
    title: "Başvuru Süreci",
    text: "Doğa Turizm’de kariyer fırsatlarını keşfetmek ve ekibimize katılmak için web sitemizdeki başvuru formunu doldurabilir veya özgeçmişinizi dogaturizm@carier.com adresine gönderebilirsiniz. Başvurularınız incelenecek ve uygun pozisyonlarda sizinle iletişime geçilecektir.",
  },
  {
    id: 5,
    title: "",
    text: "Doğa Turizm ailesinin bir parçası olmak ve çevreye duyarlı bir geleceği inşa etmek için sizleri aramızda görmekten mutluluk duyarız.",
  },
];

export const contactInput = [
  {
    id: 1,
    label: "Adınız",
    name: "name",
    type: "text",
    placeholder: "Adınızı Giriniz",
  },
  {
    id: 2,
    label: "E-Posta Adresiniz",
    name: "email",
    type: "email",
    placeholder: "E-Posta Adresinizi Giriniz",
  },
  {
    id: 3,
    label: "Telefon Numaranız",
    name: "phone",
    type: "number",
    placeholder: "Telefon Numaranızı Giriniz",
  },
  {
    id: 4,
    label: "Mesajınız",
    name: "message",
    type: "text",
    placeholder: "Mesajınızı Giriniz",
  },
];

export const energyData = [
  {
    id: 1,
    text: "Doğa Turizm olarak, sürdürülebilirlik ve çevre dostu uygulamalar konusundaki kararlılığımızı her alanda göstermekteyiz. Yenilenebilir enerji, çevre üzerindeki etkimizi azaltmanın ve karbon ayak izimizi minimumda tutmanın temel taşlarından biridir. Şirketimiz, yenilenebilir enerji kaynaklarını kullanarak doğaya olan bağlılığını ve sorumluluğunu güçlü bir şekilde ortaya koymaktadır.",
  },
  {
    id: 2,
    text: "Güneş Enerjisi: Şirketimiz, operasyonlarımızda güneş enerjisi kullanarak enerji ihtiyacımızı temiz ve sürdürülebilir bir kaynaktan karşılamaktadır. Güneş panellerimiz, enerji maliyetlerini düşürürken, aynı zamanda karbon salınımını azaltmaktadır.",
  },
  {
    id: 3,
    text: "Rüzgar Enerjisi: Rüzgar türbinleri, yenilenebilir enerji stratejimizin bir diğer önemli parçasıdır. Rüzgar enerjisi kullanarak enerji üretimimizi çeşitlendiriyor ve rüzgarın gücünden faydalanarak temiz enerji sağlıyoruz.",
  },
  {
    id: 4,
    text: "Enerji Verimliliği: Enerji verimliliğini artırmak ve gereksiz enerji tüketimini azaltmak için çeşitli stratejiler uyguluyoruz. Enerji tasarrufu sağlayan aydınlatma sistemleri, yüksek verimli cihazlar ve akıllı enerji yönetim sistemleri kullanıyoruz.",
  },
  {
    id: 5,
    text: "Geleceğe Yatırım: Yenilenebilir enerji projeleri sadece çevreyi korumakla kalmaz, aynı zamanda geleceğe yatırım yapmamızı sağlar. Şirketimiz, sürdürülebilir enerji çözümlerini destekleyerek, hem çevreyi hem de toplumu gelecekte daha temiz bir dünya bırakmayı hedefliyor.",
  },
  {
    id: 6,
    text: "Doğa Turizm olarak, yenilenebilir enerji kullanımı ve çevre dostu uygulamalarımızla, doğayı korumak ve ekosistemleri desteklemek adına adımlar atıyoruz. Bu vizyon doğrultusunda, enerji kullanımımızı sürekli olarak gözden geçiriyor ve en iyi uygulamaları benimsemeye devam ediyoruz. Siz değerli misafirlerimizle bu sürdürülebilir geleceği inşa etmekten gurur duyuyoruz.",
  },
];

export const cookiePolicyData = [
  {
    id: 1,
    title: "Çerezler Nedir?",
    text: "Çerezler, web tarayıcınızda saklanan küçük veri dosyalarıdır. Bu dosyalar, web sitelerinin sizinle ilgili bilgileri hatırlamasına yardımcı olur ve tarayıcı deneyiminizi kişiselleştirir.",
  },
  {
    id: 2,
    title: "Çerezleri Nasıl Kullanıyoruz?",
    text: "Web sitemiz, kullanıcı deneyimini geliştirmek ve analiz yapmak amacıyla çerezler kullanmaktadır. Çerezler sayesinde, ziyaretçi davranışlarını analiz edebilir ve hizmetlerimizi iyileştirebiliriz. Çerezler ayrıca, kullanıcıların giriş bilgilerini hatırlamaya ve tercihlerini kaydetmeye yardımcı olur.",
  },
  {
    id: 3,
    title: "Çerez Türleri",
    items: [
      {
        subtitle: "Zorunlu Çerezler",
        description:
          "Web sitesinin düzgün çalışması için gerekli çerezlerdir. Bu çerezler genellikle tarayıcı kapatıldığında silinir.",
      },
      {
        subtitle: "Performans Çerezleri",
        description:
          "Web sitesinin performansını analiz etmek için kullanılır. Bu çerezler, kullanıcıların web sitesindeki davranışlarını izler.",
      },
      {
        subtitle: "Fonksiyonel Çerezler",
        description:
          "Kullanıcı tercihlerini hatırlamak ve daha kişiselleştirilmiş bir deneyim sunmak için kullanılır.",
      },
      {
        subtitle: "Reklam Çerezleri",
        description:
          "İlgi alanlarına dayalı reklamlar sunmak ve reklam performansını izlemek için kullanılır.",
      },
    ],
  },
  {
    id: 4,
    title: "Çerez Yönetimi",
    text: "Çerezleri tarayıcı ayarlarınızdan yönetebilir veya devre dışı bırakabilirsiniz. Ancak, çerezleri devre dışı bırakmak bazı web sitesi işlevlerini etkileyebilir.",
  },
  {
    id: 5,
    title: "Gizlilik Politikamız",
    text: `Çerezler ve diğer gizlilik konuları hakkında daha fazla bilgi için lütfen Gizlilik Politikamızı inceleyin.`,
    link: "/privacy",
  },
];

export const privacyPolicyData = [
  {
    id: 1,
    title: "Giriş",
    text: "Bu Gizlilik Politikası, Doğa Turizm olarak, kişisel verilerinizi nasıl topladığımızı, kullandığımızı, sakladığımızı ve koruduğumuzu açıklamaktadır. Web sitemizi kullanarak, bu politikayı kabul etmiş olursunuz.",
  },
  {
    id: 2,
    title: "Topladığımız Bilgiler",
    text: "Web sitemizi ziyaret ettiğinizde, aşağıdaki bilgileri toplayabiliriz:",
    items: [
      "Kişisel bilgiler (ad, e-posta adresi, telefon numarası)",
      "Kullanıcı davranışları (ziyaret edilen sayfalar, tıklama bilgileri)",
      "Teknik bilgiler (IP adresi, tarayıcı türü, işletim sistemi)",
    ],
  },
  {
    id: 3,
    title: "Bilgilerin Kullanımı",
    text: "Topladığımız bilgileri aşağıdaki amaçlarla kullanabiliriz:",
    items: [
      "Size hizmet sunmak ve destek sağlamak",
      "Web sitemizin performansını analiz etmek ve geliştirmek",
      "Size güncellemeler ve teklifler hakkında bilgi vermek",
      "Yasal yükümlülükleri yerine getirmek",
    ],
  },
  {
    id: 4,
    title: "Bilgilerin Korunması",
    text: "Kişisel verilerinizi korumak için gerekli güvenlik önlemlerini alıyoruz. Verilerinizi korumak için çeşitli fiziksel, teknik ve idari önlemler uygulamaktayız. Ancak, internet üzerinden veri iletiminin tamamen güvenli olduğunu garanti edemeyiz.",
  },
  {
    id: 5,
    title: "Bilgilerin Paylaşımı",
    text: "Kişisel bilgilerinizi üçüncü taraflarla paylaşmayacağız, ancak yasal gereklilikler veya şirketin haklarını koruma amacıyla paylaşabiliriz. Üçüncü taraf hizmet sağlayıcılarla, yalnızca hizmetlerini sağlamak amacıyla veri paylaşabiliriz.",
  },
  {
    id: 6,
    title: "Kullanıcı Hakları",
    text: "Kişisel verilerinize erişim hakkına sahip olduğunuzu unutmayın. Kişisel verilerinizi güncelleme, düzeltme veya silme hakkınızı kullanabilirsiniz. İlgili taleplerinizi [e-posta adresi] adresine iletebilirsiniz.",
  },
  {
    id: 7,
    title: "Politika Değişiklikleri",
    text: "Gizlilik politikamız zaman zaman güncellenebilir. Politika değişikliklerini web sitemizde yayınlayacağız ve değişikliklerin yürürlüğe girmesiyle ilgili olarak sizi bilgilendireceğiz.",
  },
  {
    id: 8,
    title: "İletişim",
    text: "Gizlilik politikamız hakkında herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:",
    items: [
      "E-posta: dogaturizm@help.com",
      "Telefon: +90123456789",
      "Adres: İzmir, Türkiye",
    ],
  },
];

export const protectPersonelData = [
  {
    id: 1,
    title: "Kişisel Verilerin Korunması",
    text: "Doğa Turizm olarak, kişisel verilerinizin güvenliğine büyük önem veriyoruz. Gizliliğinizi korumak ve veri güvenliğini sağlamak amacıyla çeşitli önlemler alıyoruz. İşte kişisel verilerinizi korumak için uyguladığımız bazı temel prensipler:",
  },
  {
    id: 2,
    title: "1. Veri Toplama ve Kullanım",
    text: "Kişisel verilerinizi yalnızca hizmetlerimizi sağlamak ve iyileştirmek amacıyla topluyoruz. Bu veriler, rezervasyonlarınız, müşteri destek talepleriniz ve geri bildirimleriniz gibi çeşitli işlemler için kullanılabilir.",
  },
  {
    id: 3,
    title: "2. Veri Güvenliği",
    text: "Kişisel verilerinizi korumak için en son güvenlik teknolojilerini ve prosedürlerini kullanıyoruz. Verileriniz, yetkisiz erişimlere karşı korunur ve şifreleme yöntemleri ile güvenliği sağlanır.",
  },
  {
    id: 4,
    title: "3. Veri Paylaşımı",
    text: "Kişisel verilerinizi yalnızca yasal yükümlülüklerimizi yerine getirmek ve hizmetlerimizi sunmak için gerekli olan durumlarda üçüncü taraflarla paylaşabiliriz. Bu tür paylaşımlar, verilerinizin güvenliğini sağlayacak şekilde yapılır.",
  },
  {
    id: 5,
    title: "4. Haklarınız",
    text: "Kişisel verilerinizle ilgili olarak erişim, düzeltme, silme ve işlem kısıtlaması haklarına sahipsiniz. Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.",
  },
  {
    id: 6,
    title: "5. Politika Güncellemeleri",
    text: "Çerez ve veri koruma politikalarımızda zaman zaman değişiklikler yapabiliriz. Güncellemeleri takip etmek için bu sayfayı düzenli olarak kontrol etmenizi öneririz.",
  },
];

export const hiringData = [
  {
    id: 1,
    title: "Şoförümüz Ol",
    text: "Doğa Turizm olarak, çevreye duyarlı ve güvenli ulaşımın öncüsü olarak sizleri ekibimize katılmaya davet ediyoruz. Eğer siz de doğa dostu bir şirketin parçası olmak ve profesyonel bir sürücü olarak kariyerinize yeni bir yön vermek istiyorsanız, başvurularınızı bekliyoruz.",
  },
  {
    id: 2,
    title: "Neden Biz?",
    text: "Çevreye duyarlılığımız ve kaliteli hizmet anlayışımız ile sektörde öncü bir rol üstleniyoruz. Elektrikli otobüslerimiz ve sürdürülebilir ulaşım çözümlerimizle doğaya olan katkımızı sürdürüyoruz.",
  },
  {
    id: 3,
    title: "Aradığımız Nitelikler",
    text: "• En az 2 yıl deneyimli ve geçerli bir sürücü belgesine sahip olmak\n• İyi derecede trafik kurallarına hakim olmak\n• Müşteri odaklı ve iletişim becerileri güçlü olmak\n• Çevre bilincine sahip olmak ve doğa dostu uygulamalara uyum sağlamak",
  },
  {
    id: 4,
    title: "Başvuru Süreci",
    text: "Başvurunuzu dogaturizm@carier.com üzerinden bize iletebilir veya başvuru formu linki üzerinden online başvuru yapabilirsiniz. Tüm başvurular titizlikle değerlendirilecek ve uygun adaylarla iletişime geçilecektir.",
    link: "/contact",
  },
  {
    id: 5,
    title: "Sizi Aramızda Görmek İsteriz!",
    text: "Doğa Turizm ailesinin bir parçası olmak ve çevre dostu bir ulaşım hizmetine katkıda bulunmak için başvurularınızı sabırsızlıkla bekliyoruz.",
  },
];

export const rentData = [
  {
    id: 1,
    title: "Otobüsünü Kirala",
    text: "Doğa Turizm olarak, otobüs kiralama hizmetimizle ihtiyaçlarınıza uygun esnek ve konforlu çözümler sunuyoruz. İster grup gezileri, okul etkinlikleri, ister özel organizasyonlar için geniş ve konforlu otobüslerimizle hizmetinizdeyiz.",
  },
  {
    id: 2,
    title: "Neden Bizi Tercih Etmelisiniz?",
    text: "• Modern ve konforlu araçlarımız ile güvenli ulaşım\n• Çevre dostu elektrikli otobüs seçenekleri\n• Esnek kiralama süreleri ve uygun fiyat seçenekleri\n• Profesyonel şoför hizmeti",
  },
  {
    id: 3,
    title: "Nasıl Kiralama Yapabilirsiniz?",
    text: "Otobüs kiralama taleplerinizi dogaturizm@help.com üzerinden bize iletebilir veya kiralama formu linki üzerinden online başvuru yapabilirsiniz. Talep formunuzu doldurduktan sonra, en kısa sürede sizinle iletişime geçeceğiz ve kiralama süreci hakkında detayları paylaşacağız.",
    link: "/contact",
  },
  {
    id: 4,
    title: "Bizimle İletişime Geçin",
    text: "Sorularınız veya özel talepleriniz için bizimle iletişime geçmekten çekinmeyin. Size yardımcı olmak ve ihtiyaçlarınıza uygun en iyi çözümü sunmak için buradayız.",
  },
];

export const citiesData = [
  { id: 1, label: "İstanbul", value: "İstanbul" },
  { id: 2, label: "Balıkesir", value: "Balıkesir" },
  { id: 3, label: "Bursa", value: "Bursa" },
  { id: 4, label: "Çanakkale", value: "Çanakkale" },
];

export const myProfileInputs = [
  { id: 1, label: "Ad Soyad", name: "displayName", type: "text" },
  { id: 2, label: "Cep Telefonu", name: "phoneNumber", type: "text" },
  { id: 3, label: "E-Posta", name: "email", type: "email" },
];
