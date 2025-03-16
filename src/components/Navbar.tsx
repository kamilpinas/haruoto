import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { MenuProps } from "../App"

export const Navbar = (props: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null)

  // Add/remove overflow-hidden to body when menu is open
  useEffect(() => {
    if (props.isMenuOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [props.isMenuOpen])

  return (
    <div className="px-6 lg:px-24 w-full flex lg:flex-col flex-row items-center justify-between transition-colors duration-1000 ease-in-out">
      {/* Big Text "HARUOTO" */}
      <Link to="./" className="w-full flex items-end justify-between">
        <h1 className="text-5xl md:text-[7rem] lg:text-9xl xl:text-[12rem] 2xl:text-[13rem] hachi-maru-pop-regular text-start text-primary animate-fade-in">
          HARUOTO
        </h1>
        <h3
          className="hidden lg:block lg:text-5xl xl:text-7xl text-primary"
          style={{
            textOrientation: "upright",
            writingMode: "vertical-lr",
          }}
        >
          春音
        </h3>
      </Link>

      {/* Hamburger Menu (Mobile) */}
      <div
        onClick={() => props.setIsMenuOpen(!props.isMenuOpen)}
        className={`lg:hidden bg-secondary text-primary focus:outline-none cursor-pointer z-20 right-0 ${
          props.isMenuOpen ? "fixed pr-4 mt-5" : "relative mt-3"
        }`}
      >
        {/* Hamburger Icon (☰) or Close Icon (X) */}
        {props.isMenuOpen ? (
          <svg
            className="w-12 h-12"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#CE999B"
              strokeWidth="1"
              strokeLinecap="round"
              className="stroke-primary"
            />
            <path
              d="M6 6L18 18"
              stroke="#CE999B"
              strokeWidth="1"
              strokeLinecap="round"
              className="stroke-primary"
            />
          </svg>
        ) : (
          <svg
            className="w-12 h-12"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="#CE999B"
              strokeWidth="1"
              strokeLinecap="round"
              className="stroke-primary"
            />
            <path
              d="M4 12L20 12"
              stroke="#CE999B"
              strokeWidth="1"
              strokeLinecap="round"
              className="stroke-primary"
            />
            <path
              d="M4 6L20 6"
              stroke="#CE999B"
              strokeWidth="1"
              strokeLinecap="round"
              className="stroke-primary"
            />
          </svg>
        )}
      </div>

      {/* Navigation Links */}
      <nav
        ref={menuRef}
        className={`z-10 w-full fixed lg:static inset-0 bg-secondary lg:bg-transparent text-3xl font-serif text-primary transition-transform duration-500 ease-in-out transform ${
          props.isMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Header for Mobile Menu */}
        <div className="pb-8 pt-4 lg:hidden text-[2.5rem] hachi-maru-pop-regular lg:text-start text-primary animate-fade-in text-center">
          <h1>HARUOTO</h1>
          <h1>春音</h1>
        </div>

        {/* Scrollable Links Container */}
        <div className="pb-8 lg:h-auto h-[calc(100vh-180px)] overflow-y-auto overscroll-contain flex flex-col lg:flex-row justify-start lg:justify-between items-center space-y-8 lg:space-y-8 lg:space-x-8">
          <Link
            to="/menu"
            className="relative group hover:brightness-125 transition-colors duration-500"
            onClick={() => props.setIsMenuOpen(false)}
          >
            MENU
            <span className="absolute left-0 -bottom-2 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-700"></span>
          </Link>
          <Link
            to="/hours-location"
            className="relative group hover:brightness-125 transition-colors duration-500"
            onClick={() => props.setIsMenuOpen(false)}
          >
            HOURS & LOCATION
            <span className="absolute left-0 -bottom-2 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-700"></span>
          </Link>
          <Link
            to="/reservations"
            className="relative group hover:brightness-125 transition-colors duration-500"
            onClick={() => props.setIsMenuOpen(false)}
          >
            RESERVATIONS
            <span className="absolute left-0 -bottom-2 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-700"></span>
          </Link>
          <Link
            to="/events"
            className="relative group hover:brightness-125 transition-colors duration-500"
            onClick={() => props.setIsMenuOpen(false)}
          >
            EVENTS
            <span className="absolute left-0 -bottom-2 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-700"></span>
          </Link>

          <Link
            to="/team"
            className="lg:hidden relative group hover:brightness-125 transition-colors duration-500"
            onClick={() => props.setIsMenuOpen(false)}
          >
            TEAM
            <span className="absolute left-0 -bottom-2 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-700"></span>
          </Link>

          <Link
            to="/about"
            className="lg:hidden relative group hover:brightness-125 transition-colors duration-500"
            onClick={() => props.setIsMenuOpen(false)}
          >
            ABOUT
            <span className="absolute left-0 -bottom-2 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-700"></span>
          </Link>

          <Link
            to="/vouchers"
            className="lg:hidden relative group hover:brightness-125 transition-colors duration-500"
            onClick={() => props.setIsMenuOpen(false)}
          >
            VOUCHERS
            <span className="absolute left-0 -bottom-2 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-700"></span>
          </Link>
          <Link
            to="/newsletter"
            className="lg:hidden relative group hover:brightness-125 transition-colors duration-500"
            onClick={() => props.setIsMenuOpen(false)}
          >
            NEWSLETTER
            <span className="absolute left-0 -bottom-2 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-700"></span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
