import React, { useState, useEffect } from "react";
import logo from './Asset.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const callBackendAPI = async () => {
      try {
        const response = await fetch("/protected");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const body = await response.json();
        setData(body.message);
      } catch (error) {
        console.error(error.message);
      }
    };
    callBackendAPI();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo" />
        <h1 className="App-title">Welcome to JSA</h1>
        <p style={{ color: "white" }}>{data}</p>
        <a href="http://localhost:5000/auth/google">Authenticate </a>
      </header>
    </div>
  );
}
export default App;
