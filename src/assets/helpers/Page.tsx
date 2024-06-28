import { ReactNode } from "react";
import Footer from "../../components/footer/Footer";
import PatelotHeader from "../../components/header/PatelotHeader";
import PatelotNavBar from "../../components/navbar/PatelotNavBar";
import Psa from "../../components/psa/Psa";

type PageProps = {
  children: ReactNode;
};

const Page = (props: PageProps) => {
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
      <Psa />
      <PatelotHeader
        namePatelot="Patrick Kamdem"
        rolePaletot="Frontend Entwickler"
      />
      <PatelotNavBar
        items={listElementNavBar}
        heading="navBar"
        onSelectItem={handleSelectItem}
      />
      {props.children}
      <Footer />
    </>
  );
};

export default Page;
