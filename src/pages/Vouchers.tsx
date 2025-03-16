import { useEffect, useRef, useState } from "react"

export const Vouchers = () => {
  const [selectedVoucher, setSelectedVoucher] = useState<number | null>(null)
  const [savedScrollPosition, setSavedScrollPosition] = useState(0)
  const detailsRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleVoucherClick = (id: number) => {
    if (!selectedVoucher) {
      // Save current scroll position only when opening
      setSavedScrollPosition(
        window.scrollY || document.documentElement.scrollTop
      )
    }
    setSelectedVoucher((prev) => (prev === id ? null : id))
  }

  useEffect(() => {
    if (selectedVoucher && detailsRef.current) {
      // Scroll to details with smooth animation
      detailsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    } else if (!selectedVoucher && savedScrollPosition) {
      // Restore previous scroll position
      window.scrollTo({
        top: savedScrollPosition,
        behavior: "smooth",
      })
    }
  }, [selectedVoucher, savedScrollPosition])

  // Mocked voucher data
  const vouchers = [
    {
      id: 1,
      title: "Sushi Lovers Bundle",
      description:
        "Indulge in the ultimate sushi experience with a premium sushi platter for two, featuring an assortment of the freshest sashimi, nigiri, and specialty rolls. Paired with a bottle of high-quality sake, this bundle is perfect for a romantic date night or a special celebration. Enjoy the delicate flavors of authentic Japanese cuisine in a beautifully presented platter.",
      price: "$50",
      shortDesc: "Enjoy a premium sushi platter for two with a bottle of sake.",
      validity: "Valid until December 31, 2023",
    },
    {
      id: 2,
      title: "Ramen Feast",
      description:
        "Warm up with a hearty ramen feast! This voucher includes two steaming bowls of ramen, customizable with your choice of broth (Tonkotsu, Shoyu, or Miso) and toppings, plus a side of crispy, pan-fried gyoza. Whether you're craving rich, savory flavors or a comforting bowl of noodles, this deal is a must for ramen lovers.",
      price: "$30",
      shortDesc:
        "Get two bowls of ramen and a side of gyoza for a discounted price",
      validity: "Valid until December 31, 2023",
    },
    {
      id: 3,
      title: "Dessert Delight",
      description:
        "Satisfy your sweet tooth with a handpicked selection of traditional Japanese desserts. This bundle includes freshly made mochi, fluffy matcha soufflé pancakes, dorayaki filled with sweet red bean paste, and a delicate serving of warabi mochi. Paired with a soothing cup of ceremonial-grade matcha tea, this is the perfect treat for dessert lovers.",
      price: "$20",
      shortDesc: "Indulge in a selection of Japanese desserts with matcha tea.",
      validity: "Valid until December 31, 2023",
    },
    {
      id: 4,
      title: "Sake Tasting Experience",
      description:
        "Embark on a journey through Japan’s finest sake selections with our exclusive tasting experience. Guided by an expert sommelier, you'll sample a curated selection of premium sake, ranging from dry to sweet and sparkling varieties. Learn about sake brewing techniques, flavor profiles, and food pairings while savoring each sip in an intimate setting.",
      price: "$40",
      shortDesc:
        "Explore a curated selection of premium sake with our sommelier.",
      validity: "Valid until December 31, 2023",
    },
    {
      id: 5,
      title: "Teppanyaki Dining Experience",
      description:
        "Enjoy a front-row seat to an exhilarating live teppanyaki show, where our skilled chefs prepare a multi-course meal right before your eyes. This dining experience includes premium cuts of wagyu beef, fresh seafood, and perfectly grilled vegetables, all cooked to perfection on a sizzling iron plate. Paired with a house-made dipping sauce and miso soup, this is an unforgettable meal for food lovers.",
      price: "$70",
      shortDesc:
        "Teppanyaki show. This dining experience includes premium cuts of wagyu beef",
      validity: "Valid until December 31, 2023",
    },
    {
      id: 6,
      title: "Omakase Chef’s Tasting",
      description:
        "Elevate your dining experience with an exquisite omakase menu curated by our master chef. This multi-course meal features the finest seasonal ingredients, hand-selected and prepared to highlight their natural flavors. From delicate sashimi to perfectly crafted sushi and innovative Japanese fusion dishes, each bite is a masterpiece. Let the chef surprise and delight you with an unforgettable culinary journey.",
      price: "$100",
      shortDesc:
        "Elevate your dining experience with an exquisite omakase menu curated by our master chef.",
      validity: "Valid until December 31, 2023",
    },
  ]

  return (
    <div ref={containerRef}>
      <h1 className="text-center text-primary text-4xl md:text-5xl lg:text-7xl hachi-maru-pop-regular animate-slide-in-left duration-700 border-primary border-b-4 pb-2">
        Vouchers
      </h1>
      <div className="animate-slide-in-left bg-secondary text-primary font-sans py-12 px-6 lg:px-24">
        <div className="max-w-7xlxl mx-auto">
          {/* Voucher Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vouchers.map((voucher) => (
              <div
                key={voucher.id}
                onClick={() => handleVoucherClick(voucher.id)}
                className={`bg-black/15 p-6 rounded-lg cursor-pointer transition-all duration-700 hover:scale-105 ${
                  selectedVoucher === voucher.id ? "ring-2 ring-primary" : ""
                }`}
              >
                <h2 className="text-2xl hachi-maru-pop-regular mb-4 border-primary border-b-4 pb-2 flex justify-between">
                  {voucher.title}
                  <span className="font-bold">{voucher.price}</span>
                </h2>

                <p className="text-lg mb-4">{voucher.shortDesc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary/70">
                    {voucher.validity}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Voucher Details */}
          {selectedVoucher && (
            <div
              ref={detailsRef}
              className="mt-8 bg-black/15 p-8 rounded-lg animate-fade-in"
            >
              <h2 className="text-3xl hachi-maru-pop-regular mb-6 flex justify-between">
                {vouchers.find((v) => v.id === selectedVoucher)?.title}

                <span className="font-bold">
                  {vouchers.find((v) => v.id === selectedVoucher)?.price}
                </span>
              </h2>
              <p className="text-md mb-6">
                {vouchers.find((v) => v.id === selectedVoucher)?.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-primary/70">
                  {vouchers.find((v) => v.id === selectedVoucher)?.validity}
                </span>
              </div>
              <button
                onClick={() => setSelectedVoucher(null)}
                className={
                  "tracking-widest w-full text-center cursor-pointer text-2xl font-serif px-6 py-3  transition-all duration-700 rounded-lg hover:bg-primary hover:text-accent bg-accent text-primary"
                }
              >
                CLOSE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
