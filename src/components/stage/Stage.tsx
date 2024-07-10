const Stage = ({ preline, headline, checkmark }) => {
  // stage

  // comportement

  // render
  return (
    <div className="bg-gradient-to-br from-[#f4f4f4] to-[olive]">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-16 justify-center items-center -mx-12 md:-mx-0 lg:-mx-0 xl:-mx-0">
          <div className="px-24 w-full md:w-1/2 lg:w-7/12 md:min-h-10 mb-12">
            <h1 className="block mb-4 text-lg text-black font-sans-regular">
              {preline}
            </h1>
            <h2 className="block mb-20 font-overpass-regular lg:text-6xl text-4xl">
              {headline}
            </h2>
            <div className="my-4 space-y-12 text-md">
              <ul className="mb-4">
                {checkmark.map((item, index) => {
                  return (
                    <li key={`index-${index}`} className="flex mb-3">
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
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
