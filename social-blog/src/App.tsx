// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const Home=() => <h1>Home Page</h1>;
const About=() => <h1>About Page</h1>;
function App() {
  
  return (
    <BrowserRouter>
    <div>
      <nav>
        <a href="/">Home</a>
        <a href ="/about">About</a>
        </nav>
        <Routes>
          <Route path ='/' element = {<Home />} />
          <Route path ='/about' element = {<About />} />
        </Routes>
        </div>
        </BrowserRouter>
  )
}

export default App
