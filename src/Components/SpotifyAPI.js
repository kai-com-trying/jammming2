const SpotifyAPI = {
  // Search for tracks
  async searchTracks(query, accessToken) {
    if (!query) return [];

    const endpoint = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(endpoint, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch tracks');
      }

      const data = await response.json();
      return data.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    } catch (error) {
      console.error('Error searching tracks:', error);
      return [];
    }
  },

  // Create a new playlist
  async createPlaylist(userId, playlistName, accessToken) {
    const endpoint = `https://api.spotify.com/v1/users/${userId}/playlists`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: playlistName,
          description: 'Created with Jammming App',
          public: false
        })
      });

      const data = await response.json();
      return data.id;  // Return the playlist ID
    } catch (error) {
      console.error('Error creating playlist:', error);
      throw new Error('Failed to create playlist');
    }
  },

  // Add tracks to a playlist
  async addTracksToPlaylist(playlistId, trackUris, accessToken) {
    const endpoint = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

    try {
      await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          uris: trackUris
        })
      });

      console.log(`Tracks added to playlist ${playlistId}`);
    } catch (error) {
      console.error('Error adding tracks to playlist:', error);
      throw new Error('Failed to add tracks');
    }
  }
};

export default SpotifyAPI;
