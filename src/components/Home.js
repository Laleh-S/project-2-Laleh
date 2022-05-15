import React from "react"
import { Link } from "react-router-dom"

function Home() {


  return (
    <div>
      <Link to="/displaycharacter/female" className="button">
        <button>Female</button>
      </Link>
      <Link to="/displaycharacter/whatever" className="button">
        <button>Random</button>
      </Link>
      <Link to="/displaycharacter/undefined" className="button">
        <button>Undefined</button>
      </Link>
      <Link to="/displaycharacter/male" className="button">
        <button>Male</button>
      </Link>
    </div>
  )
}
export default Home