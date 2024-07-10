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

  return (
    <>
      <Page>
        <Stage
          preline="Meine Hobbys"
          headline="Die Website mit modernen Technologien bauen"
          checkmark={itOffers}
        />
        <PatelotModal />
      </Page>
    </>
  );
};

export default Hobbys;
