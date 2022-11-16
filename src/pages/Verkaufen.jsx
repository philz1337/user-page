import Footer from "../components/Footer"
import Nav from "../components/Nav"

import React, { useState, useRef } from "react"

import { ReactComponent as IconPlus } from "./plus.svg"

export default function Verkaufen() {
  const [file, setFile] = useState([])
  const inputFile = useRef(null)

  const handleChange = (e) => {
    setFile([...file, e.target.files[0]])
  }

  return (
    <div className="flex flex-col items-center">
      <Nav />
      <h1 className="text-2xl lg:text-3xl font-semibold text-center mt-5 lg:mb-5">
        Verkaufen
      </h1>
      <div className="lg:w-4/12 lg:border p-10 rounded-2xl">
        <h1 className="text-xl font-semibold">Dein erster Artikel</h1>
        <p className="mt-4 text-sm font-medium text-gray-600">Foto</p>
        <div className="grid place-items-center">
          <button
            onClick={() => inputFile.current.click()}
            className="hover:shadow-md hover:shadow-gray-400 transition-all bg-primary rounded-2xl text-white grid place-items-center h-24 w-24"
          >
            <IconPlus className="h-16 w-16" alt="" />
          </button>
          <input
            type="file"
            onChange={handleChange}
            ref={inputFile}
            style={{ display: "none" }}
          />
        </div>
        <p className="mt-4 text-sm font-medium text-gray-600">Marke</p>
        <input
          type="text"
          placeholder="Adidas"
          className="w-full p-3 bg-gray-100 outline-none mt-1 rounded-md"
        />
        <p className="mt-4 text-sm font-medium text-gray-600">
          Artikelbezeichnung
        </p>
        <input
          type="text"
          placeholder="Winterjacke"
          className="w-full p-3 bg-gray-100 outline-none mt-1 rounded-md"
        />
        <div className="pt-10">
          <p className="mt-5 text-lg font-medium">
            Wohin senden wir das Angebot?
          </p>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <div>
              <p className="text-sm font-medium text-gray-600">Vorname</p>
              <input
                type="text"
                className="w-full p-3 bg-gray-100 outline-none mt-1 rounded-md"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Nachname</p>
              <input
                type="text"
                className="w-full p-3 bg-gray-100 outline-none mt-1 rounded-md"
              />
            </div>
          </div>
          <p className="mt-4 text-sm font-medium text-gray-600">E-Mail</p>
          <input
            type="text"
            className="w-full p-3 bg-gray-100 outline-none mt-1 rounded-md"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 mt-6">
          <button className="hover:shadow-md w-full hover:shadow-gray-400 transition-all bg-primary py-3 text-white rounded-full mr-10">
            Weitere Artikel
          </button>
          <button className="hover:shadow-md w-full hover:shadow-gray-400 transition-all bg-primary py-3 text-white rounded-full mr-10">
            Abschicken
          </button>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  )
}
