import React from "react"
import { useParams } from "react-router-dom"
import Character from "./Character"


function DisplayCharacter() {
  let { genderName } = useParams()
  const [chosenCharacter, setchosenCharacter] = React.useState(undefined)
  const gendersAvailable = ['Female', 'Male', 'Genderless', 'Unknown']

  React.useEffect(() => {
    async function fetchCharacters() {
      let chosenGender = genderName;

      if (genderName === 'random') {
        chosenGender = (gendersAvailable[Math.floor(Math.random() * 3 + 1)])
      }

      const resp = await fetch(`https://rickandmortyapi.com/api/character/?gender=${chosenGender}`)
      const characterData = await resp.json()
      let randIndex = Math.floor(Math.random() * 20)
      setchosenCharacter(characterData.results[randIndex])

    }
    fetchCharacters()

  }, [genderName])

  return (
    <div>
      {chosenCharacter ?
        <section className="">
          < Character {...chosenCharacter} />
        </section>
        : <h1>Character Loading...</h1>}

      <section className="">
        <p className="">Choose another character</p>
        <div className="">
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
      </section>
      <footer class="content has-text-centered is-small has-background-dark">
        <div>
          <p>This website was developed by Laleh and Dimitar as part of SEI 23 (GA), project 2: APIs.</p>
        </div>
      </footer>
    </div>

  )
}

export default DisplayCharacter


