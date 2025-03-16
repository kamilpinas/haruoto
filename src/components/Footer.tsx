import React from "react"
import { Link } from "react-router-dom"
import { MenuProps } from "../App"

export const Footer = (props: MenuProps) => {
  return (
    <div className="bg-secondary fixed bottom-0 z-10 left-0 w-full px-8 py-4 flex justify-between items-center text-2xl">
      {/* Left Side: Social Media Links */}
      <div className="lg:flex hidden space-x-4">
        <a
          href="https://instagram.com"
          aria-label="Instagram page reference, out social media page with newest events and images of our team and menu."
          target="_blank"
          rel="noopener noreferrer"
          className=" text-primary hover:text-accent transition-colors duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          aria-label="Facebook page reference, out social media page with newest events and informations"
          rel="noopener noreferrer"
          className="text-primary hover:text-accent transition-colors duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </a>
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
