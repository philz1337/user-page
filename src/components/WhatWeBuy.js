import React from "react"

export default function WhatWeBuy() {
  return (
    <div
      id="whatWeBuy"
      className="w-full flex items-center justify-center mt-20"
    >
      <div className="lg:w-9/12 w-full p-10 lg:p-16 bg-secondary">
        <h1 className="text-center font-semibold text-2xl lg:text-3xl">
          Was wir ankaufen
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-7 lg:gap-12 mt-10">
          <Item
            title="Kleidung"
            img="/img/siiapb-1 1.png"
            des="Hemden, Pullover, T-Shirts, Blusen, Jacken, Schuhe, Stiefel etc."
          />
          <Item
            title="Technik"
            img="/img/siiapb-1 2.png"
            des="Handys, Tablets, Kameras, Fitness Tracker, Lautsprecher etc."
          />
          <Item
            title="Küche"
            img="/img/siiapb-1 3.png"
            des="Geschirr, Porzellan, Keramik, Töpfe, Pfannen etc."
          />
          <Item
            title="Accessoires"
            img="/img/siiapb-1 4.png"
            des="Schmuck, Uhren, Handtaschen, Portmonnaie, Brillen etc."
          />
          <Item
            title="Spielzeug"
            img="/img/siiapb-1 7.png"
            des="Holzspielzeug, LEGO, Playmobil, Puppen, Gesellschaftsspiele etc."
          />
          <Item
            title="Weiteres"
            img="/img/siiapb-1 6.png"
            des="Babyausstattung, Sportartikel und zubehör, Deko, Beauty u.v.m. "
          />
        </div>
      </div>
    </div>
  )
}

function Item({ title, img, des }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-xl font-semibold">{title}</h1>
      <img src={img} className="rounded-2xl my-2" alt="" />
      <p className="mt-2 text-sm font-medium">{des}</p>
    </div>
  )
}
