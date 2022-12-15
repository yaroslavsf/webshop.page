import React from 'react';
import logo from './logo.svg';
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './components/organisms/Navbar'
import { ProductsPage } from './components/pages/ProductsPage';
import { Footer } from './components/organisms/Footer';
import SingleProductPage from './components/pages/SingleProductPage';
import MainPage from './components/pages/MainPage';
import { ErrorPage } from './components/pages/ErrorPage';

function App() {
  return (
    <>
      <div className="bg-white m-5 flex flex-col h-screen">

        <header className='h-10'>
          <Navbar />
        </header>

        <main className="mb-auto h-15">
          <Router>
            <Routes>
              <Route path='/' element={<MainPage/>}>
                <Route path="" element={<ProductsPage/>}/>
                <Route path="products" element={<ProductsPage/>}/>
                <Route path="products/:id/" element={<SingleProductPage/>}/>
              </Route>
              <Route path='*' element={<ErrorPage/>}/>  
            </Routes>
          </Router>
        </main>

        <footer className="h-10" >
          <Footer />
        </footer>


      </div>
    </>
  );
}

export default App;
