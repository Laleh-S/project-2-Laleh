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


  if (!character) {
    return <p>Character Loading...</p>
  }

  return <section className="section">
    <div className="container">
      <h1>Hello CharacterName!</h1>
      <Link to="/">{"⬅ Back home"}</Link>
      <Character {...character} />
    </div>
  </section>
}

export default DisplayCharacter


