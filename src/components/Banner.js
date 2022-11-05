import React from "react";

export default function Banner() {
  return (
    <div className="w-full flex flex-col items-center justify-center lg:mt-20">
      <div className="w-10/12 lg:w-9/12 flex flex-col-reverse lg:grid lg:gap-16 lg:grid-cols-2">
        <div className="flex flex-col justify-between mt-10 lg:mt-0">
          <h1 className="font-medium text-4xl lg:text-6xl">
            <span className="text-primary">Befreie dich</span> von ungenutzten
            Dingen
          </h1>
          <div className="mb-10 ">
            <p className="text-lg mt-5 font-medium">
              Wir kaufen was du nichtmehr brauchst direkt zum Festpreis
            </p>
            <p className="flex mt-3">
              <img src="/img/Carbs.png" className="mr-2 h-7 w-7" alt="" />
              Die gesamte Logistik wird CO2 kompensiert
            </p>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <img src="/img/bannerImg.png" alt="" />
        </div>
      </div>
      <div className="w-10/12 lg:w-9/12 flex items-center">
        <button className="bg-primary hover:shadow-md hover:shadow-gray-400 transition-all w-40 px-4 text-sm py-2 text-white rounded-full">
          Jetzt verkaufen
        </button>
        <p className="text-xs lg:text-sm ml-3">Über 6.000 zufriedene <br /> Kunden  die uns weiterempfehlen</p>
      </div>
    </div>
  );
}