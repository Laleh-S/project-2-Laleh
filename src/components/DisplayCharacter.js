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
          <p>A random character of your chosen gender was generated.</p> <br/>
          <Character {...chosenCharacter} />
        </>
        : <h1>Character Loading...</h1>}
      <div className="card card-footer">
        <h3> Choose a new gender</h3>
        <a href="/displaycharacter/female" className="tag is-primary is-large card-footer-item">
          Female
        </a>
        <a href="/displaycharacter/random" className="tag is-primary is-large card-footer-item">
          Random
        </a>
        <a href="/displaycharacter/male" className="tag is-primary is-large card-footer-item">
          Male
        </a>
      </div>
    </div>

  )
}

export default DisplayCharacter


