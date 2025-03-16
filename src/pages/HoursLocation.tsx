import { useEffect, useState } from "react"

export const HoursLocation = () => {
  const [currentDay, setCurrentDay] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState("")
  const [text, setText] = useState("")

  useEffect(() => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    const today = new Date().getDay()
    setCurrentDay(days[today])
  }, [])

  return (
    <>
      <h1 className="text-center text-primary text-4xl md:text-5xl lg:text-7xl hachi-maru-pop-regular animate-slide-in-left duration-700 border-primary border-b-4 pb-2 mb-4">
        Hours & Location
      </h1>
      <div className="bg-secondary text-primary font-sans px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Opening Hours */}
          <div className="lg:w-1/2 flex flex-col gap-8 animate-slide-in-left duration-700">
            <div className="bg-black/15 p-8 rounded-lg transition-all duration-700">
              <h2 className="text-3xl hachi-maru-pop-regular mb-6 relative group">
                opening hours
                <span className="absolute left-0 -bottom-2 h-0.5 bg-primary w-full transition-all duration-700"></span>
              </h2>
              <ul className="text-xl">
                {[
                  { day: "Monday", hours: "Closed" },
                  { day: "Tuesday", hours: "5:00 PM - 10:00 PM" },
                  { day: "Wednesday", hours: "5:00 PM - 10:00 PM" },
                  { day: "Thursday", hours: "5:00 PM - 10:00 PM" },
                  { day: "Friday", hours: "4:00 PM - 11:00 PM" },
                  { day: "Saturday", hours: "4:00 PM - 11:00 PM" },
                  { day: "Sunday", hours: "12:00 PM - 8:00 PM" },
                ].map(({ day, hours }) => (
                  <li
                    key={day}
                    className={`flex justify-between lg:flex-row flex-col items-center p-4 rounded-lg transition-all duration-700 ${
                      currentDay && day.includes(currentDay)
                        ? "bg-primary text-secondary scale-105 font-semibold"
                        : "hover:bg-accent/40"
                    }`}
                  >
                    <span className="font-serif">{day}</span>
                    <span className="text-lg">{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Map & Find Us */}
          <div className="lg:w-1/2 flex flex-col gap-8 animate-slide-in-right duration-700">
            <div className="bg-black/15 p-8 rounded-lg transition-all duration-700 ">
              <h2 className="text-3xl hachi-maru-pop-regular mb-6 relative group">
                find us
                <span className="absolute left-0 -bottom-2 h-0.5 bg-primary w-full transition-all duration-700"></span>
              </h2>
              <div className="space-y-4 text-xl">
                <p className="font-serif">Street, San Francisco, CA 94107</p>
                <p className="font-serif">+81 3-6406-0808</p>
                <p className="font-serif">info@haruoto.com</p>
                <div
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-2 bg-accent text-primary rounded-lg hover:bg-primary hover:text-accent transition-colors duration-700 font-serif shadow-md w-60 cursor-pointer"
                >
                  SENT US MESSAGE
                </div>
              </div>
            </div>
            <div className="flex-1 bg-secondary rounded-lg shadow-lg overflow-hidden border-2 border-accent/20">
              <div className="relative h-full w-full">
                {/* Custom map pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xl">
                  <svg
                    className="w-12 h-12 text-primary animate-bounce block mx-auto"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 300 300"
                  >
                    <g>
                      <path
                        d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645
		c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645
		C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892
		c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z"
                      />
                      <path
                        d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614
		c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901
		c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104
		C179.265,127.948,165.464,141.901,148.5,141.901z"
                      />
                    </g>
                  </svg>
                  <div style={{ fontWeight: 600 }}>Haruoto </div>
                </div>

                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.649449578939!2d-122.419416!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580819d1ba1a5%3A0x499efbbca0963a16!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1679898989898"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Confirmation Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-secondary p-8 rounded-lg max-w-md w-full mx-4 text-center animate-fade-in">
              <h2 className="text-4xl hachi-maru-pop-regular mb-6">
                CONTACT US
              </h2>
              <textarea
                value={text}
                rows={10}
                onChange={(e) => setText(e.target.value)}
                className="w-full p-4 bg-black/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-700  "
                placeholder="Hi "
                required
              />
              <input
                type="email"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 bg-black/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-700  "
                placeholder="Your name"
                required
              />

              <div
                onClick={() => {
                  setIsModalOpen(false)
                  setName("")
                  setText("")
                }}
                className={
                  "tracking-widest w-full text-center cursor-pointer text-2xl font-serif px-6 py-3 mt-2  transition-all duration-700 rounded-lg hover:bg-primary hover:text-accent bg-accent text-primary"
                }
              >
                SENT
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
