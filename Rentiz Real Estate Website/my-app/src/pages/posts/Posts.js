
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './posts.css';
import Post from '../../components/post';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Check out our Facebook Posts for renting Houses, Garments and Software services</h1>
      <h2>Posts</h2>
      <div className="posts-container">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
