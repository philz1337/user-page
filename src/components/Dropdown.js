import { Menu } from "@headlessui/react"
import { NavLink, useNavigate } from "react-router-dom"
import { Bars3Icon } from "@heroicons/react/20/solid"
import { Link, scroller } from "react-scroll"

export default function Dropdown() {
  const navigate = useNavigate()
  const onScrollBuy = () => {
    navigate("/")
    setTimeout(() => {
      scroller.scrollTo("whatWeBuy", {
        smooth: "easeInOutQuint",
      })
    }, 10)
  }
  const onScrollProcess = () => {
    navigate("/")
    setTimeout(() => {
      scroller.scrollTo("saleProcess", {
        smooth: "easeInOutQuint",
      })
    }, 10)
  }

  return (
    <Menu as="div" className="relative inline-block text-left outline-none">
      <div className="flex items-center justify-center">
        <Menu.Button>
          <Bars3Icon className="text-green-600 h-7 w-7" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Menu.Items className="absolute right-0 z-50 mt-2 origin-top-right rounded-md shadow-xl shadow-gray-300 bg-white outline-none">
        <div className="p-3 flex flex-col items-center h-full w-60 z-50 bg-white">
          <NavLink to="/" className="navOption" href="#">
            Startseite
          </NavLink>
          <Menu.Item>
            <Link onClick={onScrollProcess} smooth className="navOption">
              Ablauf
            </Link>
          </Menu.Item>
          <Link onClick={onScrollBuy} smooth end className="navOption">
            Kategorien
          </Link>
          <NavLink to="/kontakt" className="navOption" href="#">
            Kontakt
          </NavLink>
          <NavLink to="/verkaufen" className="navOption" href="#">
            Verkaufen
          </NavLink>
        </div>
      </Menu.Items>
    </Menu>
  )
}
