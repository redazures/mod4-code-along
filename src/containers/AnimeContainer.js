import React from 'react'
import Instructor from '../components/Instructor.js'

function AnimeContainer(props){
    // let instructors = lover_names.map(instruct=> <Instructor key={instruct.id} inst={instruct}/>)
    console.log("props in anime",props.instructor.name)
    return(
        <>
        <h1>Anime Container</h1>
        <Instructor inst={props.instructor}/>
        </>
    )
}

export default AnimeContainer

// {/* {instructors} */}