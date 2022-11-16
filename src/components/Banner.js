import { Link } from "react-router-dom"

import { ReactComponent as LogoWorld } from "./world.svg"

export default function Banner() {
  return (
    <div className="w-full flex flex-col items-center justify-center lg:mt-20">
      <div className="w-10/12 lg:w-9/12 flex flex-col-reverse lg:grid lg:gap-16 lg:grid-cols-2 ">
        <div className="flex flex-col justify-center mt-10 lg:mt-0 ">
          <h1 className="font-medium text-4xl lg:text-6xl">
            <span className="text-primary">Befreie dich</span> von ungenutzten
            Dingen
          </h1>
          <div className="mb-10 ">
            <p className="text-lg mt-5 font-medium">
              Wir kaufen was du nichtmehr brauchst direkt zum Festpreis
            </p>
            <p className="flex mt-3 text-sm">
              <LogoWorld stroke="#03A84E" className="w-5 h-5 mr-1" />
              Die gesamte Logistik wird CO2 kompensiert
            </p>
          </div>
        </div>
        <div className="mt-0 lg:mt-0">
          <img src="/img/befreie-dich.png" alt="" />
        </div>
      </div>
      <div className="w-10/12 lg:w-9/12 flex items-center">
        <Link to="/verkaufen">
          <button className="hover:shadow-md w-44 hover:shadow-gray-400 transition-all bg-primary text-center py-2 text-white rounded-full">
            Jetzt verkaufen
          </button>
        </Link>
        <p className="text-xs lg:text-sm ml-3">
          Über 6.000 zufriedene <br /> Kunden die uns weiterempfehlen
        </p>
      </div>
    </div>
  )
}
