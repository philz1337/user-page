import { Menu } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { options } from "./FAQOptions"

export default function FAQs() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-16">
      <h1 className="text-2xl lg:text-3xl font-semibold text-center">
        Häufige Fragen
      </h1>
      <div className="w-10/12 mt-5 lg:w-9/12 flex flex-col items-center">
        {options.map((item, key) => {
          return (
            <Menu
              key={key}
              as="div"
              className="relative inline-block text-left w-full"
            >
              <div>
                <Menu.Button className="w-full p-3 px-5 flex items-center text-left justify-between border-b">
                  <div className="w-full">{item.question}</div>
                  <ChevronDownIcon className="h-5" />
                </Menu.Button>
              </div>

              {/*
                in das Menu.Item ein static, dann sind alle ausgeklappt. Für Korrekturlesen
              */}
              <Menu.Items className="bg-secondary">
                <div className="flex flex-col items-center h-full">
                  <div className="w-full p-5 flex items-center justify-between">
                    {item.answer}
                  </div>
                </div>
              </Menu.Items>
            </Menu>
          )
        })}
      </div>
    </div>
  )
}
