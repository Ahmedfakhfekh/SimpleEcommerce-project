import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Listscategories = () => {
  const {isLoading,setIsLoading}=useState(true)
  const[scategories,setSCategories]=useState([])

  const handleDelete=async(id)=>{
    if(window.confirm("etes vous sure de vouloir supprimer la SousCategorie")){
    await axios.delete(`http://localhost:3001/api/scategories/${id}`)
    .then(res=>{
      setSCategories(scategories.filter(scat=>scat._id!=id))
      console.log(res.data)

    })
    .catch(error=>{
      console.log(error)
    })
  }}






  const fetchscategories=async()=>{
    await axios.get("http://localhost:3001/api/scategories")
    .then(res=>{
     setSCategories(res.data) 
     setIsLoading(false)
     console.log(res.data)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    fetchscategories()
  },[])
  if (isLoading){
    return <div>En Cours de chargement</div>
  }


  return (
    <div>
      <Link to="/scategories/add"><button className='btn btn-success btn-sm'><i class="fa-solid fa-circle-plus"></i> Ajouter</button> </Link>
      <h1>Liste des Souscategories</h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Nom SousCategorie</th>
            <th>Image</th>
            <th>Nom Categorie</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {scategories.map((scat,index)=>
          <tr key={index}>
            <td>{scat.nomscategorie}</td>
            <td><img src={scat.imagescategorie} width={200} height={100}/></td>
            <td>{scat.categorieID.nomcategorie}</td>
            <td><Link to={`/scategories/edit/${scat._id}`}><button className='btn btn-sm btn-warning'><i class="fa-regular fa-pen-to-square"></i> Update</button></Link></td>
            <td><button className='btn btn-sm btn-danger' onClick={()=>handleDelete(scat._id)} ><i class="fa-solid fa-trash"></i> Delete</button></td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Listscategories
