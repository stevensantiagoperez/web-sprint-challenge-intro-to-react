import React, { useState } from 'react'

function Character( { character } ) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showHomeworld, setShowHomeworld] = useState(false);
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  }

  return (
    <div onClick={toggleHomeworld}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3>{character.name}</h3>
      <p >Planet:{character.homeworld.name}</p>
    </div>
  )
}

export default Character