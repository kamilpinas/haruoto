import { useState } from "react"

export const Events = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  // Mocked event data (mostly on weekends)
  const events = [
    {
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 5),
      title: "SUSHI NIGHT",
      description:
        "Join us for a special sushi night featuring a selection of fresh, hand-crafted sushi prepared by our top chefs. Enjoy an elegant dining experience with live traditional Japanese music to set the ambiance. Whether you're a sushi connoisseur or a first-time explorer, there's something for everyone.",
    },
    {
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 12),
      title: "RAMEN FESTIVAL",
      description:
        "Taste a variety of authentic ramen dishes, each representing different regions of Japan. From rich, creamy Tonkotsu to light and refreshing Shoyu ramen, this festival offers an unforgettable journey through the world of ramen. Meet expert ramen chefs and learn about the intricate process of crafting the perfect bowl.",
    },
    {
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 22),
      title: "SAKE TASTING",
      description:
        "Explore the world of sake with our expert sommelier. Sample a carefully curated selection of premium Japanese sake, from dry to sweet, hot to cold. Learn about the history, brewing techniques, and food pairings that bring out the best flavors in each variety. Perfect for beginners and sake enthusiasts alike.",
    },
    {
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 24),
      title: "JAPANESE TEA CEREMONY",
      description:
        "Experience the art of the traditional Japanese tea ceremony, a ritual of mindfulness and hospitality. A master tea host will guide you through the graceful steps of preparing and enjoying matcha tea, explaining the philosophy and etiquette behind this centuries-old practice. A truly peaceful and cultural experience.",
    },
    {
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 8),
      title: "KARAOKE NIGHT",
      description:
        "Sing your heart out with friends and family at our lively karaoke night! Choose from a vast selection of Japanese and international songs, and take the stage in an exciting, high-energy atmosphere. Whether you're a professional singer or just in it for fun, this night is all about great music, laughter, and unforgettable memories.",
    },
    {
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 14),
      title: "SUSHI MAKING WORKSHOP",
      description:
        "Learn how to make sushi from our expert master chefs in this hands-on workshop. From selecting the freshest ingredients to perfecting your rolling technique, you'll gain valuable skills and knowledge. Enjoy your creations at the end of the session and take home the confidence to prepare sushi yourself!",
    },
    {
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 21),
      title: "MATCHA TASTING",
      description:
        "Discover the rich, earthy flavors of premium Japanese matcha tea. This guided tasting session will introduce you to different grades of matcha, how it's grown and harvested, and the various ways it can be enjoyed. Learn to appreciate the subtle nuances of this beloved green tea while pairing it with traditional sweets.",
    },
    {
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 23),
      title: "JAPANESE DESSERT NIGHT",
      description:
        "Indulge in a variety of traditional Japanese desserts, from fluffy matcha soufflé pancakes to delicate mochi and creamy dorayaki. Experience the perfect balance of sweetness and artistry that defines Japanese confectionery. Each dessert will be paired with a complementary tea or sake to enhance the flavors.",
    },
  ]

  // Get the current month and year
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  // Generate the days of the month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  // Check if a date has an event
  const hasEvent = (date: Date) => {
    return events.some(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    )
  }

  // Handle date selection
  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
  }

  return (
    <>
      <h1 className="text-center text-primary text-4xl lg:text-7xl hachi-maru-pop-regular  animate-slide-in-left duration-700 border-primary border-b-4 pb-2">
        Events
      </h1>
      <div className="bg-secondary text-primary font-sans py-12 px-6 lg:px-24">
        <div className="mx-auto flex flex-col lg:flex-row gap-8">
          {/* Calendar */}
          <div className="bg-black/15 p-4 rounded-lg lg:w-1/2 w-full animate-slide-in-left">
            <h2 className="text-3xl hachi-maru-pop-regular mb-8 text-center">
              {new Intl.DateTimeFormat("en-US", {
                month: "long",
                year: "numeric",
              }).format(currentDate)}
            </h2>
            <div className="grid grid-cols-7 gap-2">
              {/* Weekday Headers */}
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center text-md lg:text-2xl font-serif text-primary/70"
                >
                  {day}
                </div>
              ))}

              {/* Empty Days (before the first day of the month) */}
              {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                <div key={`empty-${index}`} className="p-4" />
              ))}

              {/* Days of the Month */}
              {Array.from({ length: daysInMonth }).map((_, index) => {
                const date = new Date(currentYear, currentMonth, index + 1)
                const isToday =
                  date.getDate() === currentDate.getDate() &&
                  date.getMonth() === currentDate.getMonth()
                const isEventDay = hasEvent(date)

                return (
                  <button
                    key={index}
                    onClick={() => handleDateClick(date)}
                    className={`p-2 text-xl rounded-lg text-center transition-all duration-700 ${
                      selectedDate?.toISOString() === date?.toISOString() &&
                      "bg-black/15"
                    } ${
                      isToday
                        ? "bg-primary text-secondary scale-105 font-bold"
                        : isEventDay
                        ? "bg-accent text-primary hover:bg-primary hover:text-accent hover:scale-105"
                        : "hover:bg-black/15 hover:scale-105"
                    }`}
                  >
                    {index + 1}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Event Details */}
          {selectedDate && (
            <div className="bg-black/15 p-8 rounded-lg lg:w-1/2 w-full animate-slide-in-right">
              <h2 className="text-2xl lg:text-4xl hachi-maru-pop-regular mb-6">
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "long",
                }).format(selectedDate)}
              </h2>
              {events
                .filter(
                  (event) =>
                    event.date.getDate() === selectedDate.getDate() &&
                    event.date.getMonth() === selectedDate.getMonth() &&
                    event.date.getFullYear() === selectedDate.getFullYear()
                )
                .map((event, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="lg:text-3xl text-lg font-bold font-serif">
                      {event.title}
                    </h3>
                    <p className="text-md lg:text-xl">{event.description}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
