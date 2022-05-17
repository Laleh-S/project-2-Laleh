import React from "react"
import { Link, useParams } from "react-router-dom"
import Character from "./Character"


function DisplayCharacter() {
  let {genderName} = useParams()

  const [chosenCharacter, setchosenCharacter] = React.useState(undefined)
  const gendersAvailable = ['Female', 'Male', 'Genderless', 'Unknown']
  // genderName = 'random' ? genderName = gendersAvailable[Math.floor(Math.random() * 3)] : countLength = 0;
if (genderName = 'random') {
  genderName =  (gendersAvailable[Math.floor(Math.random() * 3 + 1)])
} 

  React.useEffect(() => {
    async function fetchCharacters() {
      const resp = await fetch(`https://rickandmortyapi.com/api/character/?gender=${genderName}`)
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
        : <p>Character Loading...</p>}
      </div>
      
    )
  }

export default DisplayCharacter


