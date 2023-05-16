import React, { useState, useEffect } from 'react';
import fetchData from './helper/helper';
import '../styles/Characters.css';
import maleImage from '../images/male.jpg';
import femaleImage from '../images/female.jpg';
import robotImage from '../images/robot.jpg';

const Character = () => {
  const [character, setCharacter] = useState({});

  const fetchRandomCharacter = async () => {
    try {
      const data = await fetchData();
      setCharacter(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (Object.keys(character).length === 0) {
      fetchRandomCharacter();
    }
  }, [character]);

  const getCharacterImage = () => {
    if (character.gender === 'female') {
      return femaleImage;
    } else if (character.gender === 'male') {
      return maleImage;
    } else {
      return robotImage;
    }
  };

  return (
    <div className="characterContainer">
      <div className="screen">
        <img className='character' src={getCharacterImage()} alt="Character" />
        <h1>Animals</h1>
        <h1>{character.name}</h1>
        <p>GENDER: {character.gender}</p>
        <p>HAIR COLOR: {character.hair_color}</p>
        <p>HEIGHT: {character.height}</p>
        <div className="screen-overlay"></div>
      </div>
    </div>
  );
};

export default Character;
