import { Link } from "react-router-dom"
import Dropdown from "./Dropdown"

export default function Nav() {
  return (
    <div className="py-7 lg:p-4 w-full flex justify-center bg-white sticky top-0 left-0 z-50">
      <div className="grid grid-cols-2 w-10/12 lg:w-9/12">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-3xl font-medium text-green-600">
              okasi<span className="text-black">.</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <Link to="/verkaufen">
            <button className="hidden lg:block hover:shadow-md hover:shadow-gray-400 transition-all bg-primary px-6 py-2 text-white rounded-full mr-7">
              Jetzt verkaufen
            </button>
          </Link>
          <Dropdown />
        </div>
      </div>
    </div>
  )
}
