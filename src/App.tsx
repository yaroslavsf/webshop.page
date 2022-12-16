import React from 'react';
import logo from './logo.svg';
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './components/organisms/Navbar'
import { ProductsPage } from './components/pages/main/ProductsPage';
import { Footer } from './components/organisms/Footer';
import SingleProductPage from './components/pages/main/SingleProductPage';
import MainPage from './components/pages/main/MainPage';
import { ErrorPage } from './components/pages/main/ErrorPage';
import { LoginPage } from './components/pages/auth/LoginPage';
import { AuthPage } from './components/pages/auth/AuthPage';

function App() {
  return (
    <>
      <div className="bg-white m-5 flex flex-col h-screen">
      <Router>   
            <Routes>
              <Route path='/' element={<MainPage/>}>
                <Route path="" element={<ProductsPage/>}/>
                <Route path="products" element={<ProductsPage/>}/>
                <Route path="products/:id/" element={<SingleProductPage/>}/>
              </Route>
              <Route path='/auth' element={<AuthPage/>}>
                  <Route path='' element={<LoginPage/>}/>
                  <Route path='login' element={<LoginPage/>}/>
                  <Route path='registration' element={<LoginPage/>}/>
              </Route>
              <Route path='*' element={<ErrorPage/>}/>  
            </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
