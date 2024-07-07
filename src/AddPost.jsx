import { useState } from "react";

function AddPost({ count, onHandleAddPost }) {
  return (
    <>
      <button disabled={count > 5} onClick={() => onHandleAddPost(count)}>
        Add{" "}
      </button>
      <div>{`counted posts are ${count + 1}`}</div>
    </>
  );
}

export default AddPost;
