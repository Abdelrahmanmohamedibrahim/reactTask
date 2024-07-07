import { useState } from "react";
import { useQuery } from "react-query";
import PostItem from "./PostItem";
import AddPost from "./AddPost";

function FetchingWithReactQuery() {
  const [count, setCount] = useState(1);
  const [posts, setPosts] = useState([]);

  const { data, error, isLoading, isError } = useQuery(
    ["posts", count],
    async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${count}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setPosts((posts) => [...posts, data]);
    }
  );
  function handleAddPost(count) {
    setCount(count + 1);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
      <AddPost onHandleAddPost={handleAddPost} count={count} />
    </div>
  );
}

export default FetchingWithReactQuery;
