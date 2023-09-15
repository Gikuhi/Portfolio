import Home from './components/Home.jsx'
import './App.css'
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";

function App() {
  return (
      <BrowserRouter>
          <Header>
        <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
        </Routes>
              </Header>
      </BrowserRouter>
  )
}

export default App
