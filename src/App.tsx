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
    <div className="min-h-screen flex flex-col">
      <ScrollRestoration />
      <header className="flex-none">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>

      <main className="flex-1 bg-secondary mt-8">
        <Outlet />
      </main>

      <footer className="flex-none bg-secondary mt-auto py-12">
        <Footer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </footer>
    </div>
  )
}

export default App
