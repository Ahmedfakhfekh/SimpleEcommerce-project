import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const Editarticle = () => {
  const [article, setArticle] = useState({ nomarticle: '', description: '', prix: 0, image: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/articles/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };
    fetchArticle();
  }, [id]);

  const handleUpdate = async (event) => {
    try {
      event.preventDefault();
      await axios.put(`http://localhost:3001/api/articles/${id}`, article);
      navigate('/articles');
    } catch (error) {
      alert('Erreur ! Modification non effectuée');
      console.error("Error updating article:", error);
    }
  };

  return (
    <div className="form-container">
      <form className="article-form" onSubmit={handleUpdate}>
        <h2>Modifier un article</h2>

        <div className="form-group">
          <label htmlFor="nomarticle">Nom de l'article</label>
          <input
            type="text"
            id="nomarticle"
            value={article.nomarticle}
            onChange={(e) => setArticle({ ...article, nomarticle: e.target.value })}
            className="form-input"
            placeholder="Nom de l'article"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={article.description}
            onChange={(e) => setArticle({ ...article, description: e.target.value })}
            className="form-input"
            placeholder="Description de l'article"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="prix">Prix</label>
          <input
            type="number"
            id="prix"
            value={article.prix}
            onChange={(e) => setArticle({ ...article, prix: e.target.value })}
            className="form-input"
            placeholder="Prix de l'article"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            value={article.image}
            onChange={(e) => setArticle({ ...article, image: e.target.value })}
            className="form-input"
            placeholder="URL de l'image"
            required
          />
          {article.image && (
            <img src={article.image} alt="Preview" width="70" />
          )}
        </div>

        <button type="submit" className="form-submit-button">Enregistrer</button>
      </form>
    </div>
  );
};

export default Editarticle;