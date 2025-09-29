import React, { useState } from 'react'

const CreatePostForm = () => {

  const[title,setTitle]=useState("");
  const[des,setDes]=useState("");
  const[image,setImage]=useState(null)
  const handleSubmit=(e)=>{
    e.preventDefault();

    localStorage.setItem("title",title)
    localStorage.setItem("description",des)
    localStorage.setItem("image",image)

    setDes("")
    setTitle("")
  }
   const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); 
    }
    
  };
  return (
    <div><center>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" placeholder='Enter the post title...' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <br/>
            <input type="text"placeholder='Enter the description' value={des} onChange={(e)=>setDes(e.target.value)}/>
            <br/>
            <input placeholder="upload image" type="file" id="imageUpload"  onChange={(e)=>handleImageChange(e)} name="image" accept="image/*"></input>
           <br/> <button type='submit'>POST</button>
            
        </form></center>
    </div>
  )
}

export default CreatePostForm