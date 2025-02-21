"use client"

import { useState, Fragment } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronsUpDown, Check } from "lucide-react"
import { Combobox, Transition } from "@headlessui/react"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Programs", path: "/programs" },
  { name: "Ishtgroup", path: "/ishtgroup" },
  { name: "Tutoring", path: "/tutoring" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
]

const items = [
  { id: 1, name: "FAQ", path: "/faq" },
  { id: 2, name: "Student Registration", path: "/student-registration" },
  { id: 3, name: "Instructor Page", path: "/instructor" },
  { id: 4, name: "Parent Dashboard", path: "/parent-dashboard" },
  { id: 5, name: "Online Classes", path: "/online-classes" },
  { id: 6, name: "Test Preparation", path: "/test-preparation" },
  { id: 7, name: "Subject Tutoring", path: "/subject-tutoring" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selected, setSelected] = useState(items[0])
  const [query, setQuery] = useState("")
  const pathname = usePathname()

  const filteredItems =
    query === ""
      ? items
      : items.filter((item) =>
          item.name.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")),
        )

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="https://ihstgroup.com/wp-content/uploads/2024/04/cropped-logo_retina.png"
              alt="IHS Logo"
              className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
            />
            <span className="text-2xl font-semibold text-[#183041]">IHS</span>
          </Link>

          {/* Right-side content: Navigation + Combobox */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-sm hover:text-blue-600 transition duration-300 ${
                    pathname === item.path ? "text-blue-600 font-semibold" : "text-[#183041]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Combobox */}
            <div className="w-48">
              <Combobox
                value={selected}
                onChange={(item) => {
                  setSelected(item)
                  window.location.href = item.path
                }}
              >
                <div className="relative mt-1">
                  <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                      displayValue={(item: any) => item.name}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Quick Access"
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronsUpDown className="h-4 w-4 text-gray-400" aria-hidden="true" />
                    </Combobox.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                  >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredItems.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredItems.map((item) => (
                          <Combobox.Option
                            key={item.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active ? "bg-teal-600 text-white" : "text-gray-900"
                              }`
                            }
                            value={item}
                          >
                            {({ selected, active }) => (
                              <>
                                <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                  {item.name}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? "text-white" : "text-teal-600"
                                    }`}
                                  >
                                    <Check className="h-4 w-4" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#183041] focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`hover:text-blue-600 transition duration-300 ${
                  pathname === item.path ? "text-blue-600 font-semibold" : "text-[#183041]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

