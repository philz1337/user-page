import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex items-center justify-center p-10 lg:p-16 mt-20 bg-gray-900 text-white">
      <div className="lg:w-9/12 w-full grid lg:grid-cols-4">
        <div>
          <h1 className="font-semibold text-2xl lg:text-3xl text-green-500  ">okasi.</h1>
        </div>
        <div className="space-y-2 lg:mt-0 mt-7">
          <p className="cursor-pointer hover:text-green-500">Startseite</p>
          <p className="cursor-pointer hover:text-green-500">Ablauf</p>
          <p className="cursor-pointer hover:text-green-500">Kategorien</p>
          <p className="cursor-pointer hover:text-green-500">Bedingungen</p>
          <p className="cursor-pointer hover:text-green-500">Über Uns</p>
        </div>
        <div className="space-y-2">
          <p className="cursor-pointer hover:text-green-500">Datenschutz</p>
          <p className="cursor-pointer hover:text-green-500">Impressum</p>
          <p className="cursor-pointer hover:text-green-500">AGB</p>
        </div>
        <div>
          <h1 className="text-2xl text-gray-400 lg:mt-0 mt-7">Bald im:</h1>
          <img src="/img/appStore.png" className="h-28 mt-3" alt="" />
        </div>
      </div>
    </div>
  );
}
