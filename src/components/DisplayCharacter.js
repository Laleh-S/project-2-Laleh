import React from "react"
import { Link, useParams } from "react-router-dom"
import Character from "./Character"


function DisplayCharacter () {
  const { genderName } = useParams()
  const [character, setCharacter] = React.useState(undefined)

  React.useEffect(() => {
    async function fetchCharacters() {
      const resp = await fetch(`https://rickandmortyapi.com/api/character/?gender=${genderName}`)
      const characterData = await resp.json()
      setCharacter(characterData[0])
    }

    fetchCharacters()
  }, [genderName])


  if (!character) {
    return <p>Character Loading...</p>
  }

  return <section className="section">
    <div className="container">
      <h1>Random Character, gender: {genderName}</h1>
      <Character />
    </div>
  </section>
}

export default DisplayCharacter


