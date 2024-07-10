import Page from "../assets/helpers/Page";
import EmailFormRestAPI from "../components/form/EmailFormRestAPI";
import Stage from "../components/stage/Stage";

const Contact = () => {
  const itOffers: string[] = [
    "Xing",
    "linkedin",
    "Facebook",
    "Monster",
    "Twitter",
  ];

  return (
    <>
      <Page>
        <Stage
          preline="Mich kontaktieren"
          headline="Zusammen finden wir eine Lösung für Sie"
          checkmark={itOffers}
        />
        <EmailFormRestAPI />
      </Page>
    </>
  );
};

export default Contact;
