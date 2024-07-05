import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // Import CSS file for styling
import logo from './adikavi.png'; // Import the image

function App() {
  return (
    <div className="container-fluid">
      <div className="header">
        <img src={logo} alt="Adikavi" className="logo" />
        <div className="blue-line">
       <a href="https://aknu.edu.in" className="h4">HOME</a>
       
        </div>
      </div>
      <BrowserRouter>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ResultPage />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

function ResultPage() {
  return (
    <div className="result-page">
      <h2>UG BSC ALL COURSE IV SEMESTER (REGULAR & BACKLOG 2022 & 2021 A.B) RESULTS - MAY 2024</h2>
      <div className="search-box">
        <label>Enter Hall Ticket Number:</label>
        <input type="text" className="input-field" />
        <label>Enter Your Full Name</label>
        <input type="text" className="name" />
        
        <button className="search-button">Search</button>
      </div>
    </div>
  );
}

export default App;
