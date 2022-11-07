import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route, Routes} from "react-router-dom"
import Also from './Component/Alsowork/Also';
import Secure from './Component/SecureTrust/Secure';
import Inresults from './Component/InResult/Inresults';
import Brands from './Component/Brands/Brands';

function App() {
  return (
    <div style={{
      marginTop: "30px",
      marginBottom:"30px"
    }} >
      <Also />
      <Secure />
      {/* <Brands/> */}
      <Inresults/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Also/> } />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
