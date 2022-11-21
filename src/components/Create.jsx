// import ReactDOM from 'react-dom/client';
import React from 'react';
import { useState } from 'react';
import "./Create.css";

function Create() {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
  
    const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
        const postURL = "http://localhost:4000/api/staff/" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                content: content,
                dates:[]
            })
        })
        .then(()=>{
            alert('You have been added to the system!');
        })
    }
    return (
      <div>
         <h1>Create notes</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
   
          <form onSubmit={handleSubmit}>
        <label>Create note:
    
<div>
            <input onChange={(e) => setName(e.target.value)} name="title" value={name} autoComplete="off" className='form' placeholder="Note title"></input>
        </div>
        <div >
            <textarea onChange={(e) => setContent(e.target.value)} name="content" rows="4" cols="50" value={content} autoComplete="off" className='form' placeholder="Note content"></textarea>
        </div>
        </label>
        <input type="submit" />
      </form>
      </div>
    
    )
  }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<MyForm />);
  export default Create;

// import React, {useState} from "react";
// import axios from  "axios";

 

// function Create(){
//     const [input, setInput] = useState({
//         title: '',
//         content: ''
//     })

// function handleChange(event){
//     const {name, value} = event.target;
//     setInput(prevInput => {
//         return{
//             ...prevInput,
//             [name]: value
//         }
//     })
// }


// function handleClick(event){
//     event.preventDefault();
//     console.log(input);
//     const newNote = {
//         title: input.title,
//         content: input.content
//     }
//     axios.post('http://localhost:3001/create', newNote)
// }

//      return <div className="container">
//     <h1>Create Notes Page</h1>
//     <form>
//         <div className="form-group">
//             <input onChange={handleChange} name="title" value={input.title} autoComplete="off" className="form-control"placeholder="Note title"></input>
//         </div>
//         <div className="form-group">
//             <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" className="form-control" placeholder="Note content"></textarea>
//         </div>
//         <button onClick={handleClick} className="btn btn-lg btn-info">Add Note</button>
//     </form>
//     </div>
// }

// export default Create;