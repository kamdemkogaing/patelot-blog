import {
  FaJira,
  FaLinux,
  FaSave,
  FaSearchengin,
  FaTwitter,
} from "react-icons/fa";
import Page from "../assets/helpers/Page";
import Card from "../components/card/Card";
import Psa from "../components/psa/Psa";
import Stage from "../components/stage/Stage";
import KamdemStage from "/img/stage_patelot.png";

const Home = () => {
  // state
  const itOffers: string[] = [
    "Beratung",
    "Analyse",
    "IT-Architektur",
    "Qualitätssicherung",
    "Softwareentwicklung",
  ];

  const icons = [
    <FaSearchengin />,
    <FaJira />,
    <FaLinux />,
    <FaSave />,
    <FaTwitter />,
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
        icons={icons}
        imgStageSrc={KamdemStage}
      />
      <div className="bg-black">
        <div className="container mx-auto p-8">
          <div className="grid md:grid-cols-3 gap-10 ">
            <Card
              image="/img/web_patelot.jpg"
              title="Über mich"
              linkText="home"
              buttonText="Mehr erfahren ..."
            >
              <span>
                Mein Name ist <span className="font-bold">Patrick Kamdem</span>,
                und ich bin ein engagierter Frontend-Entwickler mit umfassender
                Erfahrung in der Entwicklung moderner, benutzerfreundlicher
                Webanwendungen.
              </span>
              <span>
                Ich beherrsche eine Vielzahl von Technologien, darunter{" "}
                <span className="font-bold">
                  HTML, CSS, XML/XSLT, XSD-Schema, JavaScript, JQuery, Node.js,
                  Next.js, React.js, TypeScript, Ajax, Bootstrap, Tailwind CSS
                  und daisyUI
                </span>
                . Zusätzlich verfüge ich über fundierte Kenntnisse in{" "}
                <span className="font-bold">
                  MySQL, UML, XAMPP, UX/UI-Design, Photoshop, ADOBE Target Test,
                  SEA/SEO{" "}
                </span>
                sowie im Bereich E-Commerce und Online-Shops.
              </span>
            </Card>
            <Card
              image="/img/projekt_patelot.jpg"
              title="Meine Projekte"
              linkText="projekte"
              buttonText="Mehr erfahren ..."
            >
              <span>
                Ich habe Erfahrung in der Frontend-Entwicklung, insbesondere in
                der Gestaltung und Implementierung benutzerfreundlicher und
                reaktionsfähiger Webanwendungen.
              </span>
              <span>
                Meine Projekte umfassen die Entwicklung von UI-Komponenten mit
                modernen JavaScript-Frameworks wie React sowie die Optimierung
                der Performance und Zugänglichkeit von Webseiten. Ich lege
                großen Wert auf sauberen, gut strukturierten Code und arbeite
                eng mit Design- und Backend-Teams zusammen, um nahtlose
                Benutzererfahrungen zu schaffen.
              </span>
            </Card>
            <Card
              image="/img/blog_patelot.jpg"
              title="Blogs"
              linkText="blog"
              buttonText="Mehr erfahren ..."
            >
              Willkommen in meinem Blog! Hier teile ich meine Gedanken zu
              Webentwicklung, neuen Technologien und Best Practices.
            </Card>
            <Card
              image="/img/kontakt_patelot.jpg"
              title="Kontakt"
              linkText="mailto:patrick-kamdem@patelot.de"
              isExternLink={true}
              buttonText="Mich kontaktieren"
            >
              Ich freue mich immer über Nachrichten und Feedback von meinen
              Lesern! Wenn Du Fragen hast oder einfach nur 'Hallo' sagen willst,
              zögere nicht, mich zu kontaktieren.
            </Card>
            <Card
              image="/img/travel_patelot.jpg"
              title="Meine Reise"
              linkText="https://de.wikipedia.org/wiki/Kamerun"
              buttonText="Mehr erfahren ..."
              isExternLink={true}
            >
              Willkommen zu meinem Reiseblog! Ich bin Patrick, ein
              leidenschaftlicher Reisender, der es liebt, neue Kulturen zu
              entdecken, atemberaubende Landschaften zu erkunden und spannende
              Abenteuer zu erleben. In diesem Blog teile ich meine
              Reiseerlebnisse, Tipps und Fotos von meinen Abenteuern rund um den
              Globus.
            </Card>
            <Card
              image="/img/hobby_patelot.jpg"
              title="Hobbies"
              linkText="hobbys"
              buttonText="Mehr erfahren ..."
            >
              Neben dem Reisen habe ich noch einige andere Leidenschaften, die
              mein Leben bereichern und mir helfen, mich zu entspannen und
              kreativ zu sein. Hier sind einige meiner liebsten Hobbys: Meine
              Kinder, Computer, Internet, Vereine, Fußball, Kochen, Essen.
            </Card>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;
