import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import DisplayCharacter from "./components/DisplayCharacter"


function App() {
  return (<>
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/displayCharacter/:genderName" element={<DisplayCharacter />} />
        </Routes>
      </main>
    </Router>
    <br/>
    <br/>
    <footer className="content has-text-centered is-small has-background-dark">
      <div>
        <p>This website was developed by Laleh and Dimitar as part of SEI 23 (GA), project 2: APIs.</p>
      </div>
    </footer>
  </>
  )
}
export default App
