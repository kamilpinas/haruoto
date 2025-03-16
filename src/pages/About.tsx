import React from "react"
import aboutHero from "../assets/aboutHero.webp"
import nameOrigin from "../assets/nameOrigin.webp"
import philosophy from "../assets/philosophy.webp"
import ingredients from "../assets/ingridients.webp"

export const About = () => {
  return (
    <>
      <h1 className="text-center text-primary text-4xl lg:text-7xl hachi-maru-pop-regular  animate-slide-in-left duration-700 border-primary border-b-4 pb-2">
        About
      </h1>
      <div className=" text-primary font-sans pb-24">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={aboutHero}
            alt="Traditional Japanese teahouse surrounded by cherry blossoms"
            className="w-full h-full object-cover transform scale-105"
          />
        </div>

        {/* Story Sections */}
        <h1 className="text-primary hachi-maru-pop-regular text-3xl md:text-5xl lg:text-7xl text-center lg:p-8 p-4 backdrop-blur-sm rounded-2xl">
          Our Story of Season's Whisper
        </h1>
        <div className="px-6 py-12 lg:px-24 lg:py-24 space-y-24">
          {/* Name Origin Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group overflow-hidden rounded-3xl aspect-square">
              <img
                src={nameOrigin}
                alt="Ancient Japanese scroll with haruoto calligraphy"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Meaning Behind{" "}
                <span className="text-secondary">Haruoto</span>
              </h2>
              <p className="text-lg leading-relaxed">
                Haruoto (春音) translates to "Spring Sound" - a poetic concept
                from Heian-period literature describing the subtle moment when
                winter's silence gives way to spring's first whispers. This name
                captures our philosophy of attentive listening to nature's
                rhythms and ingredients' inherent music.
              </p>
              <div className="p-6 bg-primary/10 rounded-xl border-l-4 border-secondary">
                <p className="font-serif italic text-xl">
                  "Just as cherry blossoms respond to spring's call, we
                  harmonize with nature's edible symphony."
                </p>
                <p className="mt-4 font-bold">- Chef Hiroshi</p>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="relative group overflow-hidden rounded-3xl aspect-square lg:order-last">
              <img
                src={philosophy}
                alt="Chef's hands arranging seasonal ingredients with care"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Culinary Philosophy
              </h2>
              <p className="text-lg leading-relaxed">
                Born from Tokyo's bustling Tsukiji market and refined through
                California's bounty, Haruoto embodies shun (旬) - the art of
                peak-season cooking. Our menu evolves like a kaiseki calendar:
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex lg:flex-row flex-col items-center gap-3">
                  <span className="font-semibold">January-March:</span>
                  <span>Earth's awakening - mountain vegetables & citrus</span>
                </li>
                <li className="flex lg:flex-row flex-col items-center gap-3">
                  <span className="font-semibold">April-June:</span>
                  <span>Ocean's bloom - sakura shrimp & bamboo shoots</span>
                </li>
                <li className="flex lg:flex-row flex-col items-center gap-3">
                  <span className="font-semibold">July-September:</span>
                  <span>
                    Fire & water - chilled somen & charcoal-grilled ayu
                  </span>
                </li>
                <li className="flex lg:flex-row flex-col items-center gap-3">
                  <span className="font-semibold">October-December:</span>
                  <span>Harvest moon - matsutake mushrooms & persimmon</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group overflow-hidden rounded-3xl aspect-square">
              <img
                src={ingredients}
                alt="Assortment of seasonal produce on wooden counter"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                From Earth to Enamel
              </h2>
              <p className="text-lg leading-relaxed">
                Our ingredients journey from:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-primary/10 rounded-xl transition-all hover:bg-primary/20">
                  <h3 className="text-xl font-bold mb-3">Local Artisans</h3>
                  <p>Organic farms within 50-mile radius</p>
                </div>
                <div className="p-6 bg-primary/10 rounded-xl transition-all hover:bg-primary/20">
                  <h3 className="text-xl font-bold mb-3">Japanese Heritage</h3>
                  <p>Premium imports from family-run producers</p>
                </div>
                <div className="p-6 bg-primary/10 rounded-xl transition-all hover:bg-primary/20">
                  <h3 className="text-xl font-bold mb-3">Sustainable Seas</h3>
                  <p>Line-caught fish from Tsukiji market</p>
                </div>
                <div className="p-6 bg-primary/10 rounded-xl transition-all hover:bg-primary/20">
                  <h3 className="text-xl font-bold mb-3">Foraged Treasures</h3>
                  <p>Wild herbs and mushrooms from local mountains</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
