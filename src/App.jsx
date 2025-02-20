import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pricing from './pages/Pricing' 
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import AppLayout from './components/AppLayout'


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='home' element={<HomePage/>} />
      <Route path='product' element={<Products/>} />
      <Route path='pricing' element={<Pricing/>} />
      <Route path='app' element={<AppLayout/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
  )
}
