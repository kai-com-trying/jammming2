const clientId = 'a70c7688318a4a63b636866c7691de60';  // Replace with your Spotify app client ID
const redirectUri = 'http://localhost:5173/';  // Your redirect URI
let accessToken;

const SpotifyAuth = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;  // Return the token if already available
    }

    const hash = window.location.hash;
    const tokenMatch = hash.match(/access_token=([^&]*)/);
    const expiresInMatch = hash.match(/expires_in=([^&]*)/);
    const errorMatch = hash.match(/error=([^&]*)/);  // Catch errors

    if (errorMatch) {
      alert('Authorization failed: ' + errorMatch[1]);
      return;
    }

    if (tokenMatch && expiresInMatch) {
      accessToken = tokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      
      // Clear token after expiration
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      
      return accessToken;
    } else {
      // Redirect to Spotify Authorization URL
      const state = generateRandomString(16);  // CSRF protection
      localStorage.setItem('spotify_auth_state', state);

      const authUrl = `https://accounts.spotify.com/authorize` +
        `?response_type=token` +
        `&client_id=${clientId}` +
        `&scope=playlist-modify-public playlist-modify-private` +
        `&redirect_uri=${encodeURIComponent(redirectUri)}` +
        `&state=${state}`;

      window.location.href = authUrl;
    }
  }
};

function generateRandomString(length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export default SpotifyAuth;
