import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js";
import InstructorsContainer from "./containers/InstructorsContainer.js";
import AnimeContainer from "./containers/AnimeContainer.js";
import Welcome from "./components/Welcome.js";
import {Route, Switch} from 'react-router-dom'



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
      {/* <Route path='/welcome' render={()=><h1>Welcome to home town</h1>}/> */}
      <Header />
      <Switch>
      <Route path='/welcome' render={()=><Welcome/>}/>
      <Route path='/anime' render={()=><AnimeContainer instructor={this.state.instructor}/>}/>
      <Route path='/instructors' exact render={()=><InstructorsContainer appClickHandler={this.appClickHandler}/>}/>
      </Switch>
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