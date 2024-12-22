import React from 'react'
import styles from './SearchResults.module.css'
import Tracklist from './Tracklist'
import Playlist from '../playlist/Playlist'
import Track from './Track'

const SearchResults = ({searchResults, onAdd}) => {
  return (
    <>
        <div className={styles.searchResults}>
            <h2>Search Results</h2>
            {searchResults.map(track => (
              <Track 
                key={track.id} 
                track={track} 
                onAdd={onAdd}
                isRemoval={false}
              />
            ))}
            
        </div>

    </>
  )
}

export default SearchResults
