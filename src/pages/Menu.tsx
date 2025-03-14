import { useState } from "react"

export const Menu = () => {
  const [activeTab, setActiveTab] = useState<"dinner" | "sushi" | "drinks">(
    "dinner"
  )

  const renderVeganIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 stroke-accent fill-secondary"
      >
        <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
          <path d="M15 11.063C12.53 13.65 10.059 20 10.059 20S6.529 11.063 3 9"></path>
          <path d="m20.496 5.577l.426 4.424c.276 2.87-1.875 5.425-4.745 5.702c-2.816.27-5.367-1.788-5.638-4.604a5.12 5.12 0 0 1 4.608-5.59l4.716-.454a.58.58 0 0 1 .633.522"></path>
        </g>
      </svg>
    )
  }
  const renderPepperIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 fill-accent"
        viewBox="0 0 256 256"
      >
        <path d="M167.27 40.42A40.06 40.06 0 0 0 128 8a8 8 0 0 0 0 16a24 24 0 0 1 22.85 16.66A64.08 64.08 0 0 0 96 104c0 46.75-25.75 78-76.53 93a16 16 0 0 0 1.77 31.13A265 265 0 0 0 66.75 232c40.78 0 86.16-9.15 117.53-35.46C210.64 174.44 224 143.3 224 104a64.07 64.07 0 0 0-56.73-63.58M160 56a48.07 48.07 0 0 1 45.37 32.37L192 95l-28.42-14.17a8 8 0 0 0-7.16 0L128 95l-13.37-6.68A48.08 48.08 0 0 1 160 56m14 128.3c-18 15.07-43.6 25.26-74.12 29.47a254 254 0 0 1-75.88-1.4c57.23-16.87 87.63-54 88-107.42l12.44 6.22a8 8 0 0 0 7.16 0L160 96.93l28.42 14.21a8 8 0 0 0 7.16 0l12.41-6.2c-.21 33.9-11.64 60.6-33.99 79.35Z"></path>
      </svg>
    )
  }

  // Sample menu data
  const dinnerMenu = {
    ramens: [
      {
        id: 1,
        name: "Tonkotsu Ramen",
        description:
          "Creamy pork bone broth with chashu, green onions, and soft-boiled egg.",
        price: "$14.00",
      },
      {
        id: 2,
        name: "Shoyu Ramen",
        description:
          "Soy sauce-based broth with bamboo shoots, nori, and sliced pork.",
        price: "$13.00",
      },
      {
        id: 3,
        name: "Miso Ramen",
        description:
          "Rich miso-infused broth with ground pork, corn, and butter.",
        price: "$14.50",
      },
      {
        id: 4,
        name: "Spicy Tantanmen",
        description:
          "Sesame-based broth with ground pork, chili oil, and bok choy.",
        price: "$15.00",
        spicy: true,
      },
      {
        id: 5,
        name: "Shio Ramen",
        description:
          "Light salt-based broth with fish cake, scallions, and nori.",
        price: "$12.50",
      },
      {
        id: 6,
        name: "Vegetarian Ramen",
        description:
          "Miso broth with tofu, mushrooms, and seasonal vegetables.",
        price: "$13.50",
        vegan: true,
      },
    ],
    noodles: [
      {
        id: 1,
        name: "Yakisoba",
        description:
          "Stir-fried wheat noodles with pork, cabbage, and bonito flakes.",
        price: "$12.00",
      },
      {
        id: 2,
        name: "Udon Tempura",
        description:
          "Thick udon noodles in broth, topped with crispy tempura shrimp.",
        price: "$13.50",
      },
      {
        id: 3,
        name: "Spicy Garlic Noodles",
        description:
          "Wok-fried egg noodles with garlic, chili, and green onions.",
        price: "$11.50",
        spicy: true,
      },
      {
        id: 4,
        name: "Beef Yaki Udon",
        description: "Thick udon stir-fried with sliced beef and soy glaze.",
        price: "$14.00",
      },
      {
        id: 5,
        name: "Seafood Ramen",
        description: "Mixed seafood in a soy-based broth with fresh greens.",
        price: "$15.00",
      },
      {
        id: 6,
        name: "Curry Udon",
        description: "Japanese curry sauce over thick udon noodles and beef.",
        price: "$13.00",
        spicy: true,
      },
      {
        id: 7,
        name: "Cold Soba",
        description: "Chilled buckwheat noodles served with dipping sauce.",
        price: "$10.50",
        vegan: true,
      },
    ],
    riceBowls: [
      {
        id: 1,
        name: "Gyudon",
        description:
          "Thinly sliced beef simmered in sweet soy sauce over rice.",
        price: "$12.00",
      },
      {
        id: 2,
        name: "Katsudon",
        description: "Crispy pork cutlet with egg and onions over rice.",
        price: "$13.50",
      },
      {
        id: 3,
        name: "Unadon",
        description: "Grilled eel glazed with sweet soy sauce over rice.",
        price: "$15.00",
      },
      {
        id: 4,
        name: "Teriyaki Chicken Don",
        description: "Grilled chicken in teriyaki sauce over steamed rice.",
        price: "$12.50",
      },
      {
        id: 5,
        name: "Vegetable Donburi",
        description: "Rice bowl topped with seasonal vegetables and tofu.",
        price: "$11.50",
        vegan: true,
      },
    ],
  }

  const sushiMenu = {
    nigiri: [
      {
        id: 1,
        name: "Salmon Nigiri",
        description: "Fresh salmon slice over seasoned rice.",
        price: "$6.50",
      },
      {
        id: 2,
        name: "Tuna Nigiri",
        description: "Sliced tuna on top of sushi rice.",
        price: "$7.00",
      },
      {
        id: 3,
        name: "Ebi Nigiri",
        description: "Cooked shrimp over sushi rice.",
        price: "$6.00",
      },
      {
        id: 4,
        name: "Hamachi Nigiri",
        description: "Yellowtail fish slice over rice.",
        price: "$7.50",
      },
      {
        id: 5,
        name: "Unagi Nigiri",
        description: "Grilled eel glazed with sweet sauce over rice.",
        price: "$7.50",
      },
      {
        id: 6,
        name: "Ikura Nigiri",
        description: "Salmon roe on sushi rice, wrapped in nori.",
        price: "$8.00",
      },
      {
        id: 7,
        name: "Tamago Nigiri",
        description: "Sweet layered omelet over sushi rice.",
        price: "$5.50",
        vegetarian: true,
      },
    ],
    rolls: [
      {
        id: 1,
        name: "California Roll",
        description: "Crab, avocado, and cucumber wrapped in sushi rice.",
        price: "$10.00",
      },
      {
        id: 2,
        name: "Spicy Tuna Roll",
        description: "Tuna, spicy mayo, and cucumber wrapped in rice.",
        price: "$11.00",
        spicy: true,
      },
      {
        id: 3,
        name: "Dragon Roll",
        description: "Eel, avocado, and cucumber topped with eel sauce.",
        price: "$12.50",
      },
      {
        id: 4,
        name: "Rainbow Roll",
        description: "Assorted sashimi layered over a California roll.",
        price: "$13.00",
      },
      {
        id: 5,
        name: "Tempura Roll",
        description: "Shrimp tempura with avocado and spicy mayo.",
        price: "$12.00",
        spicy: true,
      },
      {
        id: 6,
        name: "Philadelphia Roll",
        description: "Salmon, cream cheese, and cucumber.",
        price: "$11.50",
      },
    ],
    sashimi: [
      {
        id: 1,
        name: "Salmon Sashimi",
        description: "Freshly sliced salmon, served raw.",
        price: "$12.00",
      },
      {
        id: 2,
        name: "Tuna Sashimi",
        description: "Sliced raw tuna, served fresh.",
        price: "$13.00",
      },
      {
        id: 3,
        name: "Yellowtail Sashimi",
        description: "Thinly sliced hamachi, served with soy sauce.",
        price: "$14.00",
      },
      {
        id: 4,
        name: "Octopus Sashimi",
        description: "Tender slices of octopus, served chilled.",
        price: "$12.50",
      },
      {
        id: 5,
        name: "Mackerel Sashimi",
        description: "Freshly cut mackerel, lightly cured.",
        price: "$13.50",
      },
    ],
  }

  const drinksMenu = {
    wines: [
      {
        id: 1,
        name: "Sauvignon Blanc",
        description: "Crisp and refreshing white wine.",
        price: "$8.00",
      },
      {
        id: 2,
        name: "Chardonnay",
        description: "Rich and buttery white wine.",
        price: "$9.00",
      },
      {
        id: 3,
        name: "Pinot Noir",
        description: "Smooth and light-bodied red wine.",
        price: "$10.00",
      },
      {
        id: 4,
        name: "Merlot",
        description: "Medium-bodied red wine with fruity notes.",
        price: "$11.00",
      },
      {
        id: 5,
        name: "Cabernet Sauvignon",
        description: "Bold red wine with deep flavors.",
        price: "$12.00",
      },
      {
        id: 6,
        name: "Rosé",
        description: "Light and fruity pink wine.",
        price: "$9.50",
      },
      {
        id: 7,
        name: "Sparkling Sake",
        description: "Effervescent sake with a light sweetness.",
        price: "$10.50",
      },
    ],
    cocktails: [
      {
        id: 1,
        name: "Tokyo Mule",
        description: "Sake, ginger beer, and lime.",
        price: "$10.00",
      },
      {
        id: 2,
        name: "Matcha Martini",
        description: "Vodka, matcha, and vanilla syrup.",
        price: "$11.00",
      },
      {
        id: 3,
        name: "Yuzu Sour",
        description: "Whiskey, yuzu juice, and simple syrup.",
        price: "$12.00",
      },
      {
        id: 4,
        name: "Plum Wine Spritz",
        description: "Plum wine, soda, and orange peel.",
        price: "$10.50",
      },
      {
        id: 5,
        name: "Sake Mojito",
        description: "Sake, mint, and lime.",
        price: "$11.50",
      },
    ],
    hotBeverages: [
      {
        id: 1,
        name: "Green Tea",
        description: "Traditional Japanese hot tea.",
        price: "$4.00",
        vegan: true,
      },
      {
        id: 2,
        name: "Matcha Latte",
        description: "Whisked matcha with steamed milk.",
        price: "$5.00",
      },
      {
        id: 3,
        name: "Hojicha",
        description: "Roasted green tea with nutty flavors.",
        price: "$4.50",
        vegan: true,
      },
      {
        id: 4,
        name: "Black Sesame Latte",
        description: "Creamy black sesame with milk.",
        price: "$5.50",
      },
    ],
  }

  return (
    <>
      <h1 className="text-center text-primary text-5xl lg:text-7xl hachi-maru-pop-regular mb-12 animate-slide-in-left duration-700">
        ·•— Menu —•·
      </h1>
      <div className="font-sans px-6 py-6 lg:px-24">
        {/* Content Based on Active Tab */}

        <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4 animate-slide-in-left duration-700 ">
          <div
            onClick={() => setActiveTab("dinner")}
            className={`tracking-widest w-full text-center cursor-pointer text-2xl font-serif px-6 py-3 transition-all duration-700 rounded-lg  ${
              activeTab === "dinner"
                ? "lg:-translate-y-4 drop-shadow-xl bg-primary text-accent"
                : "lg:translate-y-0 lg:hover:-translate-y-1 hover:bg-primary hover:text-accent bg-accent text-primary"
            }`}
          >
            DINNER
          </div>
          <div
            onClick={() => setActiveTab("sushi")}
            className={`tracking-widest w-full text-center cursor-pointer text-2xl font-serif px-6 py-3  transition-all duration-700 rounded-lg ${
              activeTab === "sushi"
                ? "lg:-translate-y-4 drop-shadow-xl bg-primary text-accent"
                : "lg:translate-y-0 lg:hover:-translate-y-1 hover:bg-primary hover:text-accent bg-accent text-primary"
            }`}
          >
            SUSHI
          </div>
          <div
            onClick={() => setActiveTab("drinks")}
            className={`tracking-widest w-full text-center cursor-pointer text-2xl font-serif px-6 py-3  transition-all duration-700 rounded-lg ${
              activeTab === "drinks"
                ? "lg:-translate-y-4 drop-shadow-xl bg-primary text-accent"
                : "lg:translate-y-0 lg:hover:-translate-y-1 hover:bg-primary hover:text-accent bg-accent text-primary"
            }`}
          >
            DRINKS
          </div>
        </div>
      </div>
      <div className="bg-secondary text-primary font-sans px-6 lg:px-24 flex flex-col justify-center lg:flex-row">
        <div className="w-full bg-black/15 rounded-lg p-12">
          {activeTab === "dinner" && (
            <div className="animate-slide-in-left duration-700">
              {/* Ramen, Noodles, and Rice Bowls in 3 Columns */}
              <div className="flex flex-col lg:flex-row gap-16">
                {/* Ramen Column */}
                <div className="flex-1">
                  <h2 className="text-4xl hachi-maru-pop-regular pb-2 mb-12 border-primary border-b-4 flex justify-between">
                    <span>ramen</span> <span>拉麺</span>
                  </h2>
                  <div className="space-y-4">
                    {dinnerMenu.ramens.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <div>
                          <h3 className="text-xl font-serif">
                            <div className="flex gap-2">
                              <span>{item.name}</span>
                              <span>{item.vegan && renderVeganIcon()}</span>
                              <span>{item.spicy && renderPepperIcon()}</span>
                            </div>
                          </h3>
                          <p className="text-sm text-gray-300">
                            {item.description}
                          </p>
                        </div>
                        <p className="text-2xl font-bold">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Noodles Column */}
                <div className="flex-1">
                  <h2 className="text-4xl hachi-maru-pop-regular pb-2 mb-12 border-primary border-b-4 flex justify-between">
                    <span>noodles</span>
                    <span> 麺</span>
                  </h2>
                  <div className="space-y-4">
                    {dinnerMenu.noodles.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <div>
                          <h3 className="text-xl font-serif">
                            <div className="flex gap-2">
                              <span>{item.name}</span>
                              <span>{item.vegan && renderVeganIcon()}</span>
                              <span>{item.spicy && renderPepperIcon()}</span>
                            </div>
                          </h3>
                          <p className="text-sm text-gray-300">
                            {item.description}
                          </p>
                        </div>
                        <p className="text-2xl font-bold">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rice Bowls Column */}
                <div className="flex-1">
                  <h2 className="text-4xl hachi-maru-pop-regular pb-2 mb-12 border-primary border-b-4 flex justify-between">
                    <span>rice bowls </span>
                    <span>丼</span>
                  </h2>
                  <div className="space-y-4">
                    {dinnerMenu.riceBowls.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <div>
                          <h3 className="text-xl font-serif">
                            <div className="flex gap-2">
                              <span>{item.name}</span>
                              <span>{item.vegan && renderVeganIcon()}</span>
                            </div>
                          </h3>
                          <p className="text-sm text-gray-300">
                            {item.description}
                          </p>
                        </div>
                        <p className="text-2xl font-bold">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "sushi" && (
            <div className="animate-slide-in-left duration-700">
              {/* Nigiri, Rolls, and Sashimi in 3 Columns */}
              <div className="flex flex-col lg:flex-row gap-16">
                {/* Nigiri Column */}
                <div className="flex-1">
                  <h2 className="text-4xl hachi-maru-pop-regular pb-2 mb-12 border-primary border-b-4 flex justify-between">
                    <span>nigiri</span>
                    <span> にぎり</span>
                  </h2>
                  <div className="space-y-4">
                    {sushiMenu.nigiri.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <div>
                          <h3 className="text-xl font-serif">
                            <div className="flex gap-2">
                              <span>{item.name}</span>
                            </div>
                          </h3>
                          <p className="text-sm text-gray-300">
                            {item.description}
                          </p>
                        </div>
                        <p className="text-2xl font-bold">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rolls Column */}
                <div className="flex-1">
                  <h2 className="text-4xl hachi-maru-pop-regular pb-2 mb-12 border-primary border-b-4 flex justify-between">
                    <span>rolls </span>
                    <span>ロール</span>
                  </h2>
                  <div className="space-y-4">
                    {sushiMenu.rolls.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <div>
                          <h3 className="text-xl font-serif">
                            <div className="flex gap-2">
                              <span>{item.name}</span>
                              <span>{item.spicy && renderPepperIcon()}</span>
                            </div>
                          </h3>
                          <p className="text-sm text-gray-300">
                            {item.description}
                          </p>
                        </div>
                        <p className="text-2xl font-bold">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sashimi Column */}
                <div className="flex-1">
                  <h2 className="text-4xl hachi-maru-pop-regular pb-2 mb-12 border-primary border-b-4 flex justify-between">
                    <span>sashimi</span>
                    <span> 刺身</span>
                  </h2>
                  <div className="space-y-4">
                    {sushiMenu.sashimi.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <div>
                          <h3 className="text-xl font-serif">
                            <div className="flex gap-2">
                              <span>{item.name}</span>
                            </div>
                          </h3>
                          <p className="text-sm text-gray-300">
                            {item.description}
                          </p>
                        </div>
                        <p className="text-2xl font-bold">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "drinks" && (
            <div className="animate-slide-in-left duration-700">
              {/* Wines, Cocktails, and Hot Beverages in 3 Columns */}
              <div className="flex flex-col lg:flex-row gap-16">
                {/* Wines Column */}
                <div className="flex-1">
                  <h2 className="text-4xl hachi-maru-pop-regular pb-2 mb-12 border-primary border-b-4 flex justify-between">
                    <span>wines </span>
                    <span>イン</span>
                  </h2>
                  <div className="space-y-4">
                    {drinksMenu.wines.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <div>
                          <h3 className="text-xl font-serif">
                            <div className="flex gap-2">
                              <span>{item.name}</span>
                            </div>
                          </h3>
                          <p className="text-sm text-gray-300">
                            {item.description}
                          </p>
                        </div>
                        <p className="text-2xl font-bold">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cocktails Column */}
                <div className="flex-1">
                  <h2 className="text-4xl hachi-maru-pop-regular pb-2 mb-12 border-primary border-b-4 flex justify-between">
                    <span>cocktails</span>
                    <span>飲み物</span>
                  </h2>
                  <div className="space-y-4">
                    {drinksMenu.cocktails.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <div>
                          <h3 className="text-xl font-serif">
                            <div className="flex gap-2">
                              <span>{item.name}</span>
                            </div>
                          </h3>
                          <p className="text-sm text-gray-300">
                            {item.description}
                          </p>
                        </div>
                        <p className="text-2xl font-bold">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hot Beverages Column */}
                <div className="flex-1">
                  <h2 className="text-4xl hachi-maru-pop-regular pb-2 mb-12 border-primary border-b-4 flex justify-between">
                    <span>hot drinks</span>
                    <span> お湯</span>
                  </h2>
                  <div className="space-y-4">
                    {drinksMenu.hotBeverages.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <div>
                          <h3 className="text-xl font-serif">
                            <div className="flex gap-2">
                              <span>{item.name}</span>
                            </div>
                          </h3>
                          <p className="text-sm text-gray-300">
                            {item.description}
                          </p>
                        </div>
                        <p className="text-2xl font-bold">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
