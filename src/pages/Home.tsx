const Home = () => {
  // state

  // comportement

  //render
  return (
    <div
      className={
        "container mx-auto my-8 p-8 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      }
    >
      <div
        className={
          "bg-zinc-100 shadow-lg p-8 border border-zinc-300 rounded-2xl flex flex-col gap-4 place-items-stretch"
        }
      >
        {/* <div className={"bottom-4 left-4"}>
          <span className="sm:hidden">XS</span>
          <span className="hidden sm:block md:hidden">XS</span>
          <span className="hidden md:block lg:hidden">MD</span>
          <span className="hidden lg:block xl:hidden">LG</span>
          <span className="hidden xl:block">XL</span>
        </div> */}

        <h2 className={"text-3xl font-bold mb-4"}>Über mich</h2>
        <p className={"text-[olive]"}>
          Ich bin Patrick Kamdem, ein leidenschaftlicher Frontend Entwickler mit
          Erfahrung in der Erstellung moderner und benutzerfreundlicher
          Webanwendungen. Meine Fähigkeiten umfassen HTML, CSS, XML/XSLT,
          XSD-Schema, JavaScript, JQuery, Node.js, React.js, TypeScript, Ajax,
          Bootstrap, MySQL, UML, XAMPP, Photoshop, UX, UI.
        </p>
        <div>
          <button
            className={
              "rounded-md bg-[olive]/80 px-4 py-2 text-white font-bold shadow-sm mt-4 hover:bg-white hover:text-[olive] hover:border-4 hover:border-[oliver]"
            }
          >
            Mehr erfahren ...
          </button>
        </div>
      </div>

      <div
        className={
          "bg-zinc-100 shadow-lg p-8 border border-zinc-300 rounded-2xl flex flex-col gap-4 place-items-stretch"
        }
      >
        <h2 className={"text-3xl font-bold mb-4"}>Projekte</h2>
        <p className={"text-[olive]"}>Hier sind einige meiner Projekte:</p>
        <ul className={"mt-4"}>
          <li>
            <a href="https://patelot.de" className="text-[olive] font-bold">
              <span className="hover:text-[#f4f]">Projekt 1: patelot.de</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.ionos.com/domains/bulk-domain-search"
              className="text-[olive] font-bold"
            >
              <span className="hover:text-[#f4f]">
                Projekt 2: Massenabfrage für Domains
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.ionos.com/ai-domain-name-generator"
              className="text-[olive] font-bold"
            >
              <span className="hover:text-[#f4f]">
                Projekt 3: AI Domain Name Generator
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.ionos.com/servers/vps"
              className="text-[olive] font-bold"
            >
              <span className="hover:text-[#f4f]">Projekt 4: BTO Server</span>
            </a>
          </li>
        </ul>
        <div>
          <button
            className={
              "rounded-md bg-[olive]/80 px-4 py-2 text-white font-bold shadow-sm mt-4 hover:bg-white hover:text-[olive] hover:border-4 hover:border-[oliver]"
            }
          >
            Mehr erfahren ...
          </button>
        </div>
      </div>

      <div
        className={
          " bg-zinc-100 shadow-lg p-8 border border-zinc-300 rounded-2xl flex flex-col gap-4 place-items-stretch"
        }
      >
        <h2 className={"text-3xl font-bold mb-4"}>Blog</h2>
        <p className={"text-[olive]"}>
          Willkommen in meinem Blog! Hier teile ich meine Gedanken zu
          Webentwicklung, neuen Technologien und Best Practices.
        </p>
        <div>
          <button
            className={
              "rounded-md bg-[olive]/80 px-4 py-2 text-white font-bold shadow-sm mt-4 hover:bg-white hover:text-[olive] hover:border-4 hover:border-[oliver]"
            }
          >
            Mehr erfahren ...
          </button>
        </div>
      </div>

      <div
        className={
          " bg-zinc-100 shadow-lg p-8 border border-zinc-300 rounded-2xl flex flex-col gap-4 place-items-stretch"
        }
      >
        <h2 className={"text-3xl font-bold mb-4"}>Kontakt</h2>
        <p className={"text-[olive]"}>
          Du kannst mich unter der folgenden E-Mail-Adresse erreichen:
        </p>
        <div>
          <button
            className={
              "rounded-md bg-[olive]/80 px-4 py-2 text-white font-bold shadow-sm mt-4 hover:bg-white hover:text-[olive] hover:border-4 hover:border-[oliver]"
            }
          >
            Mehr erfahren ...
          </button>
        </div>
      </div>

      <div
        className={
          " bg-zinc-100 shadow-lg p-8 border border-zinc-300 rounded-lg flex flex-col gap-4 place-items-stretch"
        }
      >
        <h2 className={"text-3xl font-bold mb-4"}>Reise</h2>
        <p className={"text-[olive]"}>
          Willkommen in meinem Blog! Hier teile ich meine Gedanken zu
          Webentwicklung, neuen Technologien und Best Practices.
        </p>
        <div>
          <button
            className={
              "rounded-md bg-[olive]/80 px-4 py-2 text-white font-bold shadow-sm mt-4 hover:bg-white hover:text-[olive] hover:border-4 hover:border-[oliver]"
            }
          >
            Mehr erfahren ...
          </button>
        </div>
      </div>

      <div
        className={
          " bg-zinc-100 shadow-lg p-8 border border-zinc-300 rounded-lg flex flex-col gap-4 place-items-stretch"
        }
      >
        <h2 className={"text-3xl font-bold mb-4"}>Hobbies</h2>
        <p className={"text-[olive]"}>In meiner Freizeit genieße ich:</p>
        <div>
          <button
            className={
              "rounded-md bg-[olive]/80 px-4 py-2 text-white font-bold shadow-sm mt-4 hover:bg-white hover:text-[olive] hover:border-4 hover:border-[oliver]"
            }
          >
            Mehr erfahren ...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
