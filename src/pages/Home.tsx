import Page from "../assets/helpers/Page";
import PatelotCards from "../components/need-grid/PatelotCards";
import Psa from "../components/psa/Psa";
import Stage from "../components/stage/Stage";

const Home = () => {
  // state
  const itOffers: string[] = [
    "Beratung",
    "Analyse",
    "IT-Architektur",
    "Qualitätssicherung",
    "Softwareentwicklung",
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
      />
      <PatelotCards />
    </Page>
  );
};

export default Home;
