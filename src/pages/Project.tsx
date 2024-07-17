import {
  FaJira,
  FaLinux,
  FaMicrosoft,
  FaSave,
  FaSearchengin,
} from "react-icons/fa";
import Page from "../assets/helpers/Page";
import PasswordGenerator from "../components/password-genarator/PasswordGenerator";
import Stage from "../components/stage/Stage";
import Countries from "./Countries";

const Project = () => {
  const itOffers: string[] = [
    "Massenabfrage für Domains",
    "AI Domain Name Generator",
    "BTO-Server",
    "PouaHom Deutschland e.V.",
    "Länder Karte",
  ];

  const icons = [
    <FaSearchengin />,
    <FaJira />,
    <FaLinux />,
    <FaSave />,
    <FaMicrosoft />,
  ];
  return (
    <Page>
      <Stage
        preline="Referenzen"
        headline="Die Projekte, wo ich beteiligt war"
        checkmark={itOffers}
        icons={icons}
      />
      <Countries />
      <PasswordGenerator />
    </Page>
  );
};

export default Project;
