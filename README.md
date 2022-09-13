# Random Morty API
Link to project https://random-morty.netlify.app/

## Brief
In this project we were asked to build a React application that consumes a public API. Me and my partner decided on Rick & Morty API which we would request and display a random character depending on the user gender selection. This was a pair project which we had a week to complete. 

## Requirements
- Should Consume a public API
- Should include a router 
- Should consist of more than one page
- Should have semantically clean HTML
- Must be deployed online and accessible to the public.


## Technologies used
- HTML
- CSS
- Bulma
- Javascript
- React
- Git


## Planning and whiteboarding

After we given the project brief me and my partner decided on creating something which we can finish on time as we only had 3 days over one week to work on this. We decided on creating three pages. We did all the planning and white boarding together using an online collaboration platform called  miro. 

<img width="1124" alt="Screen Shot 2022-08-19 at 16 35 39" src="https://user-images.githubusercontent.com/92860992/185661919-0a54c27c-d7e8-4fb6-ab93-39a0cd048843.png">



## Approach


We decided to randomly generate a character from the TV show and display the character on the page with details about that particular character as well as their image.

We used the react-router-dom Link elements to specify different genders. We used the following API link to fetch our data https://rickandmortyapi.com .

We used the Insomnia platform to get our API requests. We mostly did the coding together. We started by creating all of our components and Navbar. We then imported our components inside of the App.js and created routes for all of the components and the Navbar. 

<img width="901" alt="Screen Shot 2022-09-13 at 16 43 13" src="https://user-images.githubusercontent.com/92860992/189931825-3e29619a-b51d-4933-a115-bf1e7347f137.png">



I was responsible for the Character.js page. I used the data from the response and used destructuring props to display the data on the page. For styling we used mostly Bulma as well as some CSS.

````
function Character({ name, image, species, gender, origin, status, location }) {
  return (
    <div className=" card level box media">
      <div className="card-content level-item is-block">
        <h2 className="card-item ">{name}</h2><br /> 
        <p><b>Species:</b> {species}. <br /><br />
          <b>Origin:</b> {origin.name}. <br /><br />
          <b>Current status:</b> {status}.<br /><br />
          <b>Gender:</b> {gender}.<br /><br />
          <b>Location:</b> {location.name}.
        </p>
      </div>
      <div className="card level-item has-text-centered">
        <img src={image} />
      </div>
    </div>
  )
}

export default Character
````

Once the user chooses their character, they are taken to a character page where they find the image and more details about that specific character.

<img width="1427" alt="Screen Shot 2022-08-19 at 16 29 02" src="https://user-images.githubusercontent.com/92860992/185663586-30c2edbc-3137-4ef2-af8a-cdc6508fc1cc.png">

## Homepage 

The home page consists of three buttons: one chooses a female character, one chooses a male character and the third one randomly chooses any character. There is also a section which explains how to use the app.

````
function Home() {

  return (
    <div className="">
      <div className="hero-wrapper card level box media">
        <div className=" hero container card-level is-size-4">
          <h1 className="card-header-title large is-size-3 ">Choose your character</h1>
          <p className="level">Your character will be randomly generated</p>
          <div className="">
            <Link to="/displaycharacter/female" className="button is-warning is-large shadow">
              Female
            </Link>
            <Link to="/displaycharacter/random" className="button is-danger is-large ">
              Random
            </Link>
            <Link to="/displaycharacter/male" className="button is-primary is-large">
              Male
            </Link>
          </div>
        </div>
        <div className="hero">
          <img className="image " src={image}></img>
        </div>
      </div>
      <section className="">
        <div >
          <h2 className="hero container has-text-centered ">How It Works</h2>
        </div>
        <div className="card level box media is-size-4 ml-6 mr-6">
          <div className="card-header level box">
            <h3 className="subtitle"><strong>Step 1: </strong>
               Chose a gender</h3>
          </div>
          <div className="card-header level box">
            <h3 className="subtitle"><strong>Step 2: </strong>View a random character</h3>
          </div>
          <div className="card-header level box">
            <h3 className="subtitle"><strong>Step 3: </strong> Chose another gender</h3>
          </div>
        </div>
      </section>
    </div >
  )
}
export default Home
````

<img width="1430" alt="Screen Shot 2022-08-19 at 17 16 42" src="https://user-images.githubusercontent.com/92860992/185662571-9c2972f5-aa1c-4a76-ae0d-5cca97aa7934.png">






## Wins 
- Being able to create and deploy a functional project
- Being able to meet our MVP goals
- Learning Bulma styling in this project
- Working in pairs and learning from others

## Bugs 
In the display character page, once you click on one button you cannot click on it again to get another character. 

## Challenges


## Key Learnings
This was my first time collaborating with someone and in the beginning it was a little hard as we kept pushing and pulling and overwriting each other's code. But after more practice we learned ways of using git and started to appreciate the benefits of git and colaboration. I also learned a lot about React use state and use prams.




Link to your wireframes – sketches of major views / interfaces in your application
  Miro.com was used, bored link: https://miro.com/app/board/uXjVO1EINDM=/?share_link_id=460142220644


Create with https://github.com/Dumblevor
