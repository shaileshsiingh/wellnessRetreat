// FilterSearchBar.js
import React, { useContext } from 'react';
import { RetreatContext } from '../context/RetreatContext';

const FilterSearchBar = () => {
  const { setFilterParams, setSearchQuery } = useContext(RetreatContext);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterParams((prevParams) => ({ ...prevParams, [name]: value }));
  };

  return (
    <div style={styles.container}>
      <div style={styles.filters}>
        <select name="type" onChange={handleFilterChange} style={styles.select}>
          <option value="">Filter by Type</option>
          <option value="Yoga">Yoga</option>
          <option value="Meditation">Meditation</option>
          <option value="Detox">Detox</option>
        </select>
      </div>
      <div style={styles.search}>
        <input
          type="text"
          placeholder="Search retreats by title"
          onChange={handleSearch}
          style={styles.input}
        />
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
    gap: '10px',
  },
  select: {
    padding: '10px 15px',
    borderRadius: '5px',
    backgroundColor: '#2C3E50',
    color: 'white',
    cursor: 'pointer',
    border: 'none',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
};

export default FilterSearchBar;
