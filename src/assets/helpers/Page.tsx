import { ReactNode } from "react";
import Footer from "../../components/footer/Footer";
import PatelotHeader from "../../components/header/PatelotHeader";
import PatelotNavBar from "../../components/navbar/PatelotNavBar";

type PageProps = {
  children: ReactNode;
};

const Page = (props: PageProps) => {
  const listElementNavBar: string[] = [
    "Über mich",
    "Projekte",
    "Blog",
    "Hobbys",
    "Kontakt",
  ];

  const navBarArray: string[] = [
    "home",
    "projekte",
    "blog",
    "hobbys",
    "kontakt",
  ];

  const handleSelectItem = (item: string) => {};

  return (
    <>
      <PatelotHeader
        namePatelot="Patrick Kamdem"
        rolePaletot="Frontend Entwickler"
      />
      <PatelotNavBar
        items={listElementNavBar}
        itemsLinkText={navBarArray}
        heading="navBar"
        onSelectItem={handleSelectItem}
      />
      {props.children}
      <Footer />
    </>
  );
};

export default Page;
