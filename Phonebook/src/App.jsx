import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import Add from './Components/Add/Add'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/add' Component={Add}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
