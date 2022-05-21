import { Link } from "react-router-dom"
import React from "react"
import randomMorty2 from "../assets/RandomMORTY-2.gif"

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar is-warning is-spaced has-shadow">
          <div className="container-nav ">
            <div className="navbar-brand">
              <Link to="/"><img className="logo image image is-64x64" src={randomMorty2} /></Link>
              <Link to="/" className="navbar-item is-size-3 has-text-weight-bold ml-3">
                Home
              </Link>
              <Link to="/about" className="navbar-item is-size-3 has-text-weight-bold	ml-3	">
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
