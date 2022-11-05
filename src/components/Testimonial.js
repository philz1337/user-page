import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";

export default function Testimonial() {
  return (
    <div className="w-full flex items-center justify-center mt-20">
      <div className="lg:w-9/12 w-full p-10 lg:p-16 bg-secondary">
        <h1 className="text-center font-semibold text-2xl lg:text-3xl">
          Kundenmeinungen
        </h1>
        <div className="grid lg:grid-cols-2 gap-4 mt-8 lg:gap-10 w-full">
          <div>
            <div className="p-5 rounded-2xl bg-white">
              <div className="flex items-center">
                <Stars />
                <FaCheckCircle className="text-sky-500 ml-3" />
              </div>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum ullam quia consequuntur? Minima qui neque expedita at
                error ab facilis nihil nostrum accusantium nulla distinctio
                dolorem, totam voluptas dolore obcaecati!{" "}
              </p>
            </div>
            <div className="mt-4 flex items-center">
              <img src="/img/Ellipse 119.png" className="h-12" alt="" />
              <div className="ml-3">
                <p className="font-semibold text-sm text-[#427FED]">
                  John Doye
                </p>
                <p className="text-xs text-gray-500">5 months ago</p>
              </div>
            </div>
          </div>
          <div>
            <div className="p-5 rounded-2xl bg-white">
              <div className="flex items-center">
                <Stars />
                <FaCheckCircle className="text-sky-500 ml-3" />
              </div>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum ullam quia consequuntur? Minima qui neque expedita at
                error ab facilis nihil nostrum accusantium nulla distinctio
                dolorem, totam voluptas dolore obcaecati!{" "}
              </p>
            </div>
            <div className="mt-4 flex items-center">
              <img src="/img/Ellipse 120.png" className="h-12" alt="" />
              <div className="ml-3">
                <p className="font-semibold text-sm text-[#427FED]">
                  John Doye
                </p>
                <p className="text-xs text-gray-500">5 months ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex space-x-1">
      <FaStar className="text-yellow-500" />
      <FaStar className="text-yellow-500" />
      <FaStar className="text-yellow-500" />
      <FaStar className="text-yellow-500" />
      <FaStar className="text-yellow-500" />
    </div>
  );
}
