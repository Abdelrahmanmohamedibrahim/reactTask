import { useEffect, useState } from "react";

import "./App.css";
import PostItem from "./PostItem";
import AddPost from "./AddPost";

function FetchingWithUseEffect() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(1);
  function handleAddPost(count) {
    setCount(count + 1);
  }

  useEffect(
    function () {
      fetch(`https://jsonplaceholder.typicode.com/todos/${count}`) // first method,
        .then((response) => response.json())
        .then((json) => setPosts((posts) => [...posts, json]));
    },
    [count]
  );

  return (
    <div>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
      <AddPost onHandleAddPost={handleAddPost} count={count} />
    </div>
  );
}

export default FetchingWithUseEffect;
