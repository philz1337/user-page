import Footer from "../components/Footer"
import Nav from "../components/Nav"
import FAQs from "../components/FAQs"

export default function Kontakt() {
  return (
    <div className="flex flex-col items-center">
      <Nav />
      <h1 className="text-2xl lg:text-3xl font-semibold text-center mt-5 lg:mb-5">
        Kontakt
      </h1>
      <div className="w-10/12 lg:w-9/12 gap-5 lg:gap-10 mt-10 mb-5 text-center">
        <p>
          Wenn du eine Frage hast, kontaktiere uns einfach per Mail. Wir
          antworten innerhalb von 24 Stunden auf jede Nachricht.
        </p>
        <p className="mt-10">service@okasi.de</p>
      </div>

      <FAQs />
      <div className="mb-20"></div>
      <Footer />
    </div>
  )
}
