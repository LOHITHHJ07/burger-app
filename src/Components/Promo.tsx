import React from "react";
 import coke from "../assets/promo-cola.png";
 import burger from "../assets/promo-burger.png"
const promoObject = [
    {
        description: "GET A 10% DISCOUNT ON PAYDAY WEEK",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img:burger
    },
    {
        description: "BUY ONE COKE GET ONE FREE COKE",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img:coke
    },
];

function Promo() {
    return (
        <div className="px-10 py-8 my-14 sm:py-10 md:my-28">
            
            <ul className="grid gap-10 sm:gap-5  md:grid-cols-2 md:gap-10 " >
                {promoObject.map((item) => (
                    <li
                        key={item.description}
                        className="card h-80 sm:h-auto bg-amber-500 shadow-xl p-8 md:p-10 flex flex-col-reverse  md:flex-row  items-center rounded  shadow-gray-300 card "
                    >  
                       <div> 
                        <p className=" text-center text-xl sm:text-start  md:text-4xl  mb-2 md:b-4 font-black text-yellow-700">{item.description}</p>
                        <p className=" w-auto md:w-64  text-center text-xl sm:text-star   md:text-2xl text-white ">{item.details}</p>
                       </div>
                        <img src={item.img} alt="not found" className="h-24  md:m-4 sm:h-40 md:h-64 hover:animate-bounce " />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Promo;
