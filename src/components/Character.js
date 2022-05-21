import React from "react"


function Character({ name, image, species, gender, origin, status, location }) {
  return (
    <div className=" card level box media">
      <div className="card-content level-item is-block">
        <h2 className="card-item ">{name}</h2><br /> 
        <p><b>Species:</b> {species} <br /><br />
          <b>Origin:</b> {origin.name} <br /><br />
          <b>Current status:</b> {status}<br /><br />
          <b>Gender:</b> {gender}<br /><br />
          <b>Location:</b> {location.name}
        </p>
      </div>
      <div className="card level-item has-text-centered">
        <img src={image} />
      </div>
    </div>
  )
}

export default Character