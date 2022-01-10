
function CommentList({author, text}){

    return (
        <div>
            <h4>{author}</h4>
            <p>{text}</p>
            <hr/>
        </div>
    )
}

export default CommentList;