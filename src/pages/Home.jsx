import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import AdventureCard from '../components/AdventureCard'
import AdventureFeed from '../components/AdventureFeed'

const Home = () => {
  return (
  <center>
    <div>
    <Header/>
    <Link to='/createpostform'><p>Click to Make Post</p></Link>
    <AdventureFeed/>
    </div></center>
  )
}

export default Home