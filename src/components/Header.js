import React from 'react'

class Header extends React.Component{

    state={color:"black"}

    clickhandler=()=>{
        if(this.state.color==="black"){
            this.setState({color:"blue"})
        }else{
            this.setState({color:"black"})
        }
    }
    
    render(){
        console.log("render this now, bitch", this.state)
            return (<div>
                <h1 onClick={this.clickhandler} style={{"borderStyle":"dashed","borderColor":`${this.state.color}`}}>Welcome to our APP</h1> 
                <p>Some Line</p>
            </div>
        )
    }
}

export default Header
