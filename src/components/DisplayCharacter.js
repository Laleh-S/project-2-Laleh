import React from "react"
import { Link, useParams } from "react-router-dom"
import Character from "./Character"



function DisplayCharacter() {
  const { genderName } = useParams()
  const [character, setCharacter] = React.useState(undefined)


  React.useEffect(() => {
    async function fetchCharacters() {
      // console.log("genderName", genderName)
      let url = "https://rickandmortyapi.com/api/character/"
      if (genderName === "male" || genderName === "female") {
        url = url + `?gender=${genderName}`
      }
      const resp = await fetch(url)
      const respJSON = await resp.json()
      const allCharacters = respJSON.results
      // console.log(allCharacters);
      const charactersQty = allCharacters.length
      // console.log("charactersQty", charactersQty)
      const randomIndex = Math.floor(Math.random() * charactersQty) - 1
      // console.log("random index", randomIndex)
      const character = allCharacters[randomIndex]
      // console.log("character", character)
      setCharacter(character)
    }

    fetchCharacters()
    console.log("working");
  }, [genderName])


  if (!character) {
    return <p>Character Loading...</p>
  }

  return (
    <div>
      <h1>Random Character: {genderName}</h1>
      <Character {...character} />  
    </div>

  )
}

export default DisplayCharacter


