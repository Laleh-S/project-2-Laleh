import React from "react"
import { Link } from "react-router-dom"

function Home() {

  return (
    <div className="container-hero">
      <div className="hero is-success">
        <div className="hero-content">
          <p className="title">Choose your character</p>
          <p className="subtitle">Your character will be randomly generated.</p>
          <div className="hero-buttons">
            <a href="/displaycharacter/female" className="button">
              Female
            </a>
            <a href="/displaycharacter/random" className="button">
              Random
            </a>
            <a href="/displaycharacter/male" className="button">
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
      <footer className="content has-text-centered is-small has-background-dark">
        <div>
          <p>This website was developed by Laleh and Dimitar as part of SEI 23 (GA), project 2: APIs.</p>
        </div>
      </footer>
    </div >
  )
}
export default Home