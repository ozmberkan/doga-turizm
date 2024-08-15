import roadImg from "../assets/road.jpg";
import road2Img from "../assets/road2.jpg";
import road3Img from "../assets/road3.jpg";
import Istanbul from "../assets/istanbul.jpg";
import Izmir from "../assets/izmir.jpg";
import Ankara from "../assets/ankara.jpg";
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
    icon : FaXTwitter,
    name: "Twitter"
  },
   {
    icon : FaInstagram,
    name: "Instagram"
  },
  {
    icon : FaFacebook,
    name : "Facebook"
  },
  {
    icon : FaWhatsapp,
    name : "Whatsapp"
  },
]

export const images = [roadImg, road2Img, road3Img];
export const downloadImage = [appstore, googleplay, huawei];

export const campaigns = [
  {
    id:1,
    cityName : "İstanbul",
    image: Istanbul,
    price: "399.99",
    prevPrice: "599.99",
    discount: "%33.33",
  },
  {
    id:2,
    cityName : "İzmir",
    image: Izmir,
    price: "399.99",
    prevPrice: "599.99",
    discount: "%33.33",
  },
  {
    id:3,
    cityName : "Ankara",
    image: Ankara,
    price: "399.99",
    prevPrice: "599.99",
    discount: "%33.33",
  }
]


export const cities = [
    { id: 1, title: "İstanbul", value: "istanbul" },
    { id: 2, title: "Ankara", value: "ankara" },
    { id: 3, title: "İzmir", value: "izmir" },
    { id: 4, title: "Bursa", value: "bursa" },
    { id: 5, title: "Antalya", value: "antalya" },
    { id: 6, title: "Adana", value: "adana" },
    { id: 7, title: "Konya", value: "konya" },
    { id: 8, title: "Gaziantep", value: "gaziantep" },
    { id: 9, title: "Kayseri", value: "kayseri" },
    { id: 10, title: "Mersin", value: "mersin" },
    { id: 11, title: "Eskişehir", value: "eskisehir" },
    { id: 12, title: "Samsun", value: "samsun" },
    { id: 13, title: "Trabzon", value: "trabzon" },
    { id: 14, title: "Erzurum", value: "erzurum" },
    { id: 15, title: "Diyarbakır", value: "diyarbakir" }
  ];
  
  

  export const InputField = [
    {label:"Nereden", type: "text", name:"departure"},
    {label:"Nereye", type: "text", name:"arrival"},
    {label:"Tarih", type: "date", name:"arrival"}
  ]

  export const footerAbout = [
    {title : "Hakkımızda"},
    {title : "Kariyer"},
    {title : "İletişim"},
    {title : "Yenilenebilir Enerji"},
  ]
  export const footerSSS = [
    {title : "Sıkça Sorulan Sorular"},
    {title : "Kişisel Verilerin Korunması"},
    {title : "Gizlilik Politikası"},
    {title : "Çerez Politikası"},
  ]

  export const footerWith = [
    {title : "Otobüsünü Kirala"},
    {title : "Şoförümüz ol"},
  ]