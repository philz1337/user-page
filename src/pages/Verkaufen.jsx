import React from "react"

import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import Verkaufsformular from "../components/Verkaufsformular"

import { ReactComponent as IconZustand } from "../components/condition.svg"

export default function Verkaufen() {
  const [isLoading, setLoading] = React.useState(false)
  const [issubmitted, setSubmitted] = React.useState(false)

  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <>
      <div className="flex flex-col items-center ">
        <Nav />

        {issubmitted ? (
          <div className="w-10/12 lg:w-9/12 sm:grid ">
            <h1 className="text-2xl lg:text-3xl font-semibold text-center mt-5 mb-6 lg:mb-5">
              Verkaufen
            </h1>

            <div className="lg:border rounded-2xl lg:p-5">
              {isLoading ? (
                <div className="text-center">
                  <h1>Deine Artikel werden hochgeladen</h1>
                </div>
              ) : (
                <div className="text-center">
                  <h1>Erfolgreich hochgeladen</h1>
                  <br />
                  <h1>
                    Unser Expertenteam sieht sich jetzt deine Artikel an. Du
                    erhälst innerhalb von 24 Stunden ein Angebot per Mail.
                  </h1>
                  <br />
                  <h1>
                    Du solltest innerhalb der nächsten 10 Minuten eine Email zur
                    Bestätigung erhalten. Erhälst du diese nicht, prüfe deinen
                    Spam Filter und kontaktiere uns bitte unter service@okasi.de
                  </h1>
                  <br />

                  <button
                    onClick={refreshPage}
                    className="hover:shadow-md w-60 hover:shadow-gray-400 transition-all bg-primary text-center py-2 text-white rounded-full"
                  >
                    Mehr Artikel verkaufen
                  </button>
                </div>
              )}
            </div>

            <br />
            <br />
          </div>
        ) : (
          <Verkaufsformular
            setLoading={setLoading}
            setSubmitted={setSubmitted}
          />
        )}

        <Footer />
      </div>
    </>
  )
}
