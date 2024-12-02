import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Editscategories = () => {

  const [scategorie, setScategorie] = useState({ nomscategorie: '', imagescategorie: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchScategories = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/scategories/${id}`);
        setScategorie(response.data);
      } catch (error) {
        console.error("Error fetching Scategorie :", error);
      }
    };
    fetchScategories();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/scategories/${id}`, scategorie);
      navigate('/scategories');
    } catch (error) {
      alert('Erreur ! Modification non effectuée');
      console.error("Error updating sous categorie:", error);
    }
  };


  return (
    <div className="form-container">
      <form className="souscategorie-form" onSubmit={handleSubmit}>
        <h2>Modifier un Sous Categories</h2>

        <div className="form-group">
          <label htmlFor="nomscategorie">Nom de SousCategories</label>
          <input
            type="text"
            id="souscategorie"
            value={scategorie.nomscategorie}
            onChange={(e) => setScategorie({ ...scategorie, nomscategorie: e.target.value })}
            className="form-input"
            placeholder="Nom de SousCategorie"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            value={scategorie.imagescategorie}
            onChange={(e) => setScategorie({ ...scategorie, imagescategorie: e.target.value })}
            className="form-input"
            placeholder="URL de l'image"
            required
          />
          {scategorie.imagescategorie && (
            <img src={scategorie.imagescategorie} alt="Preview" width="70" />
          )}
        </div>

        <button type="submit" className="form-submit-button">Enregistrer</button>
      </form>
    </div>
  )
}

export default Editscategories
