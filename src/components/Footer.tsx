import React from "react"
import { Link } from "react-router-dom"
import { MenuProps } from "../App"
import { FacebookIcon, InstagramIcon } from "./Icons"

export const Footer = (props: MenuProps) => {
  return (
    <div className="bg-secondary fixed bottom-0 z-10 left-0 w-full px-4 lg:px-8 py-4 flex justify-between items-center text-2xl">
      {/* Left Side: Social Media Links */}
      <div className="lg:flex hidden space-x-4">
        <FacebookIcon />
        <InstagramIcon />
        <span className="text-3xl text-primary">家族の伝統</span>
      </div>

      {/* Right Side: Navigation Links and Reservations Button */}
      <div className="flex items-center lg:justify-around justify-center lg:space-x-8 w-full lg:w-auto">
        {/* Navigation Links */}
        <div className="lg:flex hidden space-x-8">
          <div className="relative group hover:brightness-125 text-primary transition-colors duration-500">
            20th, San Francisco, CA 94107
            <span className="absolute left-0 -bottom-2 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-700"></span>
          </div>
          <Link
            to="/newsletter"
            className="relative group hover:brightness-125 text-primary transition-colors duration-500"
          >
            NEWSLETTER
            <span className="absolute left-0 -bottom-2 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-700"></span>
          </Link>
          <Link
            to="/vouchers"
            className="relative group hover:brightness-125 text-primary transition-colors duration-500"
          >
            VOUCHERS
            <span className="absolute left-0 -bottom-2 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-700"></span>
          </Link>
        </div>

        {props.isMenuOpen && (
          <div className="lg:hidden w-full flex justify-center gap-4">
            <span className="text-md text-primary">20th, SF, CA 94107</span>
            <FacebookIcon />
            <InstagramIcon />
          </div>
        )}

        {/* Reservations Button */}
        {!props.isMenuOpen && (
          <Link
            to="/reservations"
            className="px-6 py-2 text-xl bg-accent text-primary rounded-lg hover:bg-primary hover:text-accent transition-colors duration-700 font-serif shadow-md w-full text-center lg:w-52"
          >
            BOOK NOW
          </Link>
        )}
      </div>
    </div>
  )
}
