import { useState } from "react";
import Page from "../assets/helpers/Page";
import CreatePost from "../components/blog/CreatePost";
import PostList from "../components/blog/PostList";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
  };

  return (
    <Page>
      <div className="container mx-auto my-10 justify-center items-center lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 lg:gap-2 md:gap-2 grid grid-cols-1 gap-10">
        <div className="bg-[olive] rounded-xl m-2">
          <CreatePost addPost={addPost} />
          <PostList posts={posts} />
        </div>
        <div className="scale-75">
          <img src="./img/pk_logo_transparent.png" alt="" />
        </div>
      </div>
    </Page>
  );
};

export default Blog;
