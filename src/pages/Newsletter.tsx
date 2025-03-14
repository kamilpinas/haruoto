import { useState } from "react"

export const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  // Mocked newsletter updates
  const updates = [
    {
      id: 1,
      title: "New Menu Launch",
      description: "Discover our latest seasonal dishes and specials.",
      date: "October 1, 2023",
    },
    {
      id: 2,
      title: "Upcoming Events",
      description: "Join us for sushi-making workshops and sake tastings.",
      date: "September 25, 2023",
    },
    {
      id: 3,
      title: "Chef's Special",
      description: "Try our chef's special ramen, available only this month.",
      date: "September 18, 2023",
    },
  ]

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <>
      <h1 className="text-center text-primary text-3xl md:text-5xl lg:text-7xl hachi-maru-pop-regular mb-12 animate-slide-in-left duration-700">
        ·•— Newsletter —•·
      </h1>
      <div className="animate-slide-in-left bg-secondary text-primary font-sans py-12 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Subscription Form */}
          <div className="bg-black/15 p-8 rounded-lg mb-12">
            <h2 className="text-4xl hachi-maru-pop-regular mb-6">
              Subscribe to Our Newsletter
            </h2>
            {isSubscribed ? (
              <p className="text-lg">
                Thank you for subscribing! You'll receive the latest updates
                soon.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-6">
                <div>
                  <label className="block text-xl font-serif mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-700"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={
                    "tracking-widest w-full text-center cursor-pointer text-2xl font-serif px-6 py-3  transition-all duration-700 rounded-lg hover:bg-primary hover:text-accent bg-accent text-primary"
                  }
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>

          {/* Latest Updates */}
          <div>
            <h2 className="text-4xl hachi-maru-pop-regular mb-8">
              Latest Updates
            </h2>
            <div className="space-y-6">
              {updates.map((update) => (
                <div
                  key={update.id}
                  className="bg-black/15 p-6 rounded-lg transition-all duration-700 hover:scale-105"
                >
                  <h3 className="text-2xl hachi-maru-pop-regular mb-2">
                    {update.title}
                  </h3>
                  <p className="text-lg mb-4">{update.description}</p>
                  <p className="text-sm text-primary/70">{update.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
