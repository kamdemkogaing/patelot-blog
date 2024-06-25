import Footer from "./components/footer/Footer";
import PatelotHeader from "./components/header/PatelotHeader";
import PatelotNavBar from "./components/navbar/PatelotNavBar";
import Home from "./pages/Home";

function App() {
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
      <Home />
      <Footer />
    </>
  );
}

export default App;
