import React from "react"
function Home() {

  return (
    <div className="">
      <div className="hero-wrapper card level box media">
        <div className=" hero container card-level is-size-4">
          <h1 className="card-header-title large is-size-3 ">Choose your character</h1>
          <p className="card-header level box">Your character will be randomly generated</p>
          <div className="">
            <a href="/displaycharacter/female" className="button is-warning is-large">
            Female
            </a>
            <a href="/displaycharacter/random" className="button is-danger is-large ">
            Random
            </a>
            <a href="/displaycharacter/male" className="button is-primary is-large">
            Male
            </a>
          </div>
        </div>
        <div className="hero">
          <img src="https://rickandmortyapi.com/api/character/avatar/104.jpeg"></img>
        </div>
      </div>
      <section className="">
        <div >
          <h2 className="hero container title has-text-centered card-header ">This Is How It Works</h2>
        </div>
        <div className="card level box media is-size-4 ">
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

