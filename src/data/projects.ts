export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  area: string;
  location: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "現代簡約宅",
    category: "住宅設計",
    year: "2024",
    role: "主導設計師",
    description:
      "以簡潔的線條與中性色調為主軸，打造寧靜且具有現代感的居住空間。開放式格局讓光線自由流動，搭配精選的家具與軟裝，營造出低調奢華的生活氛圍。",
    area: "45 坪",
    location: "台北市大安區",
  },
  {
    id: "2",
    title: "日式禪風居所",
    category: "住宅設計",
    year: "2024",
    role: "主導設計師",
    description:
      "融合日式美學與台灣在地生活習慣，運用木質元素、障子門與枯山水造景，在都市中創造一方靜謐的禪意空間。",
    area: "38 坪",
    location: "台北市信義區",
  },
  {
    id: "3",
    title: "工業風複合辦公室",
    category: "商業空間",
    year: "2023",
    role: "主導設計師・團隊統籌",
    description:
      "為新創團隊打造的工業風辦公空間，裸露天花板搭配金屬管線，水泥牆面與暖色木質桌面形成對比，兼具個性與實用性。",
    area: "120 坪",
    location: "台北市內湖區",
  },
  {
    id: "4",
    title: "北歐風親子宅",
    category: "住宅設計",
    year: "2023",
    role: "主導設計師",
    description:
      "以安全、溫馨為核心理念，圓角設計貫穿全室，淺木色調搭配柔和的莫蘭迪色系，為一家四口打造充滿幸福感的居住環境。",
    area: "52 坪",
    location: "新北市板橋區",
  },
  {
    id: "5",
    title: "精品咖啡廳",
    category: "商業空間",
    year: "2024",
    role: "主導設計師",
    description:
      "以第三波精品咖啡文化為靈感，結合手沖吧台、藝廊展示牆與舒適的閱讀角落，打造兼具品味與社交功能的複合式咖啡空間。",
    area: "35 坪",
    location: "台北市中山區",
  },
  {
    id: "6",
    title: "奢華飯店套房",
    category: "飯店設計",
    year: "2023",
    role: "協同設計師",
    description:
      "為五星級飯店設計的總統套房，運用大理石、古銅金屬與深色絲絨，營造出低調而奢華的住宿體驗，每個細節都展現極致品味。",
    area: "28 坪",
    location: "台中市西屯區",
  },
];
