import React from 'react'

class Header extends React.Component{

    state={color:"black"}
    
    // names=()=>{
    //     return this.props.name.map(function(name){return <Bline name={name}/>})
    // }

    clickhandler=()=>{
        // console.log("beingclicked before",this.state.color)
        // this.state.color="blue"

        if(this.state.color==="black"){
            this.setState({color:"blue"})
        }else{
            this.setState({color:"black"})
        }
        // console.log("beingclicked after",this.state.color)
    }
    
    render(){
        // console.log(this.props)
        // let n = this.props.name.map(function(name){return <Bline name={name}/>})
        console.log("render this now, bitch", this.state)
            return (<div>
                <h1 onClick={this.clickhandler} style={{"borderStyle":"dashed","borderColor":`${this.state.color}`}}>Welcome to our APP</h1> 
                <p>Some Line</p>
            </div>
        )
    }
}

//Adjacent JSX elements
//enclosing tag
//tag => DOM element =>JSX element

export default Header

// this was my first render {/* <h1 onClick={this.clickhandler} style={{"border-style":"dashed","border-color":`${this.state.color}`}}>Welcome to our APP</h1>  */}
// {this.names()}
