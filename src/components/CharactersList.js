import React from "react"
// import Country from "./Country"

function CharactersList() {
  const [characters, updateCharacters] = React.useState([])

  React.useEffect(() => {
    console.log("The Characters List  has mounted")
  }, [])

  React.useEffect(() => {
    async function fetchCharacters() {
      const resp = await fetch("https://rickandmortyapi.com/api/character")
      const charactersData = await resp.json()
      updateCharacters(charactersData)
    }
    fetchCharacters()
  }, [])

  return <section className="section">
    {/* <div className="container">
      <div className="columns is-multiline">
        {countries.map((country, i) => <Country key={i} {...country} />)}
      </div>
    </div> */}
  </section>
}


export default CharactersList
