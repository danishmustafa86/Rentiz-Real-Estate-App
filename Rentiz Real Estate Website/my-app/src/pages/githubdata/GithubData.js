import React, { useState } from 'react';
import './GithubData.css';

export default function GithubData() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchUserData = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const onClickHandler = () => {
    if (!username) {
      alert('Please enter a Github username.');
      return;
    }
    fetchUserData(username);
    setUsername('');
  };

  return (
    <div className="github-data-container">
      <h1>Github Data</h1>
      <p>This page will display data fetched from the Github API.</p>
      <div className="input-container">
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Enter Github username"
          className="username-input"
        />
        <button onClick={onClickHandler} className="fetch-button">
          Fetch Data
        </button>
      </div>
      <div className="user-data">
        <h2>User Data</h2>
        {userData ? (
          <div className="user-card">
            <img src={userData.avatar_url} alt="User Avatar" className="avatar" />
            <div className="user-info">
              <p><strong>Name:</strong> {userData.name}</p>
              <p><strong>Username:</strong> {userData.login}</p>
              <p><strong>Followers:</strong> {userData.followers}</p>
              <p><strong>Following:</strong> {userData.following}</p>
              <p><strong>Repositories:</strong> {userData.public_repos}</p>
              <p><strong>Bio:</strong> {userData.bio}</p>
              <p><strong>Location:</strong> {userData.location}</p>
              <p><strong>Company:</strong> {userData.company}</p>
              {userData.blog && (
                <p>
                  <strong>Blog:</strong>{' '}
                  <a href={userData.blog} target="_blank" rel="noopener noreferrer">
                    {userData.blog}
                  </a>
                </p>
              )}
              {userData.twitter_username && (
                <p><strong>Twitter:</strong> {userData.twitter_username}</p>
              )}
            </div>
          </div>
        ) : (
          <p>No user data available. Please fetch a user.</p>
        )}
      </div>
    </div>
  );
}
