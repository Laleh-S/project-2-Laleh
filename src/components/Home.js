import React from "react"
import image from "../assets/Rick-Morty2.jpeg"
import { Link } from "react-router-dom"

function Home() {

  return (
    <div className="">
      <div className="hero-wrapper card level box media">
        <div className=" hero container card-level is-size-4">
          <h1 className="card-header-title large is-size-3 ">Choose your character</h1>
          <p className="card-header level box ">Your character will be randomly generated</p>
          <div className="">
            <Link to="/displaycharacter/female" className="button is-warning is-large">
              Female
            </Link>
            <Link to="/displaycharacter/random" className="button is-danger is-large ">
              Random
            </Link>
            <Link to="/displaycharacter/male" className="button is-primary is-large">
              Male
            </Link>
          </div>
        </div>
        <div className="hero">
          <img className="image " src={image}></img>
        </div>
      </div>
      <section className="">
        <div >
          <h2 className="hero container has-text-centered card-header mr-6 ml-6">How It Works</h2>
        </div>
        <div className="card level box media is-size-4 ml-6 mr-6">
          <div className="card-header level box">
            <h3 className="subtitle"><strong>Step 1 - Chose your character</strong></h3>
          </div>
          <div className="card-header level box">
            <h3 className="subtitle"><strong>Step 2 - View your character</strong></h3>
          </div>
          <div className="card-header level box">
            <h3 className="subtitle"><strong>Step 3 - Chose another character</strong></h3>
          </div>
        </div>
      </section>
    </div >
  )
}
export default Home

