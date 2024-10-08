import {
  FaFacebook,
  FaLinkedin,
  FaOptinMonster,
  FaTwitter,
  FaXing,
} from "react-icons/fa";
import Page from "../assets/helpers/Page";
import EmailFormRestAPI from "../components/form/EmailFormRestAPI";
import Stage from "../components/stage/Stage";
import KamdemStage from "/img/stage_contact.png";

const Contact = () => {
  const itOffers: string[] = [
    "Xing",
    "linkedin",
    "Facebook",
    "Monster",
    "Twitter",
  ];

  const icons = [
    <FaXing />,
    <FaLinkedin />,
    <FaFacebook />,
    <FaOptinMonster />,
    <FaTwitter />,
  ];

  return (
    <>
      <Page>
        <Stage
          preline="Mich kontaktieren"
          headline="Zusammen finden wir eine Lösung für Sie"
          checkmark={itOffers}
          icons={icons}
          imgStageSrc={KamdemStage}
        />
        <EmailFormRestAPI />
      </Page>
    </>
  );
};

export default Contact;
