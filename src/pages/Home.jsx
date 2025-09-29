import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import AdventureCard from '../components/AdventureCard'
import AdventureFeed from '../components/AdventureFeed'

const Home = () => {
  return (
  
    <div>
    <Header/>
    <Link to='/createpostform'>Make Post</Link>
    <AdventureFeed/>
    </div>
  )
}

export default Home