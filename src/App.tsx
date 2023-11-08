import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import GetUpdate from "./Components/GetUpdate";
import Footer from "./Components/Footer";
import { BrowserRouter,Routes } from "react-router-dom";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <div className=" flex flex-col ">
      <BrowserRouter><Routes></Routes></BrowserRouter>
          <Navbar />
           <section id="home" className=" px-8 md:px-20 md:mt-4" >
          <Home />
        </section>
        <section className=" px-2 md:px-20 md:mt-4">
          <Menu />
        </section>
        <section id="get-update" >
          <About/>
          <GetUpdate />
        </section>
        <section id="contact"  className=" px-2 md:px-20 md:mt-4" >
          <Footer />
        </section>
        {/* <ContactUs></ContactUs> */}
        

    </div>
  );
}

export default App;
