import React from 'react'
import Instructor from '../components/Instructor.js'

function InstructorContainer(props){

    const loves=[{id:1,name:"Vincent"},{id:2,name:"Jules"},{id:3,name:"Jimbo"},{id:4 , name: "Victor"},{id:5, name:"KevX"},{id:6,name:"Ian"},{id:7,name:"YooJ"}]
    let instructors = loves.map(instruct=> <Instructor key={instruct.id} inst={instruct} appClickHandler={props.appClickHandler}/>)

    return(
        <>
        {instructors}
        </>
    )

}

export default InstructorContainer