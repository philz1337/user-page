import React from "react"

import { ReactComponent as Cats } from "./cat.svg"
import { ReactComponent as Easy } from "./smile.svg"
import { ReactComponent as Free } from "./free.svg"

export default function Categories() {
  return (
    <div className="w-full flex items-center justify-center mt-16 bg-secondary">
      <div className="w-10/12 lg:w-9/12 pt-8 pb-8 grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
        <div>
          <div className="flex items-center font-medium text-lg">
            <Cats className="w-10 h-10" />
            <div className="pl-2">Sehr viele Kategorien</div>
          </div>
          <p className="text-sm mt-3">
            Wir kaufen alles auf einmal: Kleidung, Technik, Haushaltsartikel,
            Beauty, Deko, Fashion, Schuhe, und vieles mehr.
          </p>
        </div>

        <div className="lg:hidden">
          <div className="flex items-center font-medium text-lg">
            <Easy className="w-10 h-10" />
            <div className="pl-2">Einfach & kostenlos</div>
          </div>
          <p className="text-sm mt-3">
            Festpreisangebot innerhalb von 24 Stunden. Der gesamte Ankaufservice
            ist 100% kostenfrei.
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="flex items-center font-medium text-lg">
            <Easy className="w-10 h-10" />
            <div className="pl-2">Sehr einfach</div>
          </div>
          <p className="text-sm mt-3">
            Festpreisangebot innerhalb von 24 Stunden. Du entscheidest ob du
            einverstanden bist. Einfacher geht es nicht :)
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="flex items-center font-medium text-lg">
            <Free className="w-10 h-10" />
            <div className="pl-2">100% kostenlos</div>
          </div>
          <p className="text-sm mt-3">
            Der Versand zu uns sowie der gesamte Ankaufservice ist 100%
            kostenfrei.
          </p>
        </div>
      </div>
    </div>
  )
}
