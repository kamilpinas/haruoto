import React from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <div>
      <ScrollRestoration />
      <div className="min-h-screen bg-secondary font-sans">
        <header>
          <Navbar />
        </header>
        <main className="mt-10">
          <Outlet />
        </main>
      </div>
      <footer className="mb-20">
        <Footer />
      </footer>
    </div>
  )
}

export default App
