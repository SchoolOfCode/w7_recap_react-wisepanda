import React, {useState} from "react";
import "./App.css";
import Post from "../BlogPost/BlogPost";
import blogPost from "../libs/Data";

import commentLists from "../libs/commentList";
import Comment from "../Comment/Comment";

function App() {
  const [post, setPost] = useState(blogPost)
  const [comment, setComment] = useState(commentLists)

  return (
    <div >
     <Post title={post.title} author={post.author} datePosted={post.datePosted} 
     image={post.image} alt={post.alt} text={post.text}/>
     {comment.map(item=> 
      <Comment author={item.author} text={item.text}/>
     )}
    </div>
  );
}

export default App;
