import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage'
import DashBoard from './pages/DashBoard'
import MainPage from './pages/MainPage'
import Menubar from './components/Menubar'
import { Toaster } from 'react-hot-toast'
import PreviewPage from './pages/PreviewPage'

const App = () => {
  return (
    <BrowserRouter>
      <Menubar/>
      <Toaster/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/dashboard' element={ <DashBoard/> } />
        <Route path='/generate' element={<MainPage/>} />
        <Route path='/preview' element={<PreviewPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
