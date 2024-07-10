import Page from "../assets/helpers/Page";
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

  return (
    <Page>
      <Stage
        preline="Referenzen"
        headline="Die Projekte, wo ich beteiligt war"
        checkmark={itOffers}
      />
      <Countries />
    </Page>
  );
};

export default Project;
