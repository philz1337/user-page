import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
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
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex items-center justify-center">
        <Menu.Button>
          <Bars3Icon className="text-green-600 h-7 w-7" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 mt-2 origin-top-right rounded-md shadow-xl shadow-gray-300 bg-white">
          <div className="p-3 flex flex-col items-center h-full w-60 z-50 bg-white">
            <NavLink to="/" className="navOption" href="#">
              Startseite
            </NavLink>
            <Link onClick={onScrollProcess} smooth className="navOption">
              Ablauf
            </Link>
            <Link onClick={onScrollBuy} smooth className="navOption">
              Kategorien
            </Link>
            <NavLink to="/register" className="navOption" href="#">
              Verkaufen
            </NavLink>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
