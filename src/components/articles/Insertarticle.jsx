import React, { useEffect, useState } from 'react'
import { Col, Form, FormControl, FormLabel, Row } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Insertarticle = () => {
  const navigate=useNavigate()
  const [articles,setArticle]=useState({})
  const [scat,setScat]=useState([])

  const loadscategorie=async()=>{

    try {
      const res=await axios.get("http://localhost:3001/api/scategories")
      setScat(res.data)
      
    } catch (error) {
      console.log(error)
      
    }
  }
  const handleSave=async(e)=>{
    try{
      e.preventDefault()
      await axios.post("http://localhost:3001/api/articles",articles).then(res=>{console.log(articles)})
      navigate("/articles");
  }catch(error){
    console.log(error)
  }
}


useEffect(()=>{
  loadscategorie()
},[])


  return (
    <div className='col-md6 offset-md-3 border rounded p-4 mt-2 shadow'>
      <h1>Insertion un article</h1>

      <Form>

        <Row className='mb-2'>

        <Form.Group as={Col} md="6" >
        <Form.Label>Nom Article</Form.Label>
        <Form.Control type="text" value={articles.designation} onChange={(e)=>setArticle({...articles,designation:e.target.value})}/>
        </Form.Group>


        <Form.Group as={Col} md="6" >
        <Form.Label>Image Article</Form.Label>
        <Form.Control as="textarea" rows={3} value={articles.imageart} onChange={(e)=>setArticle({...articles,imageart:e.target.value})}/>
        </Form.Group>
        </Row>

        <Row className='mb-2'>

        <Form.Group as={Col} md="6" >
        <Form.Label>Marque</Form.Label>
        <Form.Control type="text" value={articles.marque} onChange={(e)=>setArticle({...articles,marque:e.target.value})}/>
        </Form.Group>

        <Form.Group as={Col} md="6" >
        <Form.Label>Prix</Form.Label>
        <Form.Control type="text" value={articles.prix} onChange={(e)=>setArticle({...articles,prix:e.target.value})}/>
        
        </Form.Group>
        </Row>

        <Row className='mb-2'>
        <Form.Group as={Col} md="6" >
        <Form.Label>Quantite</Form.Label>
        <Form.Control type="text" value={articles.qtestock} onChange={(e)=>setArticle({...articles,qtestock:e.target.value})}/>
        </Form.Group>

        <Form.Group as={Col} md="6" >
        <Form.Label>Reference</Form.Label>
        <Form.Control type="text" value={articles.reference} onChange={(e)=>setArticle({...articles,reference:e.target.value})}/>

        </Form.Group>
        <Form.Group as={Col} md="6">
          <FormLabel>Nom SousCategorie</FormLabel>
          <Form.Control type="select" as="select" placeholder="Sous Categorie" value={articles.scategorieID} onChange={(e)=>setArticle({...articles,scategorieID:e.target.value})}>
            {
              scat.map((sc,index)=>
              <option value={sc._id}>{sc.nomscategorie}</option>
            )
            }
            </Form.Control>
        </Form.Group>
        </Row>


      <button className='btn btn-success btn-sm' onClick={(e)=>handleSave(e)}><i class="fa-solid fa-floppy-disk"></i> Enregister</button>
      <button className='btn btn-danger btn-sm' > <i class="fa-solid fa-xmark"></i> Annuler</button>
    </Form>
      
    </div>
  )
}

export default Insertarticle
