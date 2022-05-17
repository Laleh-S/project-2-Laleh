import React from "react"
import {  useParams } from "react-router-dom"
import Character from "./Character"


function DisplayCharacter() {
  const { genderName } = useParams()
  const [chosenCharacter, setchosenCharacter] = React.useState(undefined)


  React.useEffect(() => {
    async function fetchCharacters() {
      // console.log("genderName", genderName)
      const resp = await fetch(`https://rickandmortyapi.com/api/character/?gender=${genderName}`)
      const characterData = await resp.json()
      let randIndex = Math.floor(Math.random() * characterData.info.count + 1)
      console.log(randIndex);

      setchosenCharacter(characterData.results[randIndex])
      }
      fetchCharacters()
      // const resp = await fetch(url)
      // // const respJSON = await resp.json()
      // // const allCharacters = characterData.results
      // // console.log(allCharacters);
      // const charactersQty = characterData[0].results.count
      // console.log(charactersQty);
      // // console.log("charactersQty", charactersQty)
      // const randomIndex = Math.floor(Math.random() * charactersQty) - 1
      // // console.log("random index", randomIndex)
      // const characterChosen = allCharacters[randomIndex]
      // // console.log("character", character)

    }, [genderName])
  
    if (!chosenCharacter) {
      return <p>Character Loading...</p>
    }
  
    return (
      <div>
        <h1>Random Character: {genderName}</h1>
        <Character {...chosenCharacter} />  
      </div>
    )
  }


export default DisplayCharacter


