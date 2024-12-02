import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Listarticles from './components/articles/Listarticles'
import Insertarticle from './components/articles/Insertarticle'
import Editarticle from './components/articles/Editarticle'
import Viewarticle from './components/articles/Viewarticle'
import Listcategories from './components/categories/Listcategories'
import Insertcategorie from './components/categories/Insertcategorie'
import Editcategorie from './components/categories/Editcategorie'
import Viewcategorie from './components/categories/Viewcategorie'
import Listscategories from './components/scategories/Listscategories'
import Insertscategorie from './components/scategories/Insertscategorie'
import Editscategories from './components/scategories/Editscategories'
import Viewscategories from './components/scategories/Viewscategories'
import Listearticlescard from './components/client/Listearticlescard'
import { CartProvider } from 'use-shopping-cart'

import '@fortawesome/fontawesome-free/css/all.css'
import Menu from './components/Menu'

function App() {

  return (
    <>
    <CartProvider>
    <Router>
      <Menu/>
      <Routes>
        <Route path="/articles" element={<Listarticles/>}/>
        <Route path="/articles/add" element={<Insertarticle/>}/>
        <Route path="/articles/edit/:id" element={<Editarticle/>}/>
        <Route path="/articles/view/:id" element={<Viewarticle/>}/>
        <Route path="/categories" element={<Listcategories/>}/>
        <Route path="/categories/add" element={<Insertcategorie/>}/>
        <Route path="/categories/edit/:id" element={<Editcategorie/>}/>
        <Route path="/categories/view/:id" element={<Viewcategorie/>}/>
        <Route path="/scategories" element={<Listscategories/>}/>
        <Route path="/scategories/add" element={<Insertscategorie/>}/>
        <Route path="/scategories/edit/:id" element={<Editscategories/>}/>
        <Route path="/scategories/view/:id" element={<Viewscategories/>}/>
        <Route path="/client" element={<Listearticlescard/>}/>




      </Routes>
    </Router>
    </CartProvider>
      <div>
        <h1>Bienvenue Dans notre site</h1>
      </div>
    </>
  )
}

export default App
