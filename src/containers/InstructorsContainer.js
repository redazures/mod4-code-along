import React from 'react'
import Instructor from '../components/Instructor.js'
import Form from '../components/Form.js'

class InstructorContainer extends React.Component{

    state={
        instructors:[{id:1,name:"Vincent",Mod:1},{id:2,name:"Jules",Mod: 2},{id:3,name:"Jimbo", Mod:1 },{id:4 , name: "Victor", Mod:3},{id:5, name:"KevX", Mod:4},{id:6,name:"Ian",Mod:6},{id:7,name:"YooJ",Mod:4}]
    }
    
    submit = (obj) => {
        // console.log('forming stuff with inform',obj)
        console.log('old state', this.state.instructors)
        let newArray = [...this.state.instructors,obj]
        this.setState({instructors:newArray})//,()=>console.log("this is new state",this.state.instructors)
    }

    render(){
        let instructors = this.state.instructors.map(instruct=> <Instructor key={instruct.id} inst={instruct} appClickHandler={this.props.appClickHandler}/>)
        // console.log('new state', this.state.instructors)
        return(
            <>
            <Form submit={this.submit}/>
            {instructors}
            </>
        )

    }

}

export default InstructorContainer