import Footer from "../components/Footer"
import Nav from "../components/Nav"

import React, { useState, useRef } from "react"

export default function Register() {
  const [file, setFile] = useState([])
  const inputFile = useRef(null)

  const handleChange = (e) => {
    setFile([...file, e.target.files[0]])
  }

  return (
    <div className="flex flex-col items-center">
      <Nav />
      <h1 className="text-2xl lg:text-3xl font-semibold text-center mt-5 lg:mb-5">
        Jetzt Verkaufen
      </h1>
      <div className="lg:w-4/12 lg:border p-10 rounded-2xl">
        <h1 className="text-xl font-semibold">Dein erster Artikel</h1>
        <p className="mt-4 text-sm font-medium text-gray-600">Foto hochladen</p>
        <button
          onClick={() => inputFile.current.click()}
          className="hover:shadow-md hover:shadow-gray-400 transition-all bg-primary py-30 rounded-full text-white mr-10"
        >
          <img src="/img/picture.png" className="h-20 w-20" alt="" />
        </button>
        <input
          type="file"
          onChange={handleChange}
          ref={inputFile}
          style={{ display: "none" }}
        />

        <p className="mt-4 text-sm font-medium text-gray-600">Marke</p>
        <input
          type="text"
          placeholder="Beispiel: Nike"
          className="w-full p-3 bg-gray-100 outline-none mt-1 rounded-md"
        />
        <p className="mt-4 text-sm font-medium text-gray-600">
          Artikelbezeichnung
        </p>
        <input
          type="text"
          placeholder="Beispiel: Sneaker AirMax"
          className="w-full p-3 bg-gray-100 outline-none mt-1 rounded-md"
        />
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
          placeholder="email"
          className="w-full p-3 bg-gray-100 outline-none mt-1 rounded-md"
        />
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
