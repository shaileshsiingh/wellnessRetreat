// FilterSearchBar.js
import React from 'react';

const FilterSearchBar = ({ onFilterChange, onSearch }) => (
  <div style={styles.container}>
    <select style={styles.select} onChange={(e) => onFilterChange(e.target.value, 'date')}>
      <option value="">Filter by Date</option>
      {/* Add more options here */}
    </select>
    <select style={styles.select} onChange={(e) => onFilterChange(e.target.value, 'type')}>
      <option value="">Filter by Type</option>
      {/* Add more options here */}
    </select>
    <input
      type="text"
      placeholder="Search retreats by title"
      style={styles.input}
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
);

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#ECF0F1',
  },
  select: {
    marginRight: '10px',
  },
  input: {
    flex: '1',
    padding: '10px',
  },
};

export default FilterSearchBar;
