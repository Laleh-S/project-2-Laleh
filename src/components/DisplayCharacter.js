import React from "react"
import { Link, useParams } from "react-router-dom"
import Character from "./Character"


function DisplayCharacter () {
  const { genderName } = useParams()
  const [character, setCharacter] = React.useState(undefined)
  const [charactersQty, setcharactersQty] = React.useState(undefined)


  React.useEffect(() => {
    async function fetchCharacters() {
      const resp = await fetch(`https://rickandmortyapi.com/api/character/?gender=${genderName}`)
      const characterData = await resp.json()
      setCharacter(characterData[1])
      setcharactersQty(characterData[0].info.count)
    }

    fetchCharacters()
  }, [genderName])


  if (!character) {
    return <p>Character Loading...</p>
  }

  return (
    <div>
      <h1>Random Character, gender: {genderName}</h1>
      <Character id={Math.floor(Math.random()*charactersQty)} {...character} />
    </div>
  )
}

export default DisplayCharacter


