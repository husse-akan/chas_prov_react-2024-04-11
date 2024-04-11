// 2. Visa lista med Posts (Inlägg) via API-Anrop (3p)
// Hämta post-data från https://jsonplaceholder.typicode.com/posts.
// Komponenten ska visa titlarna på de första 10 posts.
// Varje titel ska ha en knapp märkt "Visa detaljer".
// När denna knapp klickas på, ska inläggets body visas under sin titel.

import React, { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 10));
      });
  }, []);

  const toggleDetails = (id) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return {
          ...post,
          showDetails: !post.showDetails,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h1>Inlägg</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}{" "}
            <button onClick={() => toggleDetails(post.id)}>
              Visa detaljer
            </button>
            {post.showDetails && (
              <div>
                <p>{post.body}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
