import { useState } from "react";
import useSWR from "swr";
import CountryCard from "../components/country-card/CountryCard";

const Countries = () => {
  const continents = ["Africa", "America", "Europe", "Asia", "Oceania"];

  const [rangeValue, setRangeValue] = useState<number>(30);
  const [selectedRadio, setSelectedRadio] = useState<string>("");

  const fetcher = (args) => fetch(args).then((res) => res.json());
  const { data, isValidating, error, isLoading } = useSWR(
    "https://restcountries.com/v3.1/all",
    fetcher
  );

  // state

  //comportements
  const handleChange = (e) => {
    setRangeValue(e.target.value);
  };

  const handleSelected = (e) => {
    setSelectedRadio(e.target.id);
  };

  const handleDelect = () => {
    setSelectedRadio("");
  };

  // Render
  return (
    <>
      <div className="container mx-auto ">
        <div className="m-8 p-4 rounded-lg border bg-[#f4f4f4] flex flex-wrap justify-between items-center">
          <input
            type="range"
            min={1}
            max={250}
            defaultValue={rangeValue}
            onChange={handleChange}
            className="mb-8 md:mb-0 lg:mb-0 xl:mb-0"
          />

          <div className="flex flex-wrap lg:gap-20 xl:gap-20 md:gap-20 gap-5">
            {continents.map((el) => {
              return (
                <div className={el}>
                  <input
                    checked={el === selectedRadio}
                    type="radio"
                    name="continent"
                    id={el}
                    onChange={handleSelected}
                  />
                  <label htmlFor={el}> {el}</label>
                </div>
              );
            })}
          </div>
        </div>

        {(isValidating && !error) || isLoading ? (
          <div className="border border-[olive] shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {error ? (
          <div className="border border-[olive] shadow rounded-md p-4 max-w-sm w-full mx-auto text-xl text-[black]">
            {error.message}{" "}
          </div>
        ) : null}

        {!data?.length && !isValidating && !error ? (
          <div className="border border-[olive] shadow rounded-md p-4 max-w-sm w-full mx-auto text-xl text-[black]">
            No Data to Show!
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center m-10 md:m-20 lg:m-20 xl-20">
            {selectedRadio && (
              <button
                onClick={handleDelect}
                className="p-4 rounded-lg bg-[olive] mb-4 hover:bg-[#f4f4f4] hover:border-2 hover:text-[black] hover:font-bold"
              >
                SUCHE ZURÜCKSETZEN
              </button>
            )}
            <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-5 lg:gap-2 md:gap-2 grid grid-cols-2 gap-10">
              {data
                ? data
                    .filter((country) => {
                      return country.continents[0].includes(selectedRadio);
                    })
                    /* .sort((a, b) => b.population - a.population) */
                    .slice(0, rangeValue)
                    .map((country, index) => (
                      <CountryCard key={index} country={country} />
                    ))
                : ""}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Countries;
