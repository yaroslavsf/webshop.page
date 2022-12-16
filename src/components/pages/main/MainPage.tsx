

import { Outlet } from "react-router-dom"
import { Footer } from "../../organisms/Footer";
import { Navbar } from "../../organisms/Navbar";

export const MainPage = () => {
    return (
        <>
         <header className='h-10'>
          <Navbar />
        </header>
        <main className="mb-auto h-15">
        <Outlet/>
        </main>
        <footer className="h-10" >
          <Footer />
        </footer>
            
        </>
    );
}

export default MainPage;