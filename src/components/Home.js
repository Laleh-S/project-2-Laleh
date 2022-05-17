import React from "react"
import { Link } from "react-router-dom"

function Home() {

  return (
    <div>
      <h2>API PROJECT: Random Morty</h2>

      <Link to="/displaycharacter/female" className="button">
        <button>Female</button>
      </Link>
      <Link to="/displaycharacter/whatever" className="button">
        <button>Random</button>
      </Link>

      <Link to="/displaycharacter/male" className="button">
        <button>Male</button>
      </Link>

      <h2>Choose your gender, Get a character</h2>
      <p>Your character will be randomly generated.</p>

      <h2>Instructions</h2>
      <div>
        <h3>Step One:</h3>
        <h4>Chose your character</h4>
      </div>

      <div>
        <h3>Step Two:</h3>
        <h4>View your character</h4>
      </div>

      <div>
        <h3>Step Three:</h3>
        <h4>Chose another character</h4>
      </div>

      {/* <footer>
        <p>This website was developed by Laleh and Dimitar as part of SEI 23 (GA), project 2: APIs.</p>
      </footer> */}
    </div>
  )
}
export default Home