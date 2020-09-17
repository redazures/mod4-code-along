import React from 'react'

class Form extends React.Component{

    state={
        name: "",
        mod:""
    }

    change=(e)=>{
        console.log("changelog",e.target.value) // relative to e.target.name.value because we are not at the form level. we are at the bottom of the list.
        this.setState({[e.target.name]:e.target.value})
    }

    render(){
        return(
            <form onSubmit={(e)=>{//console.log("submit this", e.target.name.value //console.log("this is submit handler",this.props)
                e.preventDefault()
                this.props.submit({name: e.target[0].value})
                this.setState({name:"",mod:""})
            }}>
                <input type="text" placeholder="Enter A Lover" name="name" value={this.state.name} onChange={this.change}/><br/><br/>
                <input type="number" placeholder="Enter A Mod Number" name="mod" value={this.state.mod} onChange={this.change}/><br/><br/>
                <input type="submit" value="Create Lovers"/>
            </form>
        )

    }
}

export default Form

//this needs to be a class because we need state and call back functions to protect our information?