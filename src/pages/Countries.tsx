import Footer from "../components/footer/Footer";
import PatelotHeader from "../components/header/PatelotHeader";
import PatelotNavBar from "../components/navbar/PatelotNavBar";

const Countries = () => {
  const listElementNavBar: string[] = [
    "Über mich",
    "Projekte",
    "Blog",
    "Kontakt",
    "Hobbys",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // state

  //comportements

  // Render
  return (
    <>
      <PatelotHeader
        namePatelot="Patrick Kamdem"
        rolePaletot="Frontend Entwickler"
      />
      <PatelotNavBar
        items={listElementNavBar}
        heading="navBar"
        onSelectItem={handleSelectItem}
      />
      <div></div>
      <Footer />
    </>
  );
};

export default Countries;
