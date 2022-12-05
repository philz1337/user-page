import React from "react"

import { ReactComponent as IconPlus } from "../svg/plus.svg"

export default function ArticleUpload({ number, register, watch, reset }) {
  return (
    <div className="mb-14 mt-6">
      <h1 className="text-lg font-medium">{number}. Artikel</h1>
      <div className="grid place-items-center mt-3">
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
      <div class="relative mt-3">
        <input
          type="text"
          id="brand"
          class="w-full outline-none mt-1 rounded-xl border focus:border-primary px-4 pb-2.5 pt-6 peer"
          {...register("brand" + number, {
            maxLength: 50,
          })}
          placeholder=" "
        />
        <label
          for="brand"
          class="absolute text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-7 z-10 origin-[0] left-4  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Marke
        </label>
      </div>

      <div class="relative mt-2">
        <input
          type="text"
          id="title"
          class="w-full outline-none mt-1 rounded-xl border focus:border-primary px-4 pb-2.5 pt-6 peer"
          {...register("title" + number, {
            maxLength: 100,
          })}
          placeholder=" "
        />
        <label
          for="title"
          class="absolute text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-7 z-10 origin-[0] left-4  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Titel
        </label>
      </div>
      {/* <p id="floating_helper_text" class="text-xs text-gray-800 mt-3">
        Es reicht ein Stichwort wie: Jacke, Jeans, T-Shirt, Pullover. Bei z.B.
        Elektronik bitte eine Modellbezeichnung angeben.
      </p> */}
    </div>
  )
}
