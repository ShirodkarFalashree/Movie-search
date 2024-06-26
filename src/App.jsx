import React from 'react'
import Home from './Home'
import './App.css'
import SingleMovie from './SingleMovie'
import Error from './Error'
// import context from './context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movie/:id' element={<SingleMovie />} />
        <Route path='/*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
    </>
  ) 
}

export default App;