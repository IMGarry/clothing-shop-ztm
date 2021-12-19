import React from 'react'
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSingUpPage from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInAndSingUpPage />} />
      </Routes>
    </div>
  )
}

export default App
