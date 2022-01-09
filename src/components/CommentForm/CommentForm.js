import React, {useState} from "react";

function Input({onSubmitClick}){
    const [newAuthor, setAuthor] = useState("");
    const [newText, setText] = useState("")

    function handleAuthor(event){
        setAuthor(event.target.value)
      };

      function handleText(event){
        setText(event.target.value);
      }
    
    function handleSubmit(event){
        event.preventDefault();
        onSubmitClick(newAuthor, newText);
    }
    return (
            <form onSubmit={handleSubmit}>
              <input  onChange={handleAuthor} value={newAuthor} />
              <input  onChange={handleText} value= {newText}/>
              <button>Submit</button>
            </form>
          );
}

export default Input;

// import { useState } from "react";

// function Input({ onSubmitClick }) {
//   const [text, setText] = useState("");

//   function handleChange(event) {
//     setText(event.target.value);
//   }

//   function handleSubmit(event) {
//     // Stop the page from refreshing as the form will try and submit and refresh by default
//     event.preventDefault();
//     onSubmitClick(text);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input onChange={handleChange} value={text} />
//       <button>+</button>
//     </form>
//   );
// }

// export default Input;