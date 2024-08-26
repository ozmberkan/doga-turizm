import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

import appstore from "../assets/social-media/appstore.svg";
import googleplay from "../assets/social-media/googleplay.svg";
import huawei from "../assets/social-media/huawei.svg";

import road1 from "../assets/carousel/road.jpg";
import road2 from "../assets/carousel/road2.jpg";
import road3 from "../assets/carousel/road3.jpg";

import ankara from "../assets/campaings/ankara.jpg";
import istanbul from "../assets/campaings/istanbul.jpg";
import izmir from "../assets/campaings/izmir.jpg";

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

export const carouselImg = [road1, road2, road3];

export const downloadImage = [appstore, googleplay, huawei];

export const campaigns = [
  {
    id: 1,
    cityName: "İstanbul",
    price: "399.99",
    prevPrice: "599.99",
    discount: "%33.33",
    image: istanbul,
  },
  {
    id: 2,
    cityName: "İzmir",
    price: "399.99",
    prevPrice: "599.99",
    discount: "%33.33",
    image: izmir,
  },
  {
    id: 3,
    cityName: "Ankara",
    price: "399.99",
    prevPrice: "599.99",
    discount: "%33.33",
    image: ankara,
  },
];

export const cities = [
  { id: 1, title: "Seçiniz", value: "" },
  { id: 2, title: "İstanbul", value: "Istanbul" },
  { id: 3, title: "Bursa", value: "Bursa" },
  { id: 4, title: "Balıkesir", value: "Balikesir" },
  { id: 5, title: "Edirne", value: "Edirne" },
  { id: 6, title: "Çanakkale", value: "Çanakkale" },
  { id: 7, title: "Tekirdağ", value: "Tekirdağ" },
];

export const tableTitles = [
  { id: 1, title: "UID", key: "uid", sortable: false },
  { id: 2, title: "PNR", key: "pnr", sortable: true },
  { id: 3, title: "KALKIŞ", key: "departure", sortable: true },
  { id: 4, title: "VARIŞ", key: "arrival", sortable: true },
  { id: 5, title: "TARİH", key: "date", sortable: true },
  { id: 6, title: "WIFI", key: "wifi", sortable: true },
  { id: 7, title: "ELEKTRİK", key: "electric", sortable: true },
  { id: 8, title: "İKRAM", key: "food", sortable: true },
  { id: 9, title: "TV", key: "tv", sortable: true },
];

export const InputField = [
  { label: "Nereden", type: "text", name: "departure" },
  { label: "Nereye", type: "text", name: "arrival" },
  { label: "Tarih", type: "date", name: "date" },
];

export const footerAbout = [
  { title: "Hakkımızda", to:"/about" },
  { title: "Kariyer" , to: "/carier"},
  { title: "İletişim", to: "/contact" },
  { title: "Yenilenebilir Enerji", to : "/energy" },
];
export const footerSSS = [
  { title: "Sıkça Sorulan Sorular", to: "/questions" },
  { title: "Kişisel V. Korunması", to:"/protectData"},
  { title: "Gizlilik Politikası", to: "/privacy"},
  { title: "Çerez Politikası", to: "/cookie"},
];

export const footerWith = [
  { title: "Otobüsünü Kirala" , to :"/rent"},
  { title: "Şoförümüz ol" , to : "/hiring"},
];

export const menus = [
  {label : "Hakkımızda", to : "/about"},
  {label : "Hizmetlerimiz", to : "/services"},
]