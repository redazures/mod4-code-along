import React from 'react'


class Instructor extends React.Component{
    
    instructorClickHandler=()=>{
        this.props.appClickHandler(this.props.inst)
    }

    render(){
        return <p onClick={this.instructorClickHandler}>Hi {this.props.inst.name}</p>
    }
}

export default Instructor