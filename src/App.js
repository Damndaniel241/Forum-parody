import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Details from './pages/Details'
import Subpages from './subpages/Subpages';
import CreateArticle from './pages/CreateArticle' 
import UserProfile from './pages/UserProfile'

function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/header" element={<Header/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/create" element={<CreateArticle/>}/>
      <Route path="/*" element={<Subpages />}/>
      <Route path="/user" element={<UserProfile/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App