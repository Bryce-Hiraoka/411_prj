import React, { useState, useEffect } from "react";
import './App.css';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Contact from './pages/Contact';
import Events from './pages/Events';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    // const callBackendAPI = async () => {
    //   try {
    //     const response = await fetch("/loggedin");
    //     if (!response.ok) {
    //       throw new Error("Failed to fetch data");
    //     }
    //     const body = await response.json();
    //     setData(body.message);
    //   } catch (error) {
    //     console.error(error.message);
    //   }
    // };
    // callBackendAPI();
  }, []);
  return (

    <div className="App">
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
    
  );
}
export default App;
