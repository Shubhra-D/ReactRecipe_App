
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Common/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Recipe from './Pages/Recipe'
import Login from './Pages/Common/Login'
import Footer from './Pages/Common/Footer'
import Feedback from './Pages/FeedBack'

function App() {
 

  return (
    <>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/meal/:id' element={<Recipe/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/feedback' element={<Feedback/>}/>
      </Routes>
      <Footer/> 
    </>
  )
}

export default App
