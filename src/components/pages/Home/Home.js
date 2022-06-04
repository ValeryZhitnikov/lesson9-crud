import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_HOST_URL+'/posts');

      if (!response.ok) {
        throw new Error(response.status);
      }

      const posts = await response.json();
      setPosts(posts);
    } catch(e) {
      console.error(e);
    }
  }

  const postsList = posts.map(post => {
    return <li key={post.id}>{post.content}</li>;
  })
  return (
    <div className="homePage">
      <h1>Home</h1>
      <Link to="/posts/new" >Новый пост</Link>
      {postsList}
    </div>
  )
}