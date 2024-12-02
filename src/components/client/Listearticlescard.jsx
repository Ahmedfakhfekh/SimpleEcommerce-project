import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from './Cards'
const Listarticlecard = () => {
const[articles,setArticles]=useState([])
const fetcharticles=async()=>{
try {
const res=await

axios.get("http://localhost:3001/api/articles")

setArticles(res.data)
} catch (error) {
console.log(error)
}
}
useEffect(()=>{
fetcharticles()
},[])
return (
<div className='container'>
<div style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
  {articles.map((art,index)=>
<Cards article={art} key={index}/>
)
}
</div>
</div>
)
}
export default Listarticlecard