import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header.js";


function App() {
  const lover_names=["Jenn","jimbo","Ian","Jules"]
  return (
    <Header name={lover_names}/>
  );
}

export default App;
