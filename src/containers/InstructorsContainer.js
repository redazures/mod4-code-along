import React from 'react'
import Instructor from '../components/Instructor.js'
import Form from '../components/Form.js'
import Search from '../components/Search.js'

class InstructorContainer extends React.Component{

    state={
        instructors:[{id:1,name:"Vincent",Mod:1},{id:2,name:"Jules",Mod: 2},{id:3,name:"Jimbo", Mod:1 },{id:4 , name: "Victor", Mod:3},{id:5, name:"KevX", Mod:4},{id:6,name:"Ian",Mod:6},{id:7,name:"YooJ",Mod:4}],
        filtered:[{id:1,name:"Vincent",Mod:1},{id:2,name:"Jules",Mod: 2},{id:3,name:"Jimbo", Mod:1 },{id:4 , name: "Victor", Mod:3},{id:5, name:"KevX", Mod:4},{id:6,name:"Ian",Mod:6},{id:7,name:"YooJ",Mod:4}],
        searchValue: ""
    }
    
    searchFilter = (e)=>{
        console.log(e.target.value)
        this.setState({searchValue: e.target.value})
    }

    filterInstructors=()=>{
        return this.state.filtered.filter(inst=>inst.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    }

    submit = (obj) => {// console.log('forming stuff with inform',obj)
        console.log('old state', this.state.filtered)
        let newArray = [...this.state.filtered,obj]
        this.setState({filtered:newArray})//()=>console.log("this is new state",this.state.instructors)//this console.log is running, but may not reach the end 
    }

    render(){
        let instructors = this.filterInstructors().map(instruct=> <Instructor key={instruct.id} inst={instruct} appClickHandler={this.props.appClickHandler}/>)
        // console.log('new state', this.state.instructors)
        return(
            <>
            <Form submit={this.submit}/>
            <br />
            <Search searchValue={this.state.searchValue} searchHandler={this.searchFilter}/>
            {instructors}
            </>
        )

    }

}

export default InstructorContainer