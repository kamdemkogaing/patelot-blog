import {
  FaInternetExplorer,
  FaJira,
  FaLinux,
  FaSave,
  FaTelegramPlane,
} from "react-icons/fa";
import PatelotModal from "../assets/helpers/Baustelle";
import Page from "../assets/helpers/Page";
import Stage from "../components/stage/Stage";

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
        />
        <PatelotModal />
      </Page>
    </>
  );
};

export default Hobbys;
