import React from 'react'
import '../styles/Animals.css'
import hipo from '../images/hipo.jpg'
import eagle from '../images/eagle.jpg'
import penguin from '../images/penguin.jpg'
import crocodile from '../images/crocodile.jpg'
import giraffe from '../images/giraffe.jpg'

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
  const randomIndex = Math.floor(Math.random() * animals.length)
  const generateAnimal = animals[randomIndex];

  return (
    <div class="container">
      <h1>Animals: </h1>
      <h1>{generateAnimal.title}</h1>
      <div class="imageWrapper">
            <img class="animals" src={generateAnimal.src}></img>
      </div>
    </div>

  )
}

export default Animals

