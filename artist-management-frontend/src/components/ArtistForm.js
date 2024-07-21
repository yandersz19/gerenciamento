import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const ArtistForm = ({ initialData }) => {
  const [formData, setFormData] = useState(initialData || {});
  const history = useHistory();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const apiUrl = initialData ? `http://localhost:8000/api/artists/${initialData.id}/` : 'http://localhost:8000/api/artists/';
    const method = initialData ? 'put' : 'post';

    axios[method](apiUrl, formData)
      .then(() => {
        history.push('/artists');
      })
      .catch(error => {
        console.error('Error saving artist:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name || ''} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email || ''} onChange={handleChange} />
      </label>
      <label>
        Document:
        <input type="text" name="document" value={formData.document || ''} onChange={handleChange} />
      </label>
      <label>
        Document Type:
        <select name="document_type" value={formData.document_type || ''} onChange={handleChange}>
          <option value="cpf">CPF</option>
          <option value="rg">RG</option>
        </select>
      </label>
      <button type="submit">{initialData ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default ArtistForm;
