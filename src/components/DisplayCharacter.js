import React from "react"
import { useParams } from "react-router-dom"
import Character from "./Character"


function DisplayCharacter() {
  const { genderName } = useParams()
  const [chosenCharacter, setchosenCharacter] = React.useState(undefined)
  const gendersAvailable = ['Female', 'Male', 'Genderless', 'Unknown']

  React.useEffect(() => {
    async function fetchCharacters() {
      let chosenGender = genderName;

      if (genderName === "random") {
        chosenGender = (gendersAvailable[Math.floor(Math.random() * 3 + 1)])
      }

      const resp = await fetch(`https://rickandmortyapi.com/api/character/?gender=${chosenGender}`)
      const characterData = await resp.json()
      const randIndex = Math.floor(Math.random() * 20)
      setchosenCharacter(characterData.results[randIndex])

    }
    fetchCharacters()

  }, [genderName])

  return (
    <div className="container.is-fullhd container.is-widescreen container">
      {chosenCharacter ?
        <>
          <h1>Random Character: </h1>
          <p>A random character of your chosen gender was generated.</p> <br />
          <Character {...chosenCharacter} />
        </>
        : <h1>Character Loading...</h1>}
      <div className="card">
        <h3 className="card-header-title large is-size-3"> Choose a new gender</h3>
        <div className="card-footer">
          <a href="/displaycharacter/female" className="button is-warning is-large card-footer-item">
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
    </div>

  )
}

export default DisplayCharacter


