import { useState } from "react";
import { FaTaxi } from "react-icons/fa";
import Page from "../assets/helpers/Page";
import PostList from "../components/blog/PostList";
import Stage from "../components/stage/Stage";
import KamdemStage from "/img/patelot.png";

const Blog = () => {
  // state
  const icons = [<FaTaxi />, <FaTaxi />, <FaTaxi />, <FaTaxi />, <FaTaxi />];
  const itOffers: string[] = [
    "Paris, Frankreich: Eiffelturm, Louvre und romantische Atmosphäre.",
    "New York City, USA: Times Square, Central Park und kulturelle Vielfalt.",
    "Costa Rica: Regenwälder, Vulkane und beeindruckende Artenvielfalt.",
    "Athen, Griechenland: Akropolis und antike Ruinen.",
    "Madagaskar: Einzigartige Tierwelt und vielfältige Landschaften.",
  ];
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "A Title",
      description: "Content of my post.",
      author: "Patrick",
      date: "12/08/2024",
    },
    {
      id: 2,
      title: "Another Unique Title",
      description: "Content of another post.",
      author: "Ludovic",
      date: "20/08/2024",
    },
    {
      id: 3,
      title: "Yet Another Title",
      description: "Different content here.",
      author: "Maxime",
      date: "22/08/2024",
    },
    {
      id: 4,
      title: "Yet Another Title Jungle",
      description: "Different content here and before.",
      author: "Maxime",
      date: "25/08/2024",
    },
  ]);

  // comportement
  const handleDelete = (id) => {
    // une copie du state
    const newArrayPosts = [...posts];

    // manipuler le state
    const newPosts = newArrayPosts.filter((post) => post.id !== id);
    // modifier le state
    setPosts(newPosts);
  };

  return (
    <Page>
      <Stage
        preline="Reise Ziele"
        headline="Meine Reiseziele weltweit"
        checkmark={itOffers}
        icons={icons}
        imgStageSrc={KamdemStage}
      />

      <div className="bg-black">
        <div className="container p-4 mx-auto justify-center items-center">
          <PostList
            blogs={posts}
            title="Liste des blogs"
            onClick={handleDelete}
          />
        </div>
      </div>
    </Page>
  );
};

export default Blog;
