import React, { useState } from 'react'
import fetchData from './helper/helper'
import '../styles/characters.css'

const Character = () => {

  const [character, setCharacter] = useState({});

  const fetchRandomCharacter = async () => {
    try {
      setCharacter(await fetchData());
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (Object.values(character).length === 0) {
    fetchRandomCharacter();
  }

  return (
    <div>
      {
        character.gender === "female" ? <p>Female</p>
          : character.gender === "male" ? <p>Male</p>
            : <p>Nothing</p>
      }
      <h1>{character.name}</h1>
      <p>Gender: {character.gender}</p>
      <p>Hair color: {character.hair_color} </p>
      <p>Height: {character.height}</p>
    </div>
  );
}

export default Character;