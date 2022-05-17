import React from "react"
// import { Link } from "react-router-dom"

/*
created: "2017-11-04T19:09:56.428Z"
episode: (42) ['https://rickandmortyapi.com/api/episode/6', 'https://rickandmortyapi.com/api/episode/7', 'https://rickandmortyapi.com/api/episode/8', 'https://rickandmortyapi.com/api/episode/9', 'https://rickandmortyapi.com/api/episode/10', 'https://rickandmortyapi.com/api/episode/11', 'https://rickandmortyapi.com/api/episode/12', 'https://rickandmortyapi.com/api/episode/14', 'https://rickandmortyapi.com/api/episode/15', 'https://rickandmortyapi.com/api/episode/16', 'https://rickandmortyapi.com/api/episode/17', 'https://rickandmortyapi.com/api/episode/18', 'https://rickandmortyapi.com/api/episode/19', 'https://rickandmortyapi.com/api/episode/20', 'https://rickandmortyapi.com/api/episode/21', 'https://rickandmortyapi.com/api/episode/22', 'https://rickandmortyapi.com/api/episode/23', 'https://rickandmortyapi.com/api/episode/24', 'https://rickandmortyapi.com/api/episode/25', 'https://rickandmortyapi.com/api/episode/26', 'https://rickandmortyapi.com/api/episode/27', 'https://rickandmortyapi.com/api/episode/29', 'https://rickandmortyapi.com/api/episode/30', 'https://rickandmortyapi.com/api/episode/31', 'https://rickandmortyapi.com/api/episode/32', 'https://rickandmortyapi.com/api/episode/33', 'https://rickandmortyapi.com/api/episode/34', 'https://rickandmortyapi.com/api/episode/35', 'https://rickandmortyapi.com/api/episode/36', 'https://rickandmortyapi.com/api/episode/38', 'https://rickandmortyapi.com/api/episode/39', 'https://rickandmortyapi.com/api/episode/40', 'https://rickandmortyapi.com/api/episode/41', 'https://rickandmortyapi.com/api/episode/42', 'https://rickandmortyapi.com/api/episode/43', 'https://rickandmortyapi.com/api/episode/44', 'https://rickandmortyapi.com/api/episode/45', 'https://rickandmortyapi.com/api/episode/46', 'https://rickandmortyapi.com/api/episode/47', 'https://rickandmortyapi.com/api/episode/48', 'https://rickandmortyapi.com/api/episode/49', 'https://rickandmortyapi.com/api/episode/51']
gender: "Female"
id: 3
image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
location: {name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20'}
name: "Summer Smith"
origin: {name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20'}
species: "Human"
status: "Alive"
type: ""
url: "https://rickandmortyapi.com/api/character/3"
*/

function Character({ name, image, species, gender }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      <img src={image} />
      <footer>
        <p>This website was developed by. Laleh and Dimitar as part of SEI 23 (GA), project 2: APIs.</p>
      </footer>
    </div>
  )
}

export default Character