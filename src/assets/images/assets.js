import logo from "./logo.png";
import header_img from "./hero.png";
import pattern from "./bg-pattern.webp";
import egypt from "./egypt.jpg";
import france from "./france.jpg";
import london from "./london.jpg";
import elmarat from "./elmarat.jpg";
import saudi from "./saudi.jpg";
import room_1 from "./property-1.jpg";
import room_2 from "./property-2.jpg";
import room_3 from "./property-3.jpg";
import room_4 from "./property-4.jpg";
import room_5 from "./property-5.jpg";
import room_6 from "./property-6.jpg";
import room_7 from "./property-7.jpg";
import room_8 from "./property-8.jpg";
import egypt_1 from "./egypt-1.png";
import egypt_2 from "./egypt-2.png";
import egypt_3 from "./egypt-3.png";
import egypt_4 from "./egypt-4.png";
import emarat_1 from "./hotel-e1.jpg";
import emarat_2 from "./hotel-e2.jpg";
import saudi_1 from "./hotel-s1.jpg";
import saudi_2 from "./hotel-s2.jpg";
import saudi_3 from "./hotel-s3.jpg";
import saudi_4 from "./hotel-s4.png";
import face_icon from "./facebook.svg";
import insta_icon from "./insta.svg";
import twitter_icon from "./twitter.svg";
import about_Image from "./about.jpg";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import cross_icon from "./cross_icon.svg";
import email_icon from "./email_icon.svg";
import lock_icon from "./lock_icon.svg";
import person_icon from "./person_icon.svg";
import upload_area from "./upload_area.svg";

export const assets = {
  logo,
  pattern,
  header_img,
  face_icon,
  insta_icon,
  twitter_icon,
  about_Image,
  app_store,
  play_store,
  cross_icon,
  lock_icon,
  person_icon,
  upload_area,
  email_icon,
};

export const category_list = [
  {
    category_name: "Egypt",
    category_image: egypt,
  },
  {
    category_name: "Saudi",
    category_image: saudi,
  },
  {
    category_name: "Dubai",
    category_image: elmarat,
  },
  {
    category_name: "France",
    category_image: france,
  },
  {
    category_name: "London",
    category_image: london,
  },
];

