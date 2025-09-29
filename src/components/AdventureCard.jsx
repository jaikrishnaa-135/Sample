import React from 'react'
import { Link } from 'react-router-dom'

const AdventureCard = () => {
  return (
    <div className='card'>
        <h1>AdventureCard</h1>
        <img alt='post' style={{height:'20px'}}></img><br></br>
        <h1>{localStorage.getItem("title")}</h1>
        <p>{localStorage.getItem("description")}</p>
    </div>
  )
}

export default AdventureCard