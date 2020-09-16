import React from 'react'


class Instructor extends React.Component{
    
    instructorClickHandler=()=>{
        this.props.appClickHandler(this.props.inst)
    }

    render(){
        // console.log(this.props.appClickHandler)
        return <p onClick={this.instructorClickHandler}>Hi {this.props.inst.name}</p>
    }
}

export default Instructor

// function Instructor(props){
//     console.log(props.appClickHandler)
//     return <p onClick={props.appClickHandler}>Hi {props.inst.name}</p>
// }