import React, { useState } from "react";

const useCountry = (state, countries) => {
  const [country, setCountry] = useState(state);

  const SelectCountry = () => (
    <select
      onChange={(e) => setCountry(e.target.value)}
      value={country}
      className="browser-default"
    >
      {countries.map((country) => (
        <option key={country.value} value={country.value}>
          {country.label}
        </option>
      ))}
    </select>
  );
  return [SelectCountry, country];
};

export default useCountry;
