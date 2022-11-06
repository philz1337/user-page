import React from "react";

export default function Conditions() {
  return (
    <div className="w-full flex items-center justify-center flex-col mt-20">
      <div className="lg:w-9/12 w-full bg-secondary p-10 py-16 lg:p-16">
        <h1 className="text-2xl lg:text-3xl font-medium text-center">
          Bedingungen für den Ankauf
        </h1>
        <div className="grid mt-10 lg:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center font-medium text-lg">
              <img src="/img/Arhive.png" className="lg:h-10 h-9 mr-2" alt="" />
              Mindestwert
            </div>
            <p className="text-sm mt-3">
              Das der Ankauf für uns noch sinnvoll ist sollte der Artikelwert
              höher sein als zweimal Portokosten.
            </p>
          </div>
          <div>
            <div className="flex items-center font-medium text-lg">
              <img src="/img/Arhive.png" className="h-10 mr-2" alt="" />
              Sehr guter Zustand
            </div>
            <p className="text-sm mt-3">
              Der Artikel muss sauber und mindestens in einem sehr guten Zustand
              sein. Das bedeutet keine Flecken, Löcher oder grobe Kratzer
              aufweisen.
            </p>
          </div>
          <div>
            <div className="flex items-center font-medium text-lg">
              <img src="/img/Arhive.png" className="h-10 mr-2" alt="" />
              Voll funktionsfähig
            </div>
            <p className="text-sm mt-3">
              Alles sollte natürlich einwandfrei funktionieren und vollständig
              sein.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
