import React, { useState, useEffect } from 'react';
import { useParams, use } from 'react-router-dom';
import axios from 'axios';

const ArtistDetail = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/artists/${id}/`)
      .then(response => {
        setArtist(response.data);
      })
      .catch(error => {
        console.error('Error fetching artist details:', error);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/artists/${id}/`)
      .then(() => {
        history.push('/artists');
      })
      .catch(error => {
        console.error('Error deleting artist:', error);
      });
  };

  return (
    <div>
      {artist ? (
        <div>
          <h2>{artist.name}</h2>
          <p>Email: {artist.email}</p>
          <p>Document: {artist.document}</p>
          <p>Document Type: {artist.document_type}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => history.push(`/artists/${id}/edit`)}>Edit</button>
        </div>
      ) : (
        <p>Carregando detalhes do artista...</p>
      )}
    </div>
  );
};

export default ArtistDetail;
