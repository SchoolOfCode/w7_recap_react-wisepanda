import React from "react";

function Post({ title, author, datePosted, text, image}) {
    return <article>
    <h1 className="postTitle">{title}</h1>
    <h2 className="postAuthor">{author}</h2>
    <h6 className="date">{datePosted}</h6>
    <figure className="framePic"> 
    <img className="blogPic" src={image.link} alt={image.alt}/>
     </figure>
     <p>{image.alt}</p>
    <p className="blogBody">{text}</p>
    {/* <ul>
    {highlights.map(function(item, index){
      return <li key={index}>{item}</li>
    })}
    </ul> */}
    </article>;
}
export default Post