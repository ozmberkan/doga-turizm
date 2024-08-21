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

export const carouselImg = [
  {
    id:1,
    imagePath: "road.jpg"
  },
  {
    id:2,
    imagePath: "road2.jpg"
  },
  {
    id:3,
    imagePath: "road3.jpg"
  }
]

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
  { id: 2, title: "Bursa", value: "Bursa" },
  { id: 3, title: "Balıkesir", value: "Balıkesir" },
  { id: 4, title: "Edirne", value: "Edirne" },
  { id: 5, title: "Çanakkale", value: "Çanakkale" },
  { id: 6, title: "Tekirdağ", value: "Tekirdağ" },
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



  export const seatsData = [
    { id: 1, seatNumber: "1", isAvailable: true },
    { id: 2, seatNumber: "2", isAvailable: true },
    { id: 3, seatNumber: "3", isAvailable: false },
    { id: 4, seatNumber: "4", isAvailable: true },
    { id: 5, seatNumber: "5", isAvailable: true },
    { id: 6, seatNumber: "6", isAvailable: true },
    { id: 7, seatNumber: "7", isAvailable: false },
    { id: 8, seatNumber: "8", isAvailable: true },
    { id: 9, seatNumber: "9", isAvailable: true },
    { id: 10, seatNumber: "10", isAvailable: true },
    { id: 11, seatNumber: "11", isAvailable: false },
    { id: 12, seatNumber: "12", isAvailable: true },
    { id: 13, seatNumber: "13", isAvailable: true },
    { id: 14, seatNumber: "14", isAvailable: true },
    { id: 15, seatNumber: "15", isAvailable: false },
    { id: 16, seatNumber: "16", isAvailable: true },
    { id: 17, seatNumber: "17", isAvailable: true },
    { id: 18, seatNumber: "18", isAvailable: true },
    { id: 19, seatNumber: "19", isAvailable: false },
    { id: 20, seatNumber: "20", isAvailable: true },
    { id: 21, seatNumber: "21", isAvailable: true },
    { id: 22, seatNumber: "22", isAvailable: true },
  ];