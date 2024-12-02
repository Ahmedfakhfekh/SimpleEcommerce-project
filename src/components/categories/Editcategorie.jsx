import React, { useEffect, useState } from 'react'
import { Col, Form, FormControl, FormLabel, Row } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Editcategorie = () => {

  const [categorie, setCategorie] = useState({ nomcategorie: '',imagecategorie: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/categories/${id}`);
        setCategorie(response.data);
      } catch (error) {
        console.error("Error fetching Categorie:", error);
      }
    };
    fetchCategories();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/categories/${id}`, categorie);
      navigate('/categories');
    } catch (error) {
      alert('Erreur ! Modification non effectuée');
      console.error("Error updating categorie:", error);
    }
  };



  return (
    <div className="form-container">
      <form className="article-form" onSubmit={handleSubmit}>
        <h2>Modifier une Categorie</h2>

        <div className="form-group">
          <label htmlFor="nomarticle">Nom de la categorie</label>
          <input
            type="text"
            id="nomarticle"
            value={categorie.nomcategorie}
            onChange={(e) => setCategorie({ ...categorie, nomcategorie: e.target.value })}
            className="form-input"
            placeholder="Nom de la categorie"
            required
          />
        </div>

        

        

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            value={categorie.imagecategorie}
            onChange={(e) => setCategorie({ ...categorie, imagecategorie: e.target.value })}
            className="form-input"
            placeholder="URL de l'image"
            required
          />
          {categorie.imagecategorie && (
            <img src={categorie.imagecategorie} alt="Preview" width="70" />
          )}
        </div>

        <button type="submit" className="form-submit-button">Enregistrer</button>
      </form>
    </div>
  )
}

export default Editcategorie
