import React from 'react'
import {NavLink} from 'react-router-dom'


class Instructor extends React.Component{
    
    instructorClickHandler=()=>{
        this.props.appClickHandler(this.props.inst)
    }

    render(){
        return (
        <NavLink to={`/instructors${this.props.inst.id}`}>
        <p onClick={this.instructorClickHandler}>{this.props.inst.name}</p>
        </NavLink>
        )
    }
}

export default Instructor