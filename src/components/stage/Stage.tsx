type StageProps = {
  preline?: string;
  headline?: string;
  checkmark?: string[];
  icons?: any[];
};

const Stage = (props: StageProps) => {
  // state

  // comportement

  // render
  return (
    <div className="bg-gradient-to-br from-[#f4f4f4] to-[olive]">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-16 justify-center items-center -mx-12 md:-mx-0 lg:-mx-0 xl:-mx-0">
          <div className="px-24 w-full md:w-1/2 lg:w-7/12 md:min-h-10 mb-12">
            <h1 className="block mb-4 text-lg text-black font-sans-regular">
              {props?.preline}
            </h1>
            <h2 className="block mb-20 font-overpass-regular lg:text-6xl text-4xl">
              {props?.headline}
            </h2>
            <div className="my-4 space-y-12 text-md">
              <ul className="mb-4">
                {props.checkmark.map((item, index) => {
                  return (
                    <li key={`index-${index}`} className="flex mb-3">
                      <span className="mt-2">{props?.icons[index]}</span>
                      <span className="ml-4">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="px-24 mb-8 md:my-0 w-full md:w-1/2 lg:w-5/12 relative overflow-y-clip md:mt-[-50px]">
            <img
              className="scale-75 md:scale-75 lg:scale-100 xl:scale-100"
              src="./img/patelot.png"
              alt="patelot.de"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage;
