const CountryCard = ({ country }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="hover:opacity-0 z-50"
        src={country.flags.svg}
        alt={country.translations.deu.common}
      />
      <div className="p-2 rounded-lg absolute bg-[#f4f4f4] hidden lg:block md:block xl:block">
        <div className="break-all">
          <span className="font-bold">Land:</span>{" "}
          {country.translations.deu.common}
        </div>
        <div>
          <span className="font-bold">Haupstadt:</span> {country.capital}
        </div>
        <div>
          <span className="font-bold">Bewölkerung:</span>{" "}
          {country.population.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
