import React from "react"

import { ReactComponent as IconPlus } from "../svg/plus.svg"

export default function ArticleUpload({ number, register, watch, reset }) {
  return (
    <div className="mb-20 mt-10">
      <h1 className="text-xl font-semibold">{number}. Artikel</h1>
      <p className="mt-4 text-sm font-medium text-gray-600">Foto</p>

      <div className="grid place-items-center">
        {watch("picture" + number) && watch("picture" + number).length ? (
          <div className="relative h-32 w-32 border-2 hover:shadow-md hover:shadow-gray-400 hover:border-primary bg-gray-100 rounded-2xl">
            <input
              type="file"
              {...register("picture" + number)}
              className="w-full h-full absolute left-0 top-0 z-40 opacity-0 cursor-pointer rounded-2xl bg-black"
            />
            <img
              src={URL.createObjectURL(watch("picture" + number)[0])}
              alt={"Bild " + number}
              className="w-full h-full object-contain absolute z-10 rounded-2xl"
            />
          </div>
        ) : (
          <button className="relative hover:shadow-md hover:shadow-gray-400 transition-all bg-primary rounded-2xl text-white grid place-items-center h-32 w-32">
            <IconPlus stroke="#FFFFFF" className="h-24 w-24" alt="" />
            <input
              type="file"
              {...register("picture" + number)}
              className="w-full h-full absolute left-0 top-0 -mt-7 opacity-0 cursor-pointer rounded-2xl"
            />
          </button>
        )}
      </div>

      <p className="mt-4 text-sm font-medium text-gray-600">Marke</p>
      <input
        type="text"
        {...register("brand" + number, {
          maxLength: 50,
        })}
        placeholder="Adidas"
        className="w-full p-3 outline-none mt-1 rounded-xl border focus:border-primary"
      />
      <p className="mt-4 text-sm font-medium text-gray-600">
        Artikelbezeichnung
      </p>
      <input
        type="text"
        placeholder="Winterjacke"
        {...register("title" + number, {
          maxLength: 100,
        })}
        className="w-full p-3 outline-none mt-1 rounded-xl border focus:border-primary"
      />
    </div>
  )
}
