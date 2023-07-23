import React from 'react';
import './App.css';
import Login from './Components/Login';
import { useState } from 'react';
import { useEffect } from 'react';
import { getTokenFromURL } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Components/Player';
import { DataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = DataLayerValue();
  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      // setToken(_token);
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user,
        })
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      });
      spotify.getPlaylist('37i9dQZEVXcQ9COmYvdajy').then(
        res => {
          dispatch({
            type: "SET_DISCOVERWEEKLY",
            discover_weekly: res
          })
        }
      )

    }
  }, [])
  // console.log(user);
  // console.log(token)
  return (
    <div className='app'>
      {
        token ? <Player spotify={spotify} /> : <Login />
      }

    </div>

  )
}

export default App;
