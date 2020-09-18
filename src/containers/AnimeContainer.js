import React from 'react'
import Instructor from '../components/Instructor.js'

function AnimeContainer(props){
    console.log("props in anime",Object.keys(props.instructor))
    return(
        <>
        {Object.keys(props.instructor).length===0 ? <h1>No instructors</h1> :
        <>
        <h1>Anime Container</h1>
        <Instructor inst={props.instructor}/>
        </>
        }
        </>
    )
}

export default AnimeContainer