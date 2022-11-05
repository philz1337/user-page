import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Conditions from "../components/Conditions";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SaleProcess from "../components/SaleProcess";
import Testimonial from "../components/Testimonial";
import WhatWeBuy from "../components/WhatWeBuy";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Nav />
      <Banner/>
      <Categories/>
      <SaleProcess/>
      <WhatWeBuy/>
      <About/>
      <Testimonial/>
      <Conditions/>
      <Footer/>
    </div>
  );
}
