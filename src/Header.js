import React from 'react'
import Bline from './Bline'


// function Header (props){
//     console.log(props)
// let n = props.name.map(function(name){return <Bline name={name}/>})
//     return (<div>
//             <h1>Welcome to our APP</h1> 
//             {n}
//             <p>Some Line</p>
//         </div>
//         )
// }


class Header extends React.Component{
    //initialize
    // constructor(props){
    //     super(props)
    //     this.state={color:"blue"}
    // }

    state={color:"black"}
    
    names=()=>{
        return this.props.name.map(function(name){return <Bline name={name}/>})
    }

    clickhandler=()=>{
        console.log("beingclicked before",this.state.color)
        // this.state.color="blue"

        if(this.state.color=="black"){
            this.setState({color:"blue"})
        }else{
            this.setState({color:"black"})
        }
        console.log("beingclicked after",this.state.color)
    }
    
    render(){
        // console.log(this.props)
        // let n = this.props.name.map(function(name){return <Bline name={name}/>})
        console.log("render this now, bitch", this.state)
            return (<div>
                <h1 onClick={this.clickhandler} style={{"border-style":"dashed","border-color":`${this.state.color}`}}>Welcome to our APP</h1> 
                {this.names()}
                <p>Some Line</p>
            </div>
        )
    }
}

//Adjacent JSX elements
//enclosing tag
//tag => DOM element =>JSX element

export default Header