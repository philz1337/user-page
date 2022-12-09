import React from "react"

import Footer from "../components/Footer"
import Nav from "../components/Nav"
import Verkaufsformular from "../components/Verkaufsformular"
import VerkaufErfolg from "../components/Verkauf_Erfolg"
import Warten from "../components/Warten"

export default function Verkaufen() {
  const [isLoading, setLoading] = React.useState(false)
  const [issubmitted, setSubmitted] = React.useState(false)
  const [isSuccess, setSuccess] = React.useState(false)

  return (
    <>
      <div className="flex flex-col items-center">
        <Nav />

        {issubmitted ? (
          <>
            {isLoading ? (
              <Warten />
            ) : (
              <>
                {isSuccess ? (
                  <VerkaufErfolg
                    setLoading={setLoading}
                    setSubmitted={setSubmitted}
                    setSuccess={setSuccess}
                  />
                ) : (
                  <div className="w-10/12 lg:w-9/12 sm:grid">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-center mt-5 mb-6 lg:mb-5 text-red-600">
                      Fehler
                    </h1>

                    <div className="lg:p-5">
                      <div className="text-center mt-12 mb-20">
                        <p>
                          Es ist ein Fehler aufgetreten. Bitte kontaktiere uns
                          unter service@okasi.de
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <Verkaufsformular
            setLoading={setLoading}
            setSubmitted={setSubmitted}
            setSuccess={setSuccess}
          />
        )}

        <Footer />
      </div>
    </>
  )
}
