import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js";
import InstructorsContainer from "./containers/InstructorsContainer.js";
import AnimeContainer from "./containers/AnimeContainer.js";


class App extends React.Component{

  state={instructor:{}}

  appClickHandler=(obj)=>{
    console.log("click at me, I am the clicker now",obj)
    this.setState({instructor:obj})
    console.log("this is my instructors", this.state)
  }

    render(){
    return (
      <>
      <Header />
      <InstructorsContainer appClickHandler={this.appClickHandler}/>
      <AnimeContainer instructor={this.state.instructor}/>
      </>
    );
  }
}

export default App;


// function App() {
//   return (
//     <>
//     <Header />
//     <InstructorsContainer/>
//     <AnimeContainer/>
//     </>
//   );
// }