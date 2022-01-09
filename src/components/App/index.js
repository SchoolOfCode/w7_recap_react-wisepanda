import React, {useState} from "react";
import "./App.css";
import Post from "../BlogPost/BlogPost";
import blogPost from "../libs/Data";

function App() {
  const [post, setPost] = useState(blogPost)
  return (
    <div >
     <Post title={post.title} author={post.author} datePosted={post.datePosted} 
     image={post.image} alt={post.image.alt} text={post.text}/>
    </div>
  );
}

export default App;
