import Footer from "../components/Footer"
import Nav from "../components/Nav"

export default function Impressum() {
  return (
    <div className="flex flex-col items-center">
      <Nav />
      <h1 className="text-2xl lg:text-3xl font-semibold text-center mt-5 lg:mb-5">
        Allgemeine Geschäftsbedinungen
      </h1>

      <div className="w-10/12 gap-5 lg:gap-10 mt-10 mb-20">
        <p></p>
      </div>
      <Footer />
    </div>
  )
}
