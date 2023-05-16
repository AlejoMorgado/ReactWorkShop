import React from 'react'
import hipo from './images/hipo.jpg'
import eagle from './images/eagle.jpg'
import penguin from './images/penguin.jpg'
import crocodile from './images/crocodile.jpg'
import giraffe from './images/giraffe.jpg'

const Animals = () => {

  const animals = [
    {
      title: "Giraffe",
      src: giraffe
    },
    {
      title: "Hippo",
      src: hipo
    },
    {
      title: "Crocodile",
      src: crocodile
    },
    {
      title: "Penguin",
      src: penguin
    },
    {
      title: "Eagle",
      src: eagle
    },
  ]

  const generateAnimal = animals[Math.floor(Math.random() * animals.length)];

  return (
    <div>
      <h1>{generateAnimal.title}</h1>
      <img src={generateAnimal.src}></img>
    </div>
  )
}

export default Animals