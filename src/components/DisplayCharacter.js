import React from "react"
import {  useParams } from "react-router-dom"
import Character from "./Character"


function DisplayCharacter() {
  let {genderName} = useParams()
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
        <>
        <h1>Random Character: </h1>
        <Character {...chosenCharacter} />
        </>
        : <h1>Character Loading...</h1>}
      <h2> Choose a new gender</h2>
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
      
    )
  }

export default DisplayCharacter


