import React from 'react'
import { Link } from 'react-router-dom'

const AdventureCard = () => {
  return (

    <div className='card'>
       
  
        <h1>{localStorage.getItem("title")}</h1>
        <p>{localStorage.getItem("description")}</p>
        <img src={localStorage.getItem("image")}/>
        
    </div>
  )
}

export default AdventureCard