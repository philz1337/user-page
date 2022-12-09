import React from "react"
import About from "../components/About"
import Banner from "../components/Banner"
import Categories from "../components/Categories"
import Conditions from "../components/Conditions"
import FAQs from "../components/FAQs"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import SaleProcess from "../components/SaleProcess"
import Testimonial from "../components/Testimonial"
import WhatWeBuy from "../components/WhatWeBuy"

import CookieConsent from "react-cookie-consent"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Nav />
      <Banner />
      <Categories />
      <SaleProcess />
      <WhatWeBuy />
      <About />
      <Testimonial />
      <FAQs />
      <Conditions />
      <Footer />

      <CookieConsent
        enableDeclineButton
        location="bottom"
        buttonText="Annehmen"
        declineButtonText="Ablehnen"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        declineButtonStyle={{
          color: "white",
          background: "#2B373B",
          fontSize: "15px",
          borderRadius: "10px",
          border: "1px",
          fontWeight: "lighter",
        }}
        buttonStyle={{
          color: "white",
          background: "#03a84e",
          fontSize: "15px",
          borderRadius: "10px",
          fontWeight: "normal",
        }}
        expires={150}
      >
        Unsere Website verwendet Cookies um eine optimale Benutzererfahrung zu
        bieten.
        {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
      </CookieConsent>
    </div>
  )
}
