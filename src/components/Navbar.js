import { Link } from "react-router-dom"
import React from "react"

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar is-warning is-spaced has-shadow">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/about" className="navbar-item">
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
