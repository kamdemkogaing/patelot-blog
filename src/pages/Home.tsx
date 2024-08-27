import {
  FaJira,
  FaLinux,
  FaSave,
  FaSearchengin,
  FaTwitter,
} from "react-icons/fa";
import Page from "../assets/helpers/Page";
import PatelotCards from "../components/need-grid/PatelotCards";
import Psa from "../components/psa/Psa";
import Stage from "../components/stage/Stage";
import KamdemStage from "/img/patelot.png";

const Home = () => {
  // state
  const itOffers: string[] = [
    "Beratung",
    "Analyse",
    "IT-Architektur",
    "Qualitätssicherung",
    "Softwareentwicklung",
  ];

  const icons = [
    <FaSearchengin />,
    <FaJira />,
    <FaLinux />,
    <FaSave />,
    <FaTwitter />,
  ];

  // comportement

  // render
  return (
    <Page>
      <Psa />
      <Stage
        preline="IT Lösungen"
        headline="Eine Website mit modernen Technologien bauen"
        checkmark={itOffers}
        icons={icons}
        imgStageSrc={KamdemStage}
      />
      <PatelotCards />
    </Page>
  );
};

export default Home;
