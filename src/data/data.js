import roadImg from "../assets/road.jpg";
import road2Img from "../assets/road2.jpg";
import road3Img from "../assets/road3.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

import appstore from "../assets/appstore.svg";
import googleplay from "../assets/googleplay.svg";
import huawei from "../assets/huawei.svg";

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

export const images = [roadImg, road2Img, road3Img];
export const downloadImage = [appstore, googleplay, huawei];

export const campaigns = [
  {
    id: 1,
    cityName: "İstanbul",
    price: "399.99",
    prevPrice: "599.99",
    discount: "%33.33",
    imagePath: "istanbul.jpg",
  },
  {
    id: 2,
    cityName: "İzmir",
    price: "399.99",
    prevPrice: "599.99",
    discount: "%33.33",
    imagePath: "izmir.jpg",
  },
  {
    id: 3,
    cityName: "Ankara",
    price: "399.99",
    prevPrice: "599.99",
    discount: "%33.33",
    imagePath: "ankara.jpg",
  },
];

export const cities = [
  { id: 1, title: "İstanbul", value: "İstanbul" },
  { id: 2, title: "Ankara", value: "Ankara" },
  { id: 3, title: "İzmir", value: "İzmir" },
  { id: 4, title: "Bursa", value: "Bursa" },
  { id: 5, title: "Antalya", value: "Antalya" },
  { id: 6, title: "Adana", value: "Adana" },
  { id: 7, title: "Konya", value: "Konya" },
  { id: 8, title: "Gaziantep", value: "Gaziantep" },
  { id: 9, title: "Kayseri", value: "Kayseri" },
  { id: 10, title: "Mersin", value: "Mersin" },
  { id: 11, title: "Eskişehir", value: "Eskişehir" },
  { id: 12, title: "Samsun", value: "Samsun" },
  { id: 13, title: "Trabzon", value: "Trabzon" },
  { id: 14, title: "Erzurum", value: "Erzurum" },
  { id: 15, title: "Diyarbakır", value: "Diyarbakır" },
];

export const InputField = [
  { label: "Nereden", type: "text", name: "departure" },
  { label: "Nereye", type: "text", name: "arrival" },
  { label: "Tarih", type: "date", name: "arrival" },
];

export const footerAbout = [
  { title: "Hakkımızda" },
  { title: "Kariyer" },
  { title: "İletişim" },
  { title: "Yenilenebilir Enerji" },
];
export const footerSSS = [
  { title: "Sıkça Sorulan Sorular" },
  { title: "Kişisel V. Korunması" },
  { title: "Gizlilik Politikası" },
  { title: "Çerez Politikası" },
];

export const footerWith = [
  { title: "Otobüsünü Kirala" },
  { title: "Şoförümüz ol" },
];
