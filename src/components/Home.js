import React from "react"
import { Link } from "react-router-dom"

function Home() {

  return (
    <div className="container-hero">
      <div className="hero">
        <div className="hero-content">
          <p className="title">Choose your character</p>
          <p className="subtitle">Your character will be randomly generated.</p>
          <div className="card-header">
            <a href="/displaycharacter/female" className="button is-warning is-large card-footer-item container.is-widescreen">
            Female
            </a>
            <a href="/displaycharacter/random" className="button is-danger is-large card-footer-item">
            Random
            </a>
            <a href="/displaycharacter/male" className="button card-footer-item is-primary is-large ">
            Male
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://rickandmortyapi.com/api/character/avatar/104.jpeg">
          </img>
        </div>
      </div>
      <section className="instructions-wrapper">
        <div className="instructions">
          <h2>Instructions</h2>
        </div>

        <div className="steps">
          <div>
            <h3><strong>Step One</strong></h3>
            <h3>Chose your character</h3>
          </div>
          <div>
            <h3><strong>Step Two</strong></h3>
            <h3>view your character</h3>
          </div>
          <div>
            <h3><strong>Step Three</strong></h3>
            <h3>Chose another character</h3>
          </div>
        </div>
      </section>
    </div >
  )
}
export default Home

