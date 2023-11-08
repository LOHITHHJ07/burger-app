import React from "react";
import fb from "../assets/icons8-fb-50.png";
import ig from "../assets/icons8-instagram-50.png";
import tw from "../assets/icons8-twitter-50.png";
import { Link } from "react-scroll";

function Contact() {
  return (
    <div className="flex flex-col text-center px-4  sm:text-start sm:text-2xl sm:grid sm:grid-cols-3 sm:px-20">
      <div className="flex flex-col p-10   ">
        <h1 className="cursor-pointer text-center sm:text-start  text-4xl  font-extrabold text-amber-500">
          BUR<span className="text-green-600">GHAR</span>
        </h1>
        <div className="flex flex-row  items-center justify-center sm:justify-start mb-3">
          <img src={fb} className="h-10" alt="not found" />
          <img src={ig} className="h-10"  alt="not found" />
          <img src={tw}  className="h-10" alt="not found" />
        </div>
        <p className="font-extrabold text-amber-500 mb-3">Follow Us</p>
        <p className=" text-center sm:text-start  text-amber-500  font-semibold">Phone:<span className="text-yellow-700"> 8893843892</span> </p>
        <p className=" text-center sm:text-start  text-amber-500 font-semibold">email: <span  className="text-yellow-700">contact@burghar.com</span></p>
      </div>
      <div className="flex flex-col  mt-6 p-10">
        <p className="font-semibold mb-3  text-yellow-700"><Link to="home" className="cursor-pointer" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></p>
        <p className="font-semibold  mb-3 text-yellow-700"><Link to="about" className="cursor-pointer"  spy={true} smooth={true} offset={-70} duration={500}>About</Link></p>
        <p className="font-semibold mb-3 text-yellow-700"><Link to="menu" className="cursor-pointer"  spy={true} smooth={true} offset={-70} duration={500}>Menu</Link></p>
        <p className="font-semibold mb-3  text-yellow-700"><Link to="contact" className="cursor-pointer"  spy={true} smooth={true} offset={-70} duration={500}>Contact Us</Link></p>
        
      </div>
      <div className="flex flex-col  p-10">
       <div></div>
       <p className=" text-amber-500 font-extrabold mt-3">Address</p>
        <p className="font-semibold text-yellow-700 mtb-8">Jl. Pantai Kuta No. 34, Badung, Bali.</p>
        <div className="mt-10" >
        <p className=" text-amber-500 font-extrabold">Support</p>
          <p className="font-semibold text-yellow-700 ">privacy policy</p>
          <p className="font-semibold text-yellow-700 ">Terms and conditions</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
