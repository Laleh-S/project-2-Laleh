import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"
//import Country from "./Country"


function DisplayCharacter () {
  const { genderName } = useParams()
  const [character, setCharacter] = React.useState(undefined)


  React.useEffect(() => {
    async function fetchCountry() {
      const resp = await fetch(`https://rickandmortyapi.com/api/character/?gender=${genderName}`)
      const characterData = await resp.json()
      setCharacter(characterData[0])
    }
    fetchCountry()
  }, [genderName])


  return (
    <div>
      
    </div>
  )
}

export default DisplayCharacter


