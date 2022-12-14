import React from 'react';
import logo from './logo.svg';
import './App.css'
import { Navbar } from './components/organisms/Navbar'
import { Main } from './components/organisms/Main';
import { Footer } from './components/organisms/Footer';
function App() {
  return (
    <>
      <div className="bg-white m-5 flex flex-col h-screen">

        <header className='h-10'>
          <Navbar />
        </header>

        <main className="mb-auto h-15">
          <Main />
        </main>

        <footer className="h-10" >
          <Footer />
        </footer>


      </div>
    </>
  );
}

export default App;
