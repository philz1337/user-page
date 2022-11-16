import { CheckBadgeIcon } from "@heroicons/react/20/solid"
import React from "react"
import { FaStar } from "react-icons/fa"

export default function Testimonial() {
  return (
    <div className="w-full flex items-center justify-center mt-20 bg-secondary">
      <div className="w-10/12 lg:w-9/12 w-full pt-10 pb-10 lg:pt-16 lg:pb-16 ">
        <h1 className="text-center font-semibold text-2xl lg:text-3xl">
          Kundenmeinungen
        </h1>
        <div className="grid lg:grid-cols-2 gap-4 mt-8 lg:gap-10 w-full">
          <div>
            <div className="p-5 rounded-2xl bg-white">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <Stars />
                  <CheckBadgeIcon className="text-sky-500 h-5 w-5 ml-3" />
                </div>
                <img src="/img/googleIcon.png" className="w-4" alt="" />
              </div>
              <p className="text-sm mt-3">
                Selbsterklärende Vorgehensweise, schnelle Antwortzeit,
                unkomplizierter Prozess{" "}
              </p>
            </div>
            <div className="mt-4 flex items-center">
              <img src="/img/Klaus.png" className="h-12" alt="" />
              <div className="ml-3">
                <p className="font-semibold text-sm text-[#427FED]">
                  Klaus Scholten
                </p>
                <p className="text-xs text-gray-500">vor 3 Wochen</p>
              </div>
            </div>
          </div>
          <div>
            <div className="p-5 rounded-2xl bg-white">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <Stars />
                  <CheckBadgeIcon className="text-sky-500 h-5 w-5 ml-3" />
                </div>
                <img src="/img/googleIcon.png" className="w-4" alt="" />
              </div>
              <p className="text-sm mt-3">
                Okasi ist sehr fair macht super Angebote ist ein tolles
                Unternehmen. Habe schon viele Sachen verkauft und war immer
                positiv überrascht. Ist schnell und unkompliziert. Super Arbeit{" "}
              </p>
            </div>
            <div className="mt-4 flex items-center">
              <img src="/img/Yvonne.png" className="h-12" alt="" />
              <div className="ml-3">
                <p className="font-semibold text-sm text-[#427FED]">
                  Yvonne Bystri
                </p>
                <p className="text-xs text-gray-500">vor 2 Wochen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Stars() {
  return (
    <div className="flex space-x-1 text-[#e46f06]">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>
  )
}
