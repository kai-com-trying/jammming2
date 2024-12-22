import { useState } from 'react'
import './App.css'
import Title from './Components/Title'
import SearchBar from './Components/searchbar/SearchBar'
import SearchResults from './Components/searchresults/SearchResults'
import Playlist from './Components/playlist/Playlist'

function App() {
  const mockArray = [
    { id: 1, name: "Uptown Funk", artist: "Bruno Mars", album: "Uptown Special" },
    { id: 2, name: "Locked Out of Heaven", artist: "Bruno Mars", album: "Unorthodox Jukebox" },
    { id: 3, name: "Versace on the Floor", artist: "Bruno Mars", album: "24K Magic" },
    { id: 4, name: "That's What I Like", artist: "Bruno Mars", album: "24K Magic" }
  ];

  const [searchResults, setSearchResults] = useState([]);  // Tracks from search
  const handleSearch = (query) => {
    setSearchResults(mockArray)
  }

  const [playlistTracks, setPlaylistTracks] = useState([]);  // Tracks in playlist
  const handleAddToPlaylist = (track) => {
    
    if (!playlistTracks.some((t) => t.id === track.id)) {
      setPlaylistTracks((prev) => {return ([...prev, track])});
    }
  };
  const handleRemoveFromPlaylist = (track) => {
    setPlaylistTracks((prev) => {
      return prev.filter((t) => t.id !== track.id);  // Remove track by filtering
    });
  };
  

  const [searchQuery, setSearchQuery] = useState("");  // Search bar input


  return (
    <>
      <Title />
      <SearchBar onSearch={handleSearch} />
      <div className="panel">
        <SearchResults 
          searchResults={searchResults} 
          onAdd={handleAddToPlaylist} 
        />
        <Playlist 
          playlistTracks={playlistTracks} 
          onRemove={handleRemoveFromPlaylist} 
        />
      </div>
    </>
  )
}

export default App
