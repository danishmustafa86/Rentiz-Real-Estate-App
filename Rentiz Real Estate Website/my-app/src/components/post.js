import React, {useState} from 'react'

export default function Post({post}) {
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const displayComments = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
            const data = await response.json();
            setComments(data);
            setShowComments(true);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    }
  return (
    <div>
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>{post.title}</h3>
      <img src={`https://picsum.photos/200/300?random=${post.id}`} alt="Post" style={{ width: "10%", height: "auto" }} />
      <p>{post.body}</p>
      <button onClick={displayComments}>Display Comments</button>
    </div>
    {showComments && (
        <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
          <h4>Comments</h4>
          {comments.map((comment) => (
            <div key={comment.id} style={{ border: "1px solid green", padding: "5px", margin: "5px" }}>
              <p><strong>{comment.name}</strong></p>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    <button onClick={displayComments}>Display Comments</button>
    </div>
  )
}
