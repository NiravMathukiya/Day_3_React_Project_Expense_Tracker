import React from "react"
import NavLinks from "./components/NavLinks"
import Footer from "./components/Footer"
import Home from "./components/Home"

function App() {

  return (
    <div className="bg-slate-800 h-screen">
      <div>
        <NavLinks></NavLinks>
      </div>
      <div>
        <Home></Home>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
