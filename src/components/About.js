import React from "react"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-16 lg:mt-20">
      <h1 className="text-center font-semibold text-2xl lg:text-3xl">
        Über Uns
      </h1>
      <div className="lg:w-9/12 w-10/12 gap-5 lg:gap-10 grid grid-cols-processPhone lg:grid-cols-process mt-8">
        <div>
          <p className="text-sm font-medium lg:text-base">
            {" "}
            “Als Vater und in einer Vollzeit Stelle habe ich nie die Zeit & Lust
            gefunden meine ungenutzten Dinge zu verkaufen. Dadurch ist die Idee
            von Okasi entstanden. Die Sachen kommen wieder in den Kreislauf und
            wir können somit nachhaltiger handeln.” <br />
            <span className="italic"> -Philipp Berben, Gründer von Okasi</span>
          </p>
          <div className="hidden lg:block">
            <p className="mt-5 text-sm font-medium lg:text-base">
              2022 ist Okasi enstanden, wir sind somit noch ein kleines Start-Up
              mit drei Mitarbeitern. Wir sind überzeugt von der Nachhaltigkeit
              unserer extrem einfachen Verkaufslösung.
            </p>
            <p className="mt-5 text-sm font-medium lg:text-base">
              Der Transport und die Logistik zu uns und zum neuen Kunden wird
              CO2 kompensiert. Dies setzen wir durch die Unterstützung von
              Klimaschutzprojekten wie z.B. Wasserkraft in Honduras und Biomasse
              in Vietnam und Nepal um. <br />
              Der Ausgleich ist nach dem „Greenhouse Gas Protocol – Product Life
              Cycle Accounting and Reporting Standard“ verifiziert.
            </p>
            <Link to="/register">
              <button className="hover:shadow-md hover:shadow-gray-400 transition-all bg-primary px-6 py-2 text-white rounded-full mt-7">
                Jetzt starten
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src="/img/user_quad.png" className="rounded-3xl w-full" alt="" />
        </div>
      </div>
      <div className="lg:hidden lg:w-9/12 w-10/12">
        <p className="mt-5 text-sm font-medium lg:text-base">
          2022 ist Okasi enstanden, wir sind somit noch ein kleines Start-Up mit
          drei Mitarbeitern. Wir sind überzeugt von der Nachhaltigkeit unserer
          extrem einfachen Verkaufslösung.
        </p>
        <p className="mt-5 text-sm font-medium lg:text-base">
          Der Transport und die Logistik zu uns und zum neuen Kunden wird CO2
          kompensiert. Dies setzen wir durch die Unterstützung von
          Klimaschutzprojekten wie z.B. Wasserkraft in Honduras und Biomasse in
          Vietnam und Nepal um. <br />
          Der Ausgleich ist nach dem „Greenhouse Gas Protocol – Product Life
          Cycle Accounting and Reporting Standard“ verifiziert.
        </p>
        <div className="flex justify-center mt-8">
          <Link to="/verkaufen">
            <button className="hover:shadow-md hover:shadow-gray-400 transition-all bg-primary px-6 py-2 text-white rounded-full">
              Jetzt starten
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
