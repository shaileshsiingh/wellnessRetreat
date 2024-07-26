// FilterSearchBar.js
import React from 'react';

const FilterSearchBar = ({ onFilterChange, onSearch }) => (
  <div style={styles.container}>
    <select style={styles.select} onChange={(e) => onFilterChange(e.target.value, 'date')}>
      <option value="">Filter by Date</option>
      {/* Replace with actual date options */}
      <option value="2024-07-27">July 27, 2024</option>
      <option value="2024-08-01">August 1, 2024</option>
    </select>
    <select style={styles.select} onChange={(e) => onFilterChange(e.target.value, 'type')}>
      <option value="">Filter by Type</option>
      <option value="Yoga">Yoga</option>
      <option value="Meditation">Meditation</option>
      <option value="Detox">Detox</option>
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
    width:'30%',
  },
  select: {
    marginRight: '10px',
  },
  input: {
    flex: '1',
    padding: '5px',
  },
};

export default FilterSearchBar;
