import React from "react";
 import coke from "../assets/coke.png";
 import burger from "../assets/burger-4.png"
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
        <div>
            <ul className="flex flex-row  justify-evenly" >
                {promoObject.map((item) => (
                    <li
                        key={item.description}
                        className="block  bg-white border border-gray-200 rounded-lg shadow flex flex-row justify-center items-center m-8"
                    > 
                       <div > <h3 className="text-4xl mb-3">Payday promo</h3>
                        <p className="text-2xl">{item.description}</p>
                        <p className="w-64 px-1">{item.details}</p>
                        <h3 className="text-amber-500 font-bold text-2xl font-extrabold ">buy online</h3></div>
                        <img src={item.img} alt="not found" className="h-3/6 P-2" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Promo;
