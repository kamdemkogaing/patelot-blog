const Footer = () => {
  return (
    <footer className="bg-[olive] text-white py-10 relative">
      <div className="container mx-auto p-4">
        <div className="w-full">
          <div className="lg:grid lg:grid-rows-1 lg:grid-cols-4 md:grid md:grid-cols-3 md:gird-rows-2 lg:gap-20 flex flex-wrap flex-col lg:pb-0 ">
            <div className="lg:col-start-1 lg:col-end-1 pb-4 md:pr-48 lg:pr-0">
              <div>
                <div className="flex flex-wrap justify-between">
                  <div className="text-base leading-6 w-full font-bold my-6lg:my-0 bright text-black">
                    KAMDEM GmbH
                  </div>
                  <div className="w-full my-2">
                    Ich biete viele Dienstleistungen für Unternehmen und
                    Privatpersonen aller Art an.
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-start-2 lg:col-end-2 lg:row-start-1 md:pr-28 lg:pr-0 lg:ml-10">
              <div>
                <div className="flex flex-wrap justify-between">
                  <div className="text-base leading-6 w-full font-bold my-6 lg:my-0 bright text-black">
                    ICH BIETE AN
                  </div>
                  <div className="w-full my-2">Beratung</div>
                  <div className="w-full my-2">Analyse</div>
                  <div className="w-full my-2">IT - Architektur</div>
                  <div className="w-full my-2">Qualitätssicherung</div>
                  <div className="w-full my-2">Softwareentwicklung</div>
                </div>
              </div>
            </div>
            <div className="lg:col-start-3 lg:col-end-3 lg:row-start-1 md:col-start-1 md:col-end-1 md:row-start-2 lg:ml-10">
              <div>
                <div className="flex flex-wrap justify-between">
                  <div className="text-base leading-6 w-full font-bold my-6 lg:my-0 bright text-black">
                    NÜTZLICHE LINKS
                  </div>
                  <div className="w-full my-2">KAMDEM GmbH</div>
                  <div className="w-full my-2">Yan'son IT Consulting</div>
                  <div className="w-full my-2">PouaHom Germany e.V.</div>
                </div>
              </div>
            </div>
            <div className="lg:col-start-4 lg:col-end-4 col-end-1 md:col-start-3 md:row-start-1 md:col-end-3">
              <div>
                <div className="flex flex-wrap justify-between">
                  <div className="text-base leading-6 w-full font-bold  my-6 lg:my-0 bright text-black">
                    KONTAKT
                  </div>
                  <div className="w-full my-2">Deutschland, Oberkirch</div>
                  <div className="w-full my-2">info@patelot.de</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-12 mb-32 bg-white w-full h-1 border-0 block" />

        <div>
          <div className="mt-8">
            <p className="[&>a]:!tw-text-white">
              © 2024 Patrick Kamdem. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
