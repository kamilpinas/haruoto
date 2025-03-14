import React from "react"
import team from "../assets/team.webp"
import chef1 from "../assets/chef1.webp"
import chef2 from "../assets/chef2.webp"
import manager from "../assets/manager.webp"
import bartender1 from "../assets/bartender1.webp"
import bartender2 from "../assets/bartender2.webp"
import dessert from "../assets/dessert.webp"

const teamMembers = [
  {
    img: chef1,
    alt: "Head Chef Hiroshi preparing sushi",
    name: "Hiroshi Tanaka",
    role: "Head Chef",
    bio: "Master of traditional Edomae sushi with 20 years experience",
  },
  {
    img: chef2,
    alt: "Sous Chef Aiko plating delicate desserts",
    name: "Aiko Nakamura",
    role: "Sous Chef",
    bio: "Specialist in kaiseki cuisine and Japanese-French fusion",
  },
  {
    img: manager,
    alt: "Manager Kenji greeting guests at entrance",
    name: "Kenji Yamamoto",
    role: "General Manager",
    bio: "Omotenashi expert ensuring exceptional guest experiences",
  },
  {
    img: bartender1,
    alt: "Mixologist Yumi crafting signature cocktails",
    name: "Yumi Sato",
    role: "Head Mixologist",
    bio: "Creator of our modern Japanese-inspired cocktail program",
  },
  {
    img: bartender2,
    alt: "Lead Server Mari presenting wine selection",
    name: "Mari Kobayashi",
    role: "Lead Server",
    bio: "Sake sommelier and dining experience coordinator",
  },
  {
    img: dessert,
    alt: "Entire Haruoto team gathered in kitchen",
    name: "Our Ohana",
    role: "The Haruoto Family",
    bio: "Dedicated team passionate about authentic Japanese hospitality",
  },
]

export const Team = () => {
  return (
    <>
      <h1 className="text-center text-primary text-5xl lg:text-7xl hachi-maru-pop-regular mb-12 animate-slide-in-left duration-700">
        ·•— Team —•·
      </h1>
      <div className=" text-primary font-sans pb-24">
        {/* Hero Section */}
        <div className="relative h-[60vh]">
          <img
            src={team}
            alt="Entire Haruoto team smiling in restaurant dining room"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12 lg:px-24 lg:py-24">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl aspect-square transition-all duration-500 hover:shadow-2xl"
            >
              <img
                src={member.img}
                alt={member.alt}
                className="w-full aspect-square h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-primary brightness-110 transform transition-transform duration-500 group-hover:-translate-y-4">
                  <h3 className="text-3xl font-bold mb-1">{member.name}</h3>
                  <p className="text-lg   mb-3">{member.role}</p>
                  <p className="opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-sm lg:text-base">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
