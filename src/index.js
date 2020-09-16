import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const lover_names=["Jenn","jimbo","Ian","Jules"]
// let n = names.map(function(name){return <Bline name={name}/>})
// console.log(n)

ReactDOM.render(
 <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
