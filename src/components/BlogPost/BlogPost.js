import React from "react";

function Post({ title, author, datePosted, text, image, alt }) {
    return <article>
    <h1>{title}</h1>
    <h2>{author}</h2>
    <h4 className="date">{datePosted}</h4>
    <figure className="framePic"> 
    <img className="blogPic" src={image}
     alt = {image.alt}/>
     </figure>
    <p className="blogBody">{text} </p>
    {/* <ul>
    {highlights.map(function(item, index){
      return <li key={index}>{item}</li>
    })}
    </ul> */}
    </article>;
}
export default Post