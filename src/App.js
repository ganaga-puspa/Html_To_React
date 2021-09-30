import React from 'react'
import {BrowserRouter , Route ,Routes} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Faq from './pages/Faq';
import Home from './pages/Home';
import Login from './pages/Login';
import ShopGridSidebarLeft from './pages/Shop-grid-sidebar-left';

function App() {
  return (
    <>
    <div>
       <BrowserRouter>

      <Routes> 

      <Route path='/about' element={ <About/>} />
      <Route path='/' element={ <Home/>} />
      <Route path='/faq' element={ <Faq/>} />
      <Route path='/error' element={ <Error/>} />
      <Route path='/contact' element={ <Contact/>} />
      <Route path='/login' element={ <Login/>} />
      <Route path='/shopGSLeft' element={ <ShopGridSidebarLeft/>} />
         

      </Routes>
      
       
       </BrowserRouter> 

       
      
      
       {/* <Nav />  */}
      {/* <Home /> */}

    </div>
    </>
  )
}

export default App
