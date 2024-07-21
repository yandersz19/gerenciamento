import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArtistList = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/artists/')
      .then(response => {
        setArtists(response.data);
      })
      .catch(error => {
        console.error('Error fetching artists:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Artistas</h2>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name} - {artist.artist_type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
