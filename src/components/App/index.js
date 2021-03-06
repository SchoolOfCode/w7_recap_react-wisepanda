import React, {useState} from "react";
import "./App.css";

import Post from "../BlogPost/BlogPost";
import blogPost from "../libs/Data";

import CommentList from "../CommentList/CommentList";
import comments from "../libs/comments";

import Input from "../CommentForm/CommentForm";



function App() {
  const [post, setPost] = useState(blogPost)
  const [commentList, setCommentList] = useState(comments)

  function addComment({author, text}) {
    const newComments = {
      // id: comments.length+1,
      author: author,
      text: text,
    }
    console.log(newComments)
    setCommentList([...comments, newComments]);
  }
 
  return (
    <div >
     <Post title={post.title} author={post.author} datePosted={post.datePosted} 
     image={post.image} alt={post.alt} text={post.text}/>
    
     {commentList.map((item)=> 
      <CommentList  author={item.author} text={item.text}/>)}
      <Input onSubmitClick={addComment}/>
      </div>
  );
}

export default App;
