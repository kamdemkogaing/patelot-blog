import {
  FaInternetExplorer,
  FaJira,
  FaLinux,
  FaSave,
  FaTelegramPlane,
} from "react-icons/fa";
import Baustelle from "../assets/helpers/Baustelle";
import Page from "../assets/helpers/Page";
import Stage from "../components/stage/Stage";
import KamdemStage from "/img/stage_hobby.png";

const Hobbys = () => {
  const itOffers: string[] = [
    "Reisen",
    "Vereine",
    "Essen",
    "Computer",
    "Internet",
  ];

  const icons = [
    <FaTelegramPlane />,
    <FaJira />,
    <FaLinux />,
    <FaSave />,
    <FaInternetExplorer />,
  ];

  return (
    <>
      <Page>
        <Stage
          preline="Meine Hobbys"
          headline="Die Website mit modernen Technologien bauen"
          checkmark={itOffers}
          icons={icons}
          imgStageSrc={KamdemStage}
        />
        <Baustelle />
      </Page>
    </>
  );
};

export default Hobbys;
