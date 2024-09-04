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
import { BsTicketDetailed } from "react-icons/bs";

import { FaTree,FaUsersViewfinder } from "react-icons/fa6";


import appstore from "../assets/social-media/appstore.svg";
import googleplay from "../assets/social-media/googleplay.svg";
import huawei from "../assets/social-media/huawei.svg";
// carousel
import road1 from "../assets/carousel/road.jpg";
import road2 from "../assets/carousel/road2.jpg";
import road3 from "../assets/carousel/road3.jpg";
import doga from "../assets/carousel/doga.png";

export const socialMedia = [
  {
    icon: FaXTwitter,
    name : "Twitter"
  },
  {
    icon: FaInstagram,
    name : "Instagram"
  },
  {
    icon: FaFacebook,
    name : "Facebook"
  },
  {
    icon: FaWhatsapp,
    name : "Whatsapp"
  },
];

export const carouselImg = [road1, road2, road3, doga];

export const downloadImage = [appstore, googleplay, huawei];

export const cities = [
  { id: 1, title: "Seçiniz", value: "" },
  { id: 2, title: "İstanbul", value: "Istanbul" },
  { id: 6, title: "Çanakkale", value: "Çanakkale" },
  { id: 3, title: "Bursa", value: "Bursa" },
  { id: 4, title: "Balıkesir", value: "Balikesir" },
];

export const tableTitles = [
  { id: 1, title: "UID", key: "uid",  },
  { id: 2, title: "PNR", key: "pnr", sortable: true },
  { id: 3, title: "KALKIŞ", key: "departure", sortable: true },
  { id: 4, title: "VARIŞ", key: "arrival", sortable: true },
  { id: 5, title: "TARİH", key: "date", sortable: true },
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

export const annTableTitles = [
  { id: 1, title: "ID"},
  { id: 2, title: "Ana Başlık" },
  { id: 3, title: "Ana Açıklama" },
  { id: 4, title: "Görsel"},
  { id: 5, title: "Mobile Görsel"  },
  { id: 6, title: "İç Başlık" },
  { id: 6, title: "İç Açıklama"  },
  { id: 6, title: "AKSİYON"},
];

export const InputField = [
  { label: "Nereden", type: "text", name: "departure" },
  { label: "Nereye", type: "text", name: "arrival" },
  { label: "Tarih", type: "date", name: "date" },
];

export const footerAbout = [
  { title: "Hakkımızda", to: "/about" },
  { title: "Kariyer", to: "/carier" },
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
];

export const menus = [
  { label: "Hakkımızda", to: "/about" },
  { label: "Hizmetlerimiz", to: "/services" },
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
    id:1,
    icon : GiReceiveMoney,
    title : "Ucuz Fiyat",
    description : "Uygun fiyatlı biletlerimiz."
  },
  {
    id:2,
    icon : BsTicketDetailed,
    title : "Kolay Bilet",
    description : "Kolay bilet alma işlemi."
  },
  {
    id:3,
    icon : FaUsersViewfinder,
    title : "Müşteri Memnuniyeti",
    description : "Müşteri memnuniyeti odaklı hizmet."
  },
  {
    id:4,
    icon : FaTree,
    title : "Çevre Dostu",
    description : "Çevre dostu hizmetler."
  }
]