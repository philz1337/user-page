import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="py-7 lg:p-4 w-full flex justify-center">
      <div className="grid grid-cols-2 w-10/12 lg:w-9/12">
        <div className="flex items-center">
          <Link to="/">
            <img src="/img/logo.png" alt="" />
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <button className="hidden lg:block hover:shadow-md hover:shadow-gray-400 transition-all bg-primary px-6 py-2 text-white rounded-full mr-10">
            Jetzt verkaufen
          </button>
          <img src="/img/menu.png" className="h-5 cursor-pointer" alt="" />
        </div>
      </div>
    </div>
  );
}