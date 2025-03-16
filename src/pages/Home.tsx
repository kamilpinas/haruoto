import React from "react"
import { Link } from "react-router-dom"
import about from "../assets/about.webp"
import team from "../assets/team.webp"
import menu from "../assets/menu.webp"
import post0 from "../assets/post5.webp"
import post1 from "../assets/post2.webp"
import post2 from "../assets/post3.webp"
import post3 from "../assets/post5.webp"
import post4 from "../assets/post4.webp"
import post5 from "../assets/post1.webp"

const postArray = [post0, post1, post2, post3, post4, post5]

export const Home = () => {
  return (
    <div className=" text-primary font-sans pb-24 flex flex-col gap-10">
      {/* Main Grid: About Us, Team, Menu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-6 lg:px-24 lg:py-12">
        {/* Menu */}
        <Link
          to="/menu"
          className="group relative overflow-hidden rounded-lg shadow-lg aspect-square"
        >
          <img
            src={menu}
            alt="Menu"
            className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
          />
          {/* Text and Line Container */}
          <div className="border-t-4 absolute inset-x-0 bottom-0 px-4 pb-5 pt-3 transition-all duration-500 bg-black/30 backdrop-blur-sm">
            {/* Text */}
            <span className="text-white hachi-maru-pop-regular text-3xl md:text-4xl lg:text-5xl font-serif transition-all duration-500 group-hover:ps-10">
              menus
            </span>
          </div>
        </Link>

        {/* About Us */}
        <Link
          to="/about"
          className="group relative overflow-hidden rounded-lg shadow-lg aspect-square"
        >
          <img
            src={about}
            alt="About Us"
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
          {/* Text and Line Container */}
          <div className="border-t-4 absolute inset-x-0 bottom-0 px-4 pb-5 pt-3 bg-black/30 backdrop-blur-sm transition-all duration-500">
            {/* Text */}
            <span className="text-white hachi-maru-pop-regular text-3xl md:text-4xl lg:text-5xl font-serif transition-all duration-500 group-hover:ps-10">
              about
            </span>
          </div>
        </Link>

        {/* Our Team */}
        <Link
          to="/team"
          className="group relative overflow-hidden rounded-lg shadow-lg aspect-square"
        >
          <img
            src={team}
            alt="Our Team"
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 group-hover:filter-none"
          />
          {/* Text and Line Container */}
          <div className="border-t-4 absolute inset-x-0 bottom-0 px-4 pb-5 pt-3 bg-black/30 backdrop-blur-sm transition-all duration-500">
            {/* Text */}
            <span className="text-white hachi-maru-pop-regular text-3xl md:text-4xl lg:text-5xl font-serif transition-all duration-500 group-hover:ps-10">
              team
            </span>
          </div>
        </Link>
      </div>
      {/* Instagram-like Post Grid */}
      <div className="bg-primary pb-24">
        <h2 className="py-12 lg:py-24 text-accent text-center hachi-maru-pop-regular text-5xl md:text-6xl lg:text-7xl">
          FOLLOW US{" "}
          <a
            className="transition-colors duration-700 hover:text-secondary"
            href="http://instagram.com"
          >
            @haruoto
          </a>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6 lg:px-24">
          {postArray.map((post, i) => (
            <Link to="http://instagram.com" key={i}>
              <img
                src={post}
                alt={`Post${i}`}
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110 rounded-2xl lg:rounded-[2.5rem]"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