export const room_list = [
  {
    _id: "1",
    type: "buy",
    propertyType: "Houses",
    name: "COVA Home Realty",
    image: room_1,
    price: 710.68,
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    bed: "3",
    bath: "2",
    sqft: "1430",
    category: "London",
    location: "London",
  },
  {
    _id: "2",
    type: "rent",
    propertyType: "villa",
    name: "Exit Realty",
    image: room_2,
    price: 700.44,
    description: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    bed: "5",
    bath: "4",
    sqft: "1630",
    category: "France",
    location: "France",
  },
  {
    _id: "3",
    type: "buy",
    propertyType: "Houses",
    name: "Astel Room",
    image: saudi_1,
    price: 610.87,
    description: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    bed: "4",
    bath: "3",
    sqft: "1620",
    category: "Saudi",
    location: "Saudi",
  },
  {
    _id: "4",
    type: "sell",
    propertyType: "villa",
    name: "Dubai hotel",
    image: emarat_1,
    price: 421,
    description: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    bed: "5",
    bath: "3",
    sqft: "1200",
    category: "Dubai",
    location: "Dubai",
  },
  {
    _id: "5",
    type: "sell",
    propertyType: "Townhome",
    name: "Pyramied Hotel",
    image: egypt_2,
    price: 440.44,
    description: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    bed: "3",
    bath: "2",
    sqft: "630",
    category: "Egypt",
    location: "Egypt",
  },
  {
    _id: "6",
    type: "rent",
    propertyType: "villa",
    name: "Exit Realty",
    image: saudi_4,
    price: 630.44,
    description: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    bed: "5",
    bath: "4",
    sqft: "1430",
    category: "Saudi",
    location: "Saudi",
  },
  {
    _id: "7",
    type: "buy",
    propertyType: "loft",
    name: "Exit Realty",
    image: room_2,
    price: 630.44,
    description: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    bed: "5",
    bath: "4",
    sqft: "1630",
    category: "London",
    location: "London",
  },
  {
    _id: "8",
    type: "sell",
    propertyType: "loft",
    name: "Egypt hotel",
    image: egypt_3,
    price: 500.34,
    description: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    bed: "2",
    bath: "4",
    sqft: "1330",
    category: "Egypt",
    location: "Egypt",
  },
  {
    _id: "9",
    type: "buy",
    propertyType: "houses",
    name: "Premier Le Reve Hotel & Spa",
    image: egypt_4,
    price: 500,
    description: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    bed: "5",
    bath: "4",
    sqft: "1540",
    category: "Egypt",
    location: "Egypt",
  },
  {
    _id: "10",
    type: "rent",
    propertyType: "villa",
    name: "Saudi hotel",
    image: saudi_3,
    price: 1322,
    description: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    bed: "5",
    bath: "3",
    sqft: "1345",
    category: "Saudi",
    location: "Saudi",
  },
  {
    _id: "11",
    type: "sell",
    propertyType: "bungalow",
    name: "The Real Estate Group",
    image: room_3,
    price: 16,
    description: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    bed: "8",
    bath: "5",
    sqft: "1240",
    category: "France",
    location: "France",
  },

  {
    _id: "12",
    type: "rent",
    propertyType: "loft",
    name: "Beach Pros Realty Inc.",
    image: room_5,
    price: 473.85,
    description: "2715 Ash Dr. San Jose, South Dakota 83475",
    bed: "10",
    bath: "8",
    sqft: "2350",
    category: "London",
    location: "London",
  },
  {
    _id: "13",
    type: "buy",
    propertyType: "houses",
    name: "Keller Williams Elite Town Center",
    image: emarat_2,
    price: 105.55,
    description: "3517 W. Gray St. Utica, Pennsylvania 57867",
    bed: "5",
    bath: "2",
    sqft: "1924",
    category: "Dubai",
    location: "Dubai",
  },
  {
    _id: "14",
    type: "buy",
    propertyType: "houses",
    name: "Keller Williams Elite Town Center",
    image: room_6,
    price: 105.55,
    description: "3517 W. Gray St. Utica, Pennsylvania 57867",
    bed: "8",
    bath: "8",
    sqft: "1950",
    category: "London",
    location: "London",
  },
  {
    _id: "15",
    type: "rent",
    propertyType: "villa",
    name: "All Pros Real Estate",
    image: room_7,
    price: 739.65,
    description: "8502 Preston Rd. Inglewood, Maine 98380",
    bed: "4",
    bath: "4",
    sqft: "1580",
    category: "Egypt",
    location: "Egypt",
  },
  {
    _id: "16",
    type: "rent",
    propertyType: "villa",
    name: "FIT Realty",
    image: saudi_2,
    price: 249,
    description: "4517 Washington Ave. Manchester, Kentucky 39495",
    bed: "4",
    bath: "2",
    sqft: "1520",
    category: "Saudi",
    location: "Saudi",
  },
  {
    _id: "17",
    type: "buy",
    propertyType: "loft",
    name: "FIT Realty",
    image: room_8,
    price: 15,
    description: "4517 Washington Ave. Manchester, Kentucky 39495",
    bed: "3",
    bath: "2",
    sqft: "1120",
    category: "London",
    location: "London",
  },
  {
    _id: "18",
    type: "rent",
    propertyType: "townHome",
    name: "Dragon Hotel",
    image: egypt_1,
    price: 321,
    description: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    bed: "5",
    bath: "3",
    sqft: "2300",
    category: "Egypt",
    location: "Egypt",
  },
  {
    _id: "19",
    type: "buy",
    propertyType: "loft",
    name: "Chicken Salad",
    image: room_4,
    price: 576.28,
    description: "4140 Parker Rd. Allentown, New Mexico 31134",
    bed: "6",
    bath: "6",
    sqft: "1260",
    category: "Egypt",
    location: "Egypt",
  },
];
