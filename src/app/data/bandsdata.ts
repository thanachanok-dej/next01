import { Bands } from "../types/Bands";

export const Bandsdata: Bands[] = [
  {
    id: "cocktail",
    name: "Cocktail",
    debutDate: "24 ธันวาคม 2002", 
    member: [
      "โอม - ปัณฑพล ประสารราชกิจ",
      "เชาว์ - ชวรัตน์ หดสินทาย",
      "ปาร์ค - เกริกเกียรติ สว่างวงศ์",
      "ฟิลิปส์ - ฟิลิปส์ เปรมสิริกรณ์"
    ],
    latestAlbum: "Yours Ever (2024)", 
    image : "/image/cocktail.jpg",
    imageAlbum: "/image/yourEver.webp"
  },
  {
    id: "bts",
    name: "BTS",
    debutDate: "13 มิถุนายน 2013",
    member: [
      "RM (คิม นัมจุน)",
      "Jin (คิม ซอกจิน)",
      "Suga (มิน ยุนกิ)",
      "J-Hope (จอง โฮซอก)",
      "Jimin (ปาร์ค จีมิน)",
      "V (คิม แทฮยอง)",
      "Jungkook (จอน จองกุก)"
    ],
    latestAlbum: "Arirang (2026)",
    image: "/image/bts.jpg",
    imageAlbum:"/image/arirang.webp"
  },
  {
    id: "pixxie",
    name: "PiXXiE",
    debutDate: "11 กุมภาพันธ์ 2021",
    member: [
      "มาเบล - สุชาดา สอนพันธ์",
      "พิมมา - พิมพ์มาดา ใจสักเสิน",
      "อิงโกะ - อินท์ปาลี โชติหิรัญธนนนท์"
    ],
    latestAlbum: "rain (EP - 2023)",
    image: "/image/pixxie.webp",
    imageAlbum: "/image/pixxieRain.avif"
  }
];