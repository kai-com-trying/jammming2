import React, {useState} from 'react'
import Track from '../searchresults/Track'
import styles from './Playlist.module.css'
import SpotifyAPI from '../SpotifyAPI'
import SpotifyAuth from '../SpotifyAuth'

const Playlist = ({playlistTracks, onRemove, onReset}) => {
    const [playlistName, setPlaylistName] = useState('');

    const handleSubmit = async(e) => {
      e.preventDefault();

      const accessToken = SpotifyAuth.getAccessToken();

      if (!playlistName || playlistTracks.length === 0) {
        alert('Please enter a playlist name and add tracks.');
        return;
      }

      try {
        // Step 1: Get the user's Spotify ID
        const userEndpoint = 'https://api.spotify.com/v1/me';
        const userResponse = await fetch(userEndpoint, {
          headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        const userData = await userResponse.json();
        const userId = userData.id;

        // Step 2: Create Playlist
        const playlistId = await SpotifyAPI.createPlaylist(userId, playlistName, accessToken);

        // Step 3: Add Tracks to Playlist
        const trackUris = playlistTracks.map(track => track.uri);
        await SpotifyAPI.addTracksToPlaylist(playlistId, trackUris, accessToken);

        alert(`Playlist "${playlistName}" created!`);
        setPlaylistName('');  // Reset form
        onReset();  // Clear playlist

      } catch (error) {
        console.error('Error creating playlist:', error);
        alert('Failed to create playlist. Please try again.');
      }
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
            className={styles.submitButton}
            >
            Create Playlist
            </button>
        </form>
      </div>
    );
}

export default Playlist
