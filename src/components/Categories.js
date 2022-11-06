import React from "react";

export default function Categories() {
  return (
    <div className="w-full flex items-center justify-center mt-16">
      <div className="lg:w-9/12 w-full bg-secondary p-8 grid grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center font-medium text-lg">
            <img src="/img/Arhive.png" className="lg:h-10 h-9 mr-2" alt="" />
            Sehr viele Kategorien
          </div>
          <p className="text-sm mt-3">
            Wir kaufen fast alles: Kleidung, Technik, Haushaltsartikel, Beauty,
            Deko, Fashion, Schuhe, und vieles mehr.
          </p>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center font-medium text-lg">
            <img src="/img/Arhive.png" className="h-10 mr-2" alt="" />
            Sehr einfach
          </div>
          <p className="text-sm mt-3">
            Festpreisangebot innerhalb von 24 Stunden. Du entscheidest ob du
            einverstanden bist. Einfacher geht es nicht :)
          </p>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center font-medium text-lg">
            <img src="/img/Arhive.png" className="h-10 mr-2" alt="" />
            100% kostenlos
          </div>
          <p className="text-sm mt-3">
            Der Versand zu uns sowie der gesamte Ankaufservice ist 100%
            kostenfrei.
          </p>
        </div>
        <div className="lg:hidden">
          <div className="flex items-center font-medium text-lg">
            <img src="/img/compas.png" className="lg:h-10 h-8 mr-2" alt="" />
            100% kostenlos
          </div>
          <p className="text-sm mt-3">
            Der Versand zu uns sowie der gesamte Ankaufservice ist 100%
            kostenfrei.
          </p>
        </div>
      </div>
    </div>
  );
}
