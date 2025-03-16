import React, { useState } from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"

export interface MenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <ScrollRestoration />
      <div className="min-h-screen bg-secondary font-sans">
        <header>
          <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </header>
        <main className="mt-10">
          <Outlet />
        </main>
      </div>
      <footer className="mb-20">
        <Footer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </footer>
    </div>
  )
}

export default App
