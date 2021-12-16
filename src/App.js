import React from 'react'
import './App.css';
import HomePage from './components/pages/homepage/homepage.component'
import ShopPage from './components/pages/shop/shop.component';

import { BrowserRouter,
  Route,
  Routes,
  Outlet,
  Link } from 'react-router-dom'


function App() {
  return (
    
    <div>
     
       <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
       </Routes>

    </div>
    
  );
}

export default App;
