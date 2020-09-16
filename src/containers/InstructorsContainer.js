import React from 'react'
import Instructor from '../components/Instructor.js'

function InstructorContainer(props){

    const lover_names=[{id:1 , name: "Jenn"},{id:2, name:"jimbo"},{id:3,name:"Ian"},{id:4,name:"Jules"}]
    let instructors = lover_names.map(instruct=> <Instructor key={instruct.id} inst={instruct} appClickHandler={props.appClickHandler}/>)

    return(
        <>
        {instructors}
        </>
    )

}

export default InstructorContainer