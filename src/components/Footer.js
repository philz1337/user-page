import React from "react"

import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { scroller } from "react-scroll"

export default function Footer() {
  const navigate = useNavigate()

  const onScrollBuy = () => {
    navigate("/")
    setTimeout(() => {
      scroller.scrollTo("whatWeBuy", {
        smooth: "easeInOutQuint",
      })
    }, 10)
  }

  const onScrollProcess = () => {
    navigate("/")
    setTimeout(() => {
      scroller.scrollTo("saleProcess", {
        smooth: "easeInOutQuint",
      })
    }, 10)
  }

  return (
    <div className="w-full flex items-center justify-center bg-gray-900 text-white">
      <div className="w-10/12 lg:w-9/12 w-full grid grid-cols-2 pt-10 pb-10 lg:pt-16 lg:pb-16 lg:grid-cols-4">
        <div>
          <h1 className="font-medium text-2xl lg:text-3xl text-green-500  ">
            okasi<span className="text-white">.</span>
          </h1>
        </div>
        <div className="lg:hidden"></div>
        <div className="space-y-2 lg:mt-0 mt-7">
          <p>
            <NavLink
              to="/"
              className="cursor-pointer hover:text-green-500"
              href="#"
            >
              Startseite
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/"
              className="cursor-pointer hover:text-green-500"
              onClick={onScrollProcess}
              smooth
              href="#"
            >
              Ablauf
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/"
              className="cursor-pointer hover:text-green-500"
              onClick={onScrollBuy}
              smooth
              href="#"
            >
              Kategorien
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/kontakt"
              className="cursor-pointer hover:text-green-500"
              href="#"
            >
              Kontakt
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/verkaufen"
              className="cursor-pointer hover:text-green-500"
              href="#"
            >
              Verkaufen
            </NavLink>
          </p>
        </div>
        <div className="space-y-2 mt-7 lg:mt-0">
          <p>
            {" "}
            <NavLink
              to="/agb"
              className="cursor-pointer hover:text-green-500"
              href="#"
            >
              AGB
            </NavLink>
          </p>

          <p>
            {" "}
            <NavLink
              to="/impressum"
              className="cursor-pointer hover:text-green-500"
              href="#"
            >
              Impressum
            </NavLink>
          </p>

          <p>
            {" "}
            <NavLink
              to="/widerruf"
              className="cursor-pointer hover:text-green-500"
              href="#"
            >
              Widerruf
            </NavLink>
          </p>

          <p>
            {" "}
            <NavLink
              to="/datenschutz"
              className="cursor-pointer hover:text-green-500"
              href="#"
            >
              Datenschutz
            </NavLink>
          </p>
        </div>
        <div>
          <h1 className="text-xl text-gray-400 lg:mt-0 mt-7">Bald auch:</h1>
          <img src="/img/appStore.png" className="h-27 mt-3" alt="" />
        </div>
      </div>
    </div>
  )
}
