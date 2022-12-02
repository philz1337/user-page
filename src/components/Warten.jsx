import React from "react"

import LoadingSpinner from "../components/LoadingSpinner"

export default function Warten() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="w-10/12 lg:w-9/12 sm:grid ">
        <h1 className="text-2xl lg:text-3xl font-semibold text-center mt-5 mb-6 lg:mb-5">
          Verkaufen
        </h1>

        <div className=" lg:p-5">
          <div className="text-center mb-20">
            <LoadingSpinner />
            <h1>Ein kleiner Moment</h1>
            <h1>Deine Artikel werden hochgeladen</h1>
          </div>
        </div>
      </div>
    </>
  )
}
