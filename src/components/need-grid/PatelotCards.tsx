import { Link } from "react-router-dom";

const PatelotCards = () => {
  // state

  //comportements

  //render
  return (
    <div
      className={
        "container mx-auto my-8 p-8 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      }
    >
      <div
        className={
          "justify-between bg-zinc-100 shadow-lg p-8 border border-zinc-300 rounded-2xl flex flex-col gap-4 place-items-stretch"
        }
      >
        <h2 className={"text-3xl font-bold mb-4"}>Über mich</h2>
        <p className={"text-[olive]"}>
          Mein Name ist Patrick Kamdem, und ich bin ein engagierter
          Frontend-Entwickler mit umfassender Erfahrung in der Entwicklung
          moderner, benutzerfreundlicher Webanwendungen. Ich beherrsche eine
          Vielzahl von Technologien, darunter HTML, CSS, XML/XSLT, XSD-Schema,
          JavaScript, JQuery, Node.js, Next.js, React.js, TypeScript, Ajax,
          Bootstrap, Tailwind CSS und daisyUI. Zusätzlich verfüge ich über
          fundierte Kenntnisse in MySQL, UML, XAMPP, UX/UI-Design, Photoshop,
          ADOBE Target Test, SEA/SEO sowie im Bereich E-Commerce und
          Online-Shops.
        </p>
        <div>
          <button
            className={
              "rounded-md bg-[olive]/80 px-4 py-2 text-white font-bold shadow-sm mt-4 hover:border-[oliver] hover:bg-black"
            }
          >
            <Link to="/home">Mehr erfahren...</Link>
          </button>
        </div>
      </div>

      <div
        className={
          "justify-between bg-zinc-100 shadow-lg p-8 border border-zinc-300 rounded-2xl flex flex-col gap-4 place-items-stretch"
        }
      >
        <h2 className={"text-3xl font-bold mb-4"}>Projekte</h2>
        <p className={"text-[olive]"}>Hier sind einige meiner Projekte:</p>
        <ul className={"mt-4"}>
          <li>
            <a href="https://patelot.de" className="text-[olive] font-bold">
              <span className="hover:text-[black]">Projekt 1: patelot.de</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ionos.com/domains/bulk-domain-search"
              className="text-[olive] font-bold"
            >
              <span className="hover:text-[black]">
                Projekt 2: Massenabfrage für Domains
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.ionos.com/ai-domain-name-generator"
              className="text-[olive] font-bold"
            >
              <span className="hover:text-[black]">
                Projekt 3: AI Domain Name Generator
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.ionos.com/servers/vps"
              className="text-[olive] font-bold"
            >
              <span className="hover:text-[black]">Projekt 4: BTO Server</span>
            </a>
          </li>
          <li>
            <a href="http://www.pouahom.de" className="text-[olive] font-bold">
              <span className="hover:text-[black]">
                Projekt 5: PouaHom Deutschland e.V.
              </span>
            </a>
          </li>
          <li>
            <Link to="/country" className={"text-[olive] font-bold"}>
              <span className="hover:text-[black]">
                Projekt 6: Länder Karte
              </span>
            </Link>
          </li>
        </ul>
        <div>
          <button className="rounded-md bg-[olive]/80 px-4 py-2 text-white font-bold shadow-sm mt-4 hover:border-[oliver] hover:bg-black">
            <Link to={"/projekte"}> Mehr erfahren...</Link>
          </button>
        </div>
      </div>

      <div
        className={
          "justify-between bg-zinc-100 shadow-lg p-8 border border-zinc-300 rounded-2xl flex flex-col gap-4 place-items-stretch"
        }
      >
        <h2 className={"text-3xl font-bold mb-4"}>Blog</h2>
        <p className={"text-[olive]"}>
          Willkommen in meinem Blog! Hier teile ich meine Gedanken zu
          Webentwicklung, neuen Technologien und Best Practices.
        </p>
        <div>
          <button className="rounded-md bg-[olive]/80 px-4 py-2 text-white font-bold shadow-sm mt-4 hover:bg-black">
            <Link to={"/blog"}> Mehr erfahren...</Link>
          </button>
        </div>
      </div>

      <div
        className={
          "justify-between bg-zinc-100 shadow-lg p-8 border border-zinc-300 rounded-2xl flex flex-col gap-4 place-items-stretch"
        }
      >
        <h2 className={"text-3xl font-bold mb-4"}>Kontakt</h2>
        <p className={"text-[olive]"}>
          Ich freue mich immer über Nachrichten und Feedback von meinen Lesern!
          Wenn Du Fragen hast oder einfach nur "Hallo" sagen willst, zögere
          nicht, mich zu kontaktieren.
        </p>
        <p className={"text-[olive]"}>So erreichst du mich:</p>
        <ul className="space-y-2 mb-4 list-decimal pl-10">
          <li className="font-bold">
            <a href="mailto:patrick-kamdem@patelot.de">
              patrick-kamdem@patelot.de
            </a>
          </li>
          <li className="font-bold">WhatsApp: +491714170604</li>
          <li className="font-bold">
            <a href="https://www.facebook.com/patrick.kamdem">Facebook</a>
          </li>
          <li className="font-bold">
            <a href="https://www.xing.com/profile/Patrick_Kamdem3">XING</a>
          </li>
        </ul>
        <div>
          <button
            className={
              "rounded-md bg-[olive]/80 px-4 py-2 text-white font-bold shadow-sm mt-4 hover:border-[oliver] hover:bg-black"
            }
          >
            <a href="mailto:patrick-kamdem@patelot.de">Mich kontaktieren</a>
          </button>
        </div>
      </div>

      <div
        className={
          "justify-between bg-zinc-100 shadow-lg p-8 border border-zinc-300 rounded-lg flex flex-col gap-4 place-items-stretch"
        }
      >
        <h2 className={"text-3xl font-bold mb-4"}>Reise</h2>
        <p className={"text-[olive]"}>
          Willkommen zu meinem Reiseblog! Ich bin Patrick, ein
          leidenschaftlicher Reisender, der es liebt, neue Kulturen zu
          entdecken, atemberaubende Landschaften zu erkunden und spannende
          Abenteuer zu erleben. In diesem Blog teile ich meine Reiseerlebnisse,
          Tipps und Fotos von meinen Abenteuern rund um den Globus.
        </p>
        <div>
          <button
            className={
              "rounded-md bg-[olive]/80 px-4 py-2 text-white font-bold shadow-sm mt-4 hover:border-[oliver] hover:bg-black"
            }
          >
            <a href="https://de.wikipedia.org/wiki/Kamerun" target="_blank">
              Mehr erfahren ...
            </a>
          </button>
        </div>
      </div>

      <div
        className={
          " bg-zinc-100 shadow-lg p-8 border border-zinc-300 rounded-lg flex flex-col gap-4 place-items-stretch"
        }
      >
        <h2 className={"text-3xl font-bold mb-4"}>Hobbys</h2>
        <p className={"text-[olive]"}>
          Neben dem Reisen habe ich noch einige andere Leidenschaften, die mein
          Leben bereichern und mir helfen, mich zu entspannen und kreativ zu
          sein. Hier sind einige meiner liebsten Hobbys:
        </p>
        <ul className="space-y-2 mb-4 list-decimal pl-10">
          <li className="font-bold">Meine Kinder</li>
          <li className="font-bold">Computer</li>
          <li className="font-bold">Internet</li>
          <li className="font-bold">Vereine</li>
          <li className="font-bold">Fußball</li>
          <li className="font-bold">Kochen</li>
          <li className="font-bold">Essen</li>
        </ul>
        <div>
          <button className="rounded-md bg-[olive]/80 px-4 py-2 text-white font-bold shadow-sm mt-4 hover:bg-black">
            <Link to={"/hobbys"}> Mehr erfahren...</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatelotCards;

{
  /* <div className={"bottom-4 left-4"}>
    <span className="sm:hidden">XS</span>
    <span className="hidden sm:block md:hidden">XS</span>
    <span className="hidden md:block lg:hidden">MD</span>
    <span className="hidden lg:block xl:hidden">LG</span>
    <span className="hidden xl:block">XL</span>
  </div> */
}
