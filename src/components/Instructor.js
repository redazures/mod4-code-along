import React from 'react'


class Instructor extends React.Component{
    
    instructorClickHandler=()=>{
        this.props.appClickHandler(this.props.inst)
    }

    // componentDidUpate(){
    //     console.log("c did cmount in Child")
    // } this update 7 times and then contrainer 1 and this 1 more time

    componentDidUpate(){
        console.log("child did updated in Child")
    }

    componentWillUnmount(){
        console.log("unmount in instructir")
    }

    render(){
        return <p onClick={this.instructorClickHandler}>{this.props.inst.name}</p>
    }
}

export default Instructor