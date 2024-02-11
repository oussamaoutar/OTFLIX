import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './search.css';

function Search() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(search.length !== 0 && !/^\s*$/.test(search)) navigate(`/search/${search}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          id="search"
        />
      </form>
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
}

export default Search;
