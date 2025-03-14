import { useState } from "react"

export const Reservations = () => {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [guests, setGuests] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Mocked available time slots
  const timeSlots = [
    "1:00 PM",
    "2:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
  ]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    // Reset form
    setSelectedDate("")
    setSelectedTime("")
    setName("")
    setEmail("")
    setGuests(1)
  }

  const incrementGuests = () => {
    if (guests < 10) {
      setGuests(guests + 1)
    }
  }

  const decrementGuests = () => {
    if (guests > 1) {
      setGuests(guests - 1)
    }
  }

  return (
    <>
      <h1 className="text-center text-primary text-3xl md:text-5xl lg:text-7xl hachi-maru-pop-regular mb-12 animate-slide-in-left duration-700">
        ·•— Reservations —•·
      </h1>
      <div className="animate-slide-in-right bg-secondary text-primary font-sans py-12 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Reservation Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Date and Guests in One Row on Large Screens */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Date Picker */}
              <div className="flex-1">
                <label className="block text-xl font-serif mb-2">
                  SELECT DATE
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 bg-black/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-700"
                  required
                />
              </div>

              {/* Guests Input */}
              <div className="flex-1">
                <label className="block text-xl font-serif mb-2">
                  NUMBER OF GUESTS
                </label>
                <div className="flex items-center gap-4">
                  {/* Minus Button */}
                  <button
                    type="button"
                    onClick={decrementGuests}
                    className="p-3 bg-black/15 rounded-lg transition-all duration-700 hover:scale-105 focus:scale-105 "
                    aria-label="Decrease number of guests"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  </button>

                  {/* Number Input */}
                  <input
                    type="number"
                    value={guests}
                    onChange={(e) => {
                      const value = Math.min(
                        Math.max(Number(e.target.value), 10)
                      )
                      setGuests(value)
                    }}
                    min={1}
                    max={10}
                    className="w-full p-3 bg-black/15 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-700"
                    required
                  />

                  {/* Plus Button */}
                  <button
                    type="button"
                    onClick={incrementGuests}
                    className="p-3 bg-black/15 rounded-lg hover:scale-105  transition-all duration-700"
                    aria-label="Increase number of guests"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Name and Email in One Row on Large Screens */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Name Input */}
              <div className="flex-1">
                <label className="block text-xl font-serif mb-2">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 bg-black/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-700 focus:scale-105 hover:scale-105 "
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="flex-1">
                <label className="block text-xl font-serif mb-2">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-black/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-700 hover:scale-105 focus:scale-105 "
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            {/* Time Slot Selector */}
            <div>
              <label className="block text-xl font-serif mb-2">
                SELECT TIME
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`p-4 rounded-lg text-center transition-all duration-700 ${
                      selectedTime === time
                        ? "bg-primary text-secondary font-bold scale-105"
                        : "bg-black/15 hover:scale-105"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={
                "tracking-widest w-full text-center cursor-pointer text-2xl font-serif px-6 py-3  transition-all duration-700 rounded-lg hover:bg-primary hover:text-accent bg-accent text-primary"
              }
            >
              BOOK TABLE
            </button>
          </form>
        </div>

        {/* Confirmation Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-secondary p-8 rounded-lg max-w-md w-full mx-4 text-center animate-fade-in">
              <h2 className="text-4xl hachi-maru-pop-regular mb-6">
                Reservation Confirmed!
              </h2>
              <p className="text-lg mb-6">
                Thank you, <span className="font-bold">{name}</span>. Your table
                for <span className="font-bold">{guests}</span> on{" "}
                <span className="font-bold">{selectedDate}</span> at{" "}
                <span className="font-bold">{selectedTime}</span> has been
                booked.
              </p>

              <div
                onClick={closeModal}
                className={
                  "tracking-widest w-full text-center cursor-pointer text-2xl font-serif px-6 py-3  transition-all duration-700 rounded-lg hover:bg-primary hover:text-accent bg-accent text-primary"
                }
              >
                CLOSE
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
