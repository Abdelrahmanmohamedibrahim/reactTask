function PostItem({ post }) {
  const { id, title, completed } = post;
  return (
    <div>
      <p>{`id = ${id}`}</p>
      <p>{`title = ${title}`}</p>
      <p>{`is completed ? ${completed}`}</p>
    </div>
  );
}

export default PostItem;
