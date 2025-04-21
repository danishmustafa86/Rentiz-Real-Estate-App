
import React, { useState, useEffect } from 'react'
import './posts.css';
import Post from '../../components/post';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../store/slices/posts.slice';

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.postsSlice.posts);
  const error = useSelector((store) => store.postsSlice.error);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Check out our Facebook Posts for renting Houses, Garments and Software services</h1>
      <h2>Posts</h2>
      {error && <p style={{ color: 'red' }}>Error fetching posts: {error}</p>}
      <button onClick={() => dispatch(fetchposts())}>Fetch Posts</button>
      <div className="posts-container">
        {posts.length > 0 ? (
          posts.slice(1,3).map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    </div>
  );
}
