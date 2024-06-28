const CountryCard = ({ country }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="hover:opacity-0 z-50"
        src={country.flags.svg}
        alt={country.translations.deu.common}
      />
      <div className="p-4 rounded-lg absolute bg-[#f4f4f4]">
        <div className="break-all">Land: {country.translations.deu.common}</div>
        <div>Haupstadt: {country.capital}</div>
        <div>Bewölkerung: {country.population.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default CountryCard;
