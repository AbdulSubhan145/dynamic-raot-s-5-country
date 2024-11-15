
import React from 'react';

interface CountryNameProps {
  params: {
    country_name: string;
  };
}

const CountryName: React.FC<CountryNameProps> = ({ params }) => {
  // Array of country objects with the correct types
  const countries: { name: string; population: number; capital: string }[] = [
    {
      name: "pakistan",
      population: 251269164,
      capital: "islamabad",
    },
    {
      name: "india",
      population: 1380004385, // Corrected population
      capital: "delhi",
    },
    {
      name: "china",
      population: 1418153587,
      capital: "beijing",
    },
    {
      name: "brazil",
      population: 211998573,
      capital: "brasília",
    },
    {
      name: "indonesia",
      population: 282477584,
      capital: "jakarta",
    },
  ];

  // Function to find a country by its name
  function findCountry(countryUrl: string) {
    return countries.find(
      (country) => country.name.toLocaleLowerCase() === countryUrl.toLocaleLowerCase()
    );
  }

  const result = findCountry(params.country_name);

  return (
    <div>
      {result ? (
        <>
          <h1>Country Name: {result.name}</h1>
          <h2>Population: {result.population.toLocaleString()}</h2> {/* Adding toLocaleString for better formatting */}
          <h3>Capital: {result.capital}</h3>
        </>
      ) : (
        <h2>Country Not Found</h2>
      )}
    </div>
  );
};

export default CountryName;