const Post = ({ post }) => {
  return (
    <div className="p-4">
      <h2 className="font-bold underline">{post.title}:</h2>
      <p className="italic ">{post.content}</p>
    </div>
  );
};

export default Post;
