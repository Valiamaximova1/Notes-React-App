import React, { useEffect, useState } from "react";
import "./Notes.css";


function Notes() { 
    const [text, setText] = useState([ ]);
  
    const fetchData = () => {
      return fetch("http://localhost:4000/api/staff/")
            .then((response) => response.json())
            .then((text) => setText(text));
    }
  
    useEffect(() => {
      fetchData();
    })
  
    return (
      <main>
        <div>
             <h1>Notes titles</h1>
        <ol>
          { text.length > 0 && text.map((userObj, index) => (
            <li><h4 key={userObj.id}>{userObj.text.name}</h4>  </li>
              
                
             
            ))}
        </ol>
        </div>
     
      </main>
    );
  }

export default Notes;