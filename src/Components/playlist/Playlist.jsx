import React, {useState} from 'react'
import Track from '../searchresults/Track'
import styles from './Playlist.module.css'

const Playlist = ({playlistTracks, onRemove}) => {
    const [playlistName, setPlaylistName] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Playlist "${playlistName}" created!`);
      setPlaylistName('');  // Reset after submit
    };
  
    return (
      <div className={styles.Playlist}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
            type="text"
            placeholder="Enter playlist name"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            className={styles.input}
            />

        
          {playlistTracks.length > 0 ? (
            playlistTracks.map((track) => (
              <Track 
                key={track.id} 
                track={track} 
                isRemoval={true} 
                onRemove={onRemove}
              />
            ))
          ) : (
            <p>No tracks in playlist</p>
          )}
    
            <button 
            type="submit" 
            onClick={handleSubmit} 
            className={styles.submitButton}
            >
            Create Playlist
            </button>
        </form>
      </div>
    );
}

export default Playlist
