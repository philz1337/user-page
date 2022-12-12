import React from "react"

import { ReactComponent as IconMarken } from "../svg/brand.svg"
import { ReactComponent as IconZustand } from "../svg/condition.svg"
import { ReactComponent as IconFunktion } from "../svg/function.svg"

export default function Conditions() {
  return (
    <div className="w-full flex items-center justify-center flex-col mt-20 bg-secondary">
      <div className="w-10/12 lg:w-9/12 w-full pt-10 pb-10 py-16 lg:pt-16 lg:pb-16">
        <h1 className="text-2xl lg:text-3xl font-medium text-center">
          Bedingungen für den Ankauf
        </h1>
        <div className="grid mt-10 lg:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center font-medium text-lg">
              <IconMarken className="w-10 h-10" />
              <div className="pl-2">Markenartikel</div>
            </div>
            <p className="text-sm mt-3">
              Wir kaufen nur Artikel mit Marke oder einer hohen Qualität an. Der
              Wert deines Artikels sollte, etwa zweimal Portokosten entsprechen,
              um dafür von uns einen Preis zu erhalten. Fälschungen kaufen wir
              nicht an.
            </p>
          </div>
          <div>
            <div className="flex items-center font-medium text-lg">
              <IconZustand className="w-10 h-10" />
              <div className="pl-2">Sehr guter Zustand</div>
            </div>
            <p className="text-sm mt-3">
              Der Artikel muss sauber und mindestens in einem sehr guten Zustand
              sein. Das bedeutet, keine Flecken, Löcher oder grobe
              Gebrauchsspuren aufweisen. Der Zustand sollte etwas so sein, dass
              man den Artikel noch mit gutem Gewissen einer nahestehenden Person
              schenken würde.
            </p>
          </div>
          <div>
            <div className="flex items-center font-medium text-lg">
              <IconFunktion className="w-10 h-10" />
              <div className="pl-2">Voll funktionsfähig</div>
            </div>
            <p className="text-sm mt-3">
              Alles sollte natürlich einwandfrei funktionieren und vollständig
              sein.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
