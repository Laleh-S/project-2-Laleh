import React from "react"
import { Link } from "react-router-dom"

function Home() {

  return (
    <div className="container">
      <h2>API PROJECT: Random Morty</h2>
      <div className="buttons">
        <a href="/displaycharacter/female" className="button is-primary">
          Female
        </a>
        <a href="/displaycharacter/random" className="button is-primary">
          Random
        </a>
        <a href="/displaycharacter/male" className="button is-primary">
          Male
        </a>
      </div>

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


    </div>
  )
}
export default Home