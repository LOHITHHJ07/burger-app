import burger1 from "../assets/burger-1.png";
import burger2 from "../assets/burger-2.png";
import burger3 from "../assets/burger-3.png";
import burger4 from "../assets/burger-4.png";
import burger5 from "../assets/burger-5.png";
import burger6 from "../assets/burger-6.png";

import Snack1 from "../assets/snack-1.png";
import Snack2 from "../assets/snack-2.png";
import Snack3 from "../assets/snack-3.png";
import Snack4 from "../assets/snack-4.png";
import Snack5 from "../assets/snack-5.png";
import Snack6 from "../assets/snack-6.png";

import Beverage1 from "../assets/beverage-1.png"
import Beverage2 from "../assets/beverage-2.png"
import Beverage3 from "../assets/beverage-3.png"
import Beverage4 from "../assets/beverage-4.png"
import Beverage5 from "../assets/beverage-5.png"



const Food = [
  { name: "Regular chicken burger", img: burger1, price: 20 },
  { name: "chicken cheese burger", img: burger2, price: 30 },
  { name: "BBQ chicken burger", img: burger3, price: 40 },
  { name: "veg cheese burger", img: burger4, price: 25 },
  { name: "Veg burger", img: burger5, price: 20 },
  { name: "triple patty cheesy veg burger ", img: burger6, price: 50 },
];
const Snacks = [
  { name: " French fries", img: Snack1, price: 20 },
  { name: "peri peri fries", img: Snack2, price: 30 },
  { name: "cheese sandwich", img: Snack3, price: 35 },
  { name: "potato wafers", img: Snack4, price: 25 },
  { name: "salted fries", img: Snack5, price: 20 },
  { name: "pop-corn", img: Snack6, price: 5 },
];

const  Beverage=[
  { name: " Bananna shake", img: Beverage1, price: 20 },
  { name: "Mix fruit twist", img: Beverage2, price: 45 },
  { name: " Blue berry smoothie", img: Beverage3, price: 55 },
  { name: "Mango shake", img: Beverage4, price: 35 },
  { name: "Water melon", img: Beverage5, price: 15 },
  
];
 const Eateries= {Food,Snacks,Beverage};
 export default Eateries;

