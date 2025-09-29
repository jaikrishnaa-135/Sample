
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import AdventureFeed from './components/AdventureFeed'
import AdventureCard from './components/AdventureCard'
import CreatePostForm from './components/CreatePostForm'
import Home from './pages/Home'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path='/adventurefeed' element={<AdventureFeed/>}/>
        <Route path='/adventurecard' element={<AdventureCard/>}/>
        <Route path='/createpostform' element={<CreatePostForm/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App