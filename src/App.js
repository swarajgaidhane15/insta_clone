import React, { useState } from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      userName: "tonyStark",
      caption: "I am ironman !!!!",
      imageUrl:
        "https://images.unsplash.com/photo-1566650554919-44ec6bbe2518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    },
    {
      userName: "clintBarton",
      caption: "You didn't see that coming !!!!",
      imageUrl:
        "https://api.discovery.com/v1/images/5c818e436b66d145a86d0926?aspectRatio=16x9&width=1400&key=3020a40c2356a645b4b4",
    },
    {
      userName: "wandaMaximoff",
      caption: "Is that true !!!!",
      imageUrl:
        "https://i.insider.com/5c79a8cfeb3ce837863155f5?width=750&format=jpeg&auto=webp",
    },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt=""
          className="app__headerImage"
        />
      </div>

      {posts.map((post) => (
        <Post
          userName={post.userName}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
