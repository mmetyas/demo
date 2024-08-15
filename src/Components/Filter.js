// Filter.js
import React from 'react';
import { Button } from 'react-bootstrap';

function Filter({ onFilter }) {
  const categories = ["", "men's clothing", "women's clothing", "electronics", "jewelery"];

  return (
    <div className="btn-group text-center d-flex" role="group" aria-label="Category filter">
      {categories.map((cat) => (
        <Button 
          key={cat} 
          variant="secondary" 
          onClick={() => onFilter(cat)} 
          className="m-1"
        >
          {cat || "All"}
        </Button>
      ))}
    </div>
  );
}

export default Filter;
