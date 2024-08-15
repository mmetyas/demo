// Search.js
import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <FormControl
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={handleChange}
      className="mb-3"
    />
  );
}

export default Search;
