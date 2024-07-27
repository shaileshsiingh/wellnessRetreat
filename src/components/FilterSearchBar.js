// FilterSearchBar.js
import React, { useState } from 'react';

const FilterSearchBar = ({ onFilterChange, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div style={styles.container}>
      <div style={styles.filters}>
        <button onClick={() => onFilterChange('asc', 'date')} style={styles.button}>Filter by Date</button>
        <button onClick={() => onFilterChange('Yoga', 'type')} style={styles.button}>Filter by Type</button>
      </div>
      <div style={styles.search}>
        <input
          type="text"
          placeholder="Search retreats by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>Search</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px 0',
  },
  filters: {
    display: 'flex',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    padding: '10px 15px',
    margin: '0 5px',
    borderRadius: '5px',
    backgroundColor: '#2C3E50',
    color: 'white',
    cursor: 'pointer',
    border: 'none',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
};

export default FilterSearchBar;
