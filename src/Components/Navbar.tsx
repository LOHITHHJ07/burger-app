import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import "../Styles/Navbar.css"
import { Link, animateScroll as scroll } from "react-scroll";
import ham from "../assets/icons8-hamburger-50.png";
import cross from "../assets/icons8-cross-48.png";

function Navbar() {
  const [toggle ,setToggle]=useState(false);
  const mdScreen = useMediaQuery({ query: '(max-width: 768px)' })

  const ToggleNav=()=>{
  let image=document.getElementById("navicon");
  console.log(image)
    setToggle(!toggle);
  }
  let nav=document.getElementById("nav");
  toggle?nav?.classList.remove("hidden"):nav?.classList.add("hidden");


  return (
    <div className=" items-center  sm:flex sm:flex-row  py-4 z-20 justify-between  w-full fixed  bg-white   md:py-2 md:items-center ">
      <div className="flex flex-rows items-center justify-between">
      <h1 className="cursor-pointer text-center px-6 text-2xl mr-2 md:text-3xl font-extrabold text-amber-500 md:ml-10 ">
        BUR<span className="text-green-600">GHAR</span>
      </h1>
      <div className="block md:hidden px-2 "><img src={toggle?cross:ham} onClick={ToggleNav} id="navicon" className="h-10  mr-2" alt="Not found" /></div>
      </div>
     <ul id="nav" className=" flex-cols justify-center text-center items-center h-screen w-screen  mr-2 md:mr-10 sm:w-auto sm:h-auto left-0 hidden py-16  text-yellow-700 font-semibold md:flex md:justify-evenly md:flex-row md:basis-1/2 md:p-4  ">
        <li className="py-2 px-4 ">
          <Link to="home" className="cursor-pointer"  spy={true} smooth={true} offset={-70} duration={500}>
            HOME
          </Link>{" "}
        </li>
        <li className=" py-2 px-4 ">
          <Link to="about"  className="cursor-pointer" spy={true} smooth={true} offset={-70} duration={500}>
            ABOUT US
          </Link>
        </li>
        <li className=" py-2 px-4">
          {" "}
          <Link to="menu" className="cursor-pointer" spy={true} smooth={true} offset={-70} duration={500}>
            MENU
          </Link>
        </li>
        <li className=" py-2 px-4 ">
          <Link
            to="contact"
            className="cursor-pointer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            CONTACT US
          </Link>
        </li>
        <li className="mt-0 ">
          <button className="shop-btn bg-amber-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600  ">
            SHOP ONLINE
          </button>
        </li>
      </ul>
      </div>
    
    
  );
}

export default Navbar;
