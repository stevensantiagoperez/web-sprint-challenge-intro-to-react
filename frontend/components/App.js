import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'


const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    // Fetch characters
    axios
    .get(urlPeople)
      .then(res => setCharacters(res.data))
      .catch(err => console.log(err.message));

    // Fetch planets
    axios
    .get(urlPlanets)
      .then(res => setPlanets(res.data))
      .catch(err => console.log(err.message));
  }, []);

  // combine characters wuth their homeworlds
  const combinedData = characters.map(character => {
    const homeworld = planets.find(planet => planet.id === character.homeworld);

    return {
      ...character,
      homeworld: homeworld || {} // empty object if homeworld is not found
    }
  })

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {
        combinedData.map( (character, idx) => (
          <Character key={idx} character={character} />
        ))
      }
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
