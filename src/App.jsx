import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './Components/Title'
import SearchBar from './Components/searchbar/SearchBar'
import SearchResults from './Components/searchresults/SearchResults'
import Playlist from './Components/playlist/Playlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title />
      <SearchBar />
      <div className="panel">
        <SearchResults />
        <Playlist />
      </div>
    </>
  )
}

export default App
