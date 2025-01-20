// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Sidebar from './components/SideBar';
// const Home=() => <h1>Home Page</h1>;
const About=() => <h1>About Page</h1>;
function App() {
  
  return (
    <BrowserRouter>
    <Sidebar />
    <div className='content'>
    <Header />
    <main>
      {/* <nav>
        <a href="/"></a>
        <a href ="/about"></a>
        </nav> */}
        <Routes>
          <Route path ='/' element = {<Home />} />
          <Route path ='/about' element = {<About />} />
        </Routes>
        </main>
        <Footer />
        </div>
        </BrowserRouter>
  )
}

export default App
