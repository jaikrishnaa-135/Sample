import React, { useState } from 'react'

const CreatePostForm = () => {

  const[title,setTitle]=useState("");
  const[des,setDes]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();

    localStorage.setItem("title",title)
    localStorage.setItem("description",des)

    setDes("")
    setTitle("")
  }
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" placeholder='Enter the post title...' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <br/>
            <input type="text"placeholder='Enter the description' value={des} onChange={(e)=>setDes(e.target.value)}/>
            <br/>
            <button type='submit'>POST</button>
        </form>
    </div>
  )
}

export default CreatePostForm