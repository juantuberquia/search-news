import React, { useState } from "react";

const useSelect = (state, options) => {
  const [category, SetCategory] = useState(state);

  const SelectCategories = () => (
    <select
      onChange={(e) => SetCategory(e.target.value)}
      value={category}
      className="browser-default"
    >
      {options.map((news) => (
        <option key={news.value} value={news.value}>
          {news.label}
        </option>
      ))}
    </select>
  );

  return [SelectCategories, category];
};

export default useSelect;
