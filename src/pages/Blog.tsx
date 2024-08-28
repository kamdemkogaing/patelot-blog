import classNames from "classnames";
import { FaTaxi } from "react-icons/fa";
import Page from "../assets/helpers/Page";
import PostList from "../components/blog/PostList";
import IsLoading from "../components/is-loading/IsLoading";
import Stage from "../components/stage/Stage";
import useDataPostList from "../hooks/useDataPostList";
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
  const { data, isLoading, error } = useDataPostList(
    "http://localhost:8000/posts"
  );

  // comportement

  return (
    <Page>
      <Stage
        preline="Reise Ziele"
        headline="Meine Reiseziele weltweit"
        checkmark={itOffers}
        icons={icons}
        imgStageSrc={KamdemStage}
      />

      <div
        className={classNames({
          "bg-black": !isLoading,
        })}
      >
        <div className="container p-4 mx-auto justify-center items-center">
          {isLoading ? (
            <IsLoading />
          ) : (
            <PostList blogs={data} title="Blogliste" />
          )}
        </div>
      </div>
    </Page>
  );
};

export default Blog;
