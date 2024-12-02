import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Insertcategorie = () => {
  const navigate=useNavigate()
  const [categorie,setCategorie]=useState({})
  const handleSave=async(e)=>{
    try{
      e.preventDefault()
      await axios.post("http://localhost:3001/api/categories",categorie).then(res=>{navigate("/categories")})
  }catch(error){
    console.log(error)
  }
}
  return (
    <div>
      <h1>Insertion une categorie</h1>

      <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Nom Categorie</Form.Label>
        <Form.Control type="text" value={categorie.nomcategorie} onChange={(e)=>setCategorie({...categorie,nomcategorie:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Image Categorie</Form.Label>
        <Form.Control as="textarea" rows={3} value={categorie.imagecategorie} onChange={(e)=>setCategorie({...categorie,imagecategorie:e.target.value})}/>
      </Form.Group>
      <button className='btn btn-success btn-sm' onClick={(e)=>handleSave(e)}> Enregister</button>
      <button className='btn btn-danger btn-sm'> Annuler</button>
    </Form>
      
    </div>
  )
}

export default Insertcategorie
