import React from "react"
import { Link } from "react-router-dom"

export default function SaleProcess() {
  return (
    <div
      id="saleProcess"
      className="w-full flex items-center justify-center mt-16"
    >
      <div className="lg:w-9/12 w-10/12 flex flex-col items-center">
        <h1 className="text-2xl lg:text-3xl font-medium text-center">
          So läuft der Verkauf ab
        </h1>
        <div className="lg:w-5/12 mt-5">
          <div className="grid grid-cols-2 mb-5">
            <div className="mt-5">
              <h1 className="text-lg font-semibold">1. Foto machen</h1>
              <p className="text-sm mt-1 font-medium">
                Es reicht ein Foto und eine Angabe für Marke und ein Stichwort.
              </p>
            </div>
            <div className="flex justify-end">
              <img
                src="/img/foto-machen.png"
                className="ml-3 mt-6 h-30 w-30"
                alt=""
              />
            </div>
          </div>
          <div className="grid grid-cols-2 mb-5">
            <div className="mt-5">
              <h1 className="text-lg font-semibold">2. Einsenden</h1>
              <p className="text-sm mt-1 font-medium">
                Du erhälst innerhalb von 24 Stunden ein Festpreisangebot. Bist
                du einverstanden, sendest du die Artikel kostenfrei zu uns.
              </p>
            </div>
            <div className="flex justify-end">
              <img
                src="/img/einsenden.png"
                className="ml-3 mt-6 h-30 w-30"
                alt=""
              />
            </div>
          </div>
          <div className="grid grid-cols-2 mb-5">
            <div className="mt-5">
              <h1 className="text-lg font-semibold">3. Geld erhalten</h1>
              <p className="text-sm mt-1 font-medium">
                Wir prüfen deine Artikel und zahlen dir den vereinbarten Betrag
                aus. Entspricht etwas nicht unseren Bedingungen erhälst du es
                kostenfrei zurück.
              </p>
            </div>
            <div className="flex justify-end">
              <img
                src="/img/geld-erhalten.png"
                className="ml-3 mt-6 h-30 w-30"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Link to="/register">
              <button className="hover:shadow-md hover:shadow-gray-400 transition-all bg-primary px-6 py-2 text-white rounded-full">
                Jetzt Verkauf starten
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
