import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Listcategories = () => {
  const[categories,setCategories]=useState([])

  const fetchcategories=async()=>{
    await axios.get("http://localhost:3001/api/categories")
    .then(res=>{
     setCategories(res.data) 
     console.log(res.data)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    fetchcategories()
  },[])

  const handleDelete=async(id)=>{
    if(window.confirm("etes vous sure de vouloir supprimer la categorie")){

    await axios.delete(`http://localhost:3001/api/categories/${id}`)
      .then(res=>{
        setCategories(categories.filter(cat=>cat._id!=id))
      })
      .catch(error=>{
        console.log(error)
      })
  }
}
  return (
    <div>
      <Link to="/categories/add"> <button className='btn btn-success btn-sm'><i class="fa-solid fa-circle-plus"></i> Ajouter</button></Link>

      <h1>Liste des categories</h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Nom Categorie</th>
            <th>Image</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat,index)=>
          <tr key={index}>
            <td>{cat.nomcategorie}</td>
            <td><img src={cat.imagecategorie} width={200} height={100}/></td>
            <td><Link to={`/categories/edit/${cat._id}`}><button className='btn btn-sm btn-warning'><i class="fa-regular fa-pen-to-square"></i> Update</button></Link></td>
            <td><button className='btn btn-sm btn-danger' onClick={()=>handleDelete(cat._id)}><i class="fa-solid fa-trash"></i> Delete</button></td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Listcategories
