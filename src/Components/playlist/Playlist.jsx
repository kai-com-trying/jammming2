import React, {useState} from 'react'
import Track from '../searchresults/Track'
import styles from './Playlist.module.css'

const Playlist = () => {
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

        
            <Track 
            name="Versace on the Floor" 
            artist="Bruno Mars" 
            album="24K Magic" 
            />
    
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
