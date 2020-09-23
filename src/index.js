import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

// const lover_names=["Jenn","jimbo","Ian","Jules"]
// let n = names.map(function(name){return <Bline name={name}/>})
// console.log(n)

ReactDOM.render(
 <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
