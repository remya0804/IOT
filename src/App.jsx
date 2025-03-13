import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Plant from './pages/Plant'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/plant' element={<Plant />}/>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
      {/* <Hero /> */}
    </div>  
  )
}

export default App