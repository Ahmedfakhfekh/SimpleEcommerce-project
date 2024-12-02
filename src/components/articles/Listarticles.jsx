import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Listarticles = () => {
  const[articles,setArticles]=useState([])
  const[isLoading,setIsLoading]=useState(true)

  const fetcharticles=async()=>{
    await axios.get("http://localhost:3001/api/articles")
    .then(res=>{
      setArticles(res.data)
      setIsLoading(false)
      console.log(res.data)

    })
    .catch(error=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    fetcharticles()
  },[])

  const handleDelete=async(id)=>{
    if(window.confirm("etes vous sure de vouloir supprimer l'article")){
    await axios.delete(`http://localhost:3001/api/articles/${id}`)
    .then(res=>{
      setArticles(articles.filter(art=>art._id!=id))
      console.log(res.data)

    })
    .catch(error=>{
      console.log(error)
    })
  }}

  if(isLoading){
    return <div>En cours de chargement</div>
  }

  return (
    <div>
      <Link to="/articles/add"> <button className='btn btn-success btn-sm'><i class="fa-solid fa-circle-plus"></i> Ajouter</button></Link>      <h1>Liste des articles</h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Designation</th>
            <th>Image</th>
            <th>Marque</th>
            <th>Prix</th>
            <th>Quantite</th>
            <th>Reference</th>
            <th>Nom Sous Categories</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((art,index)=>
          <tr key={index}>
            <td>{art.designation}</td>
            <td><img src={art.imageart} width={200} height={100}/></td>
            <td>{art.marque}</td>
            <td>{art.prix}</td>
            <td>{art.qtestock}</td>
            <td>{art.reference}</td>
            <td>{art.scategorieID.nomscategorie}</td>
            <td><Link to={`/articles/edit/${art._id}`}><button className='btn btn-sm btn-warning'><i class="fa-regular fa-pen-to-square"></i> Update</button></Link></td>
            <td><button className='btn btn-sm btn-danger'onClick={()=>handleDelete(art._id)}><i class="fa-solid fa-trash"></i> Delete</button></td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Listarticles
