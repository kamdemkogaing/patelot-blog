import { useState } from "react";
import { FaTaxi } from "react-icons/fa";
import Page from "../assets/helpers/Page";
import CreatePost from "../components/blog/CreatePost";
import PostList from "../components/blog/PostList";
import Stage from "../components/stage/Stage";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const itOffers: string[] = [
    "Paris, Frankreich: Eiffelturm, Louvre und romantische Atmosphäre.",
    "New York City, USA: Times Square, Central Park und kulturelle Vielfalt.",
    "Costa Rica: Regenwälder, Vulkane und beeindruckende Artenvielfalt.",
    "Athen, Griechenland: Akropolis und antike Ruinen.",
    "Madagaskar: Einzigartige Tierwelt und vielfältige Landschaften.",
  ];

  const icons = [<FaTaxi />, <FaTaxi />, <FaTaxi />, <FaTaxi />, <FaTaxi />];

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
  };

  return (
    <Page>
      <Stage
        preline="Reise Ziele"
        headline="Meine Reiseziele weltweit"
        checkmark={itOffers}
        icons={icons}
      />
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
