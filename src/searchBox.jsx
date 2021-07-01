import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control border-0"
      placeholder="Search Album ID"
      value={value}
      onChange={({target}) => onChange(target.value)}
    />
  );
};

export default SearchBox;