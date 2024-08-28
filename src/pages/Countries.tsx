import { useState } from "react";
import CountryCard from "../components/country-card/CountryCard";
import IsLoading from "../components/is-loading/IsLoading";
import useDataCountriesSelection from "../hooks/useDataCountriesSelection";

const Countries = () => {
  // state
  const continents = ["Africa", "America", "Europe", "Asia", "Oceania"];

  const [rangeValue, setRangeValue] = useState<number>(30);
  const [selectedRadio, setSelectedRadio] = useState<string>(" ");

  const { data, isLoading, error } = useDataCountriesSelection(
    "https://restcountries.com/v3.1/all"
  );

  //comportements
  const handleChange = (e) => {
    setRangeValue(e.target.value);
  };

  const handleSelected = (e) => {
    setSelectedRadio(e.target.id);
  };

  const handleDelete = () => {
    setSelectedRadio(" ");
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
            className="mb-8 md:mb-0 lg:mb-0 xl:mb-0 range lg:w-64 sm:w-full"
          />

          <div className="flex flex-wrap lg:gap-20 xl:gap-20 md:gap-20 gap-5">
            {continents.map((el, index) => {
              return (
                <div className="{el}" key={index}>
                  <input
                    checked={el === selectedRadio}
                    type="radio"
                    name="continent"
                    id={el}
                    onChange={handleSelected}
                    className="radio"
                  />
                  <label htmlFor={el}> {el}</label>
                </div>
              );
            })}
          </div>
        </div>

        {isLoading ? <IsLoading /> : null}

        <div className="flex flex-col justify-center items-center m-10 md:m-20 lg:m-20 xl-20">
          {selectedRadio !== " " && (
            <button
              onClick={handleDelete}
              className="p-4 rounded-lg bg-[olive] mb-4 hover:bg-[#f4f4f4] hover:border-2 hover:text-[black] hover:font-bold"
            >
              SUCHE ZURÜCKSETZEN
            </button>
          )}
          <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-5 lg:gap-2 md:gap-2 grid grid-cols-2">
            {data
              ? data
                  .filter((country) => {
                    return country.continents[0].includes(selectedRadio);
                  })
                  .sort((a, b) => b.population - a.population)
                  .slice(0, rangeValue)
                  .map((country, index) => (
                    <CountryCard key={index} country={country} />
                  ))
              : " "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Countries;
