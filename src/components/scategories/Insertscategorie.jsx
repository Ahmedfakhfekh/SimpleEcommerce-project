import React, { useEffect, useState } from 'react'
import { Col, Form, FormControl, FormLabel, Row } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Insertscategorie = () => {

  const navigate=useNavigate()
  const [scat,setSCategorie]=useState({})
  const [cat,setCat]=useState([])

  const loadcategorie=async()=>{

    try {
      const res=await axios.get("http://localhost:3001/api/categories")
      setCat(res.data)
      
    } catch (error) {
      console.log(error)
      
    }
  }

  const handleSave=async(e)=>{
    try{
      e.preventDefault()
      await axios.post("http://localhost:3001/api/scategories",scat).then(res=>{console.log(scat)})
      navigate("/scategories");
  }catch(error){
    console.log(error)
  }
}

useEffect(()=>{
  loadcategorie()
},[])

  return (
    <div className='col-md6 offset-md-3 border rounded p-4 mt-2 shadow'>
      <h1>Insertion une SousCategorie</h1>

      <Form>

        <Row className='mb-2'>
        
          <Form.Group as={Col} md="6">
          <FormLabel>Nom Categorie</FormLabel>
          <Form.Control type="select" as="select" placeholder="Sous Categorie" value={cat.categorieID} onChange={(e)=>setSCategorie({...cat,categorieID:e.target.value})}>
            {
              cat.map((sc,index)=>
              <option value={sc._id}>{sc.nomcategorie}</option>
            )
            }
            </Form.Control>
        </Form.Group>
        </Row>
        <Row className='mb-2'>

        <Form.Group as={Col} md="6" >
        <Form.Label>Image SousCategorie</Form.Label>
        <Form.Control as="textarea" rows={3} value={scat.imagescategorie} onChange={(e)=>setSCategorie({...scat,imagescategorie:e.target.value})}/>
        </Form.Group>


        <Form.Group as={Col} md="6" >
        <Form.Label>Nom SousCategorie</Form.Label>
        <Form.Control type="text" value={scat.nomscategorie} onChange={(e)=>setSCategorie({...scat,nomscategorie:e.target.value})}/>
        </Form.Group>

        </Row>

        


      <button className='btn btn-success btn-sm' onClick={(e)=>handleSave(e)}><i class="fa-solid fa-floppy-disk"></i> Enregister</button>
      <button className='btn btn-danger btn-sm'> <i class="fa-solid fa-xmark"></i> Annuler</button>
    </Form>
      
    </div>
  )
}

export default Insertscategorie
