import React from "react"
import { Link } from "react-router-dom"

function Home() {

  function HandleCick(e) {
    //let gender = e.target.value
    return 
  }

  return (
    <div>
      <Link to="/displaycharacter/female" className="button">
        <button>Female</button>
      </Link>
      <Link to="/displaycharacter/whatever" className="button">
        <button>Whatever</button>
      </Link>
      <Link to="/displaycharacter/male" className="button">
        <button>Male</button>
      </Link>
    </div>
  )
}
export default Home