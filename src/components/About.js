import React from "react"

function About() {
  return (
    <div className="container-about card">
      <section className="card">
        <h2>Creators</h2>
        <h3>This project was developed by Dimitar and Laleh as part of General Assembley Softwear engineer bootcamp.</h3>
        <h3>Instructions by: <strong>Laleh</strong></h3>
        <h3>Logo by: <strong>Dimitar</strong></h3>
      </section>

      <section className="card">
        <h2>Other Assets</h2>
        <h3>API utilized: <a href="https://rickandmortyapi.com">https://rickandmortyapi.com</a></h3>
        <h3>CSS packaged used: <a href="https://bulma.io">https://bulma.io</a></h3>
      </section>

      <section className="card">
        <h2>Check out our other projects:</h2>
        <h4>Dimitar&rsquo; s Space Invaders (project 1) <a href="https://dumblevor.github.io/spce_inv1/">https://dumblevor.github.io/spce_inv1/</a></h4>
        <h4>Laleh&rsquo; s Pac-Man (project 1) <a href="https://laleh-s.github.io/GA-Project-1/">https://laleh-s.github.io/GA-Project-1/</a></h4>
      </section>
    </div>

  )

}

export default About