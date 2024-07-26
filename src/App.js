// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FilterSearchBar from './components/FilterSearchBar';
import RetreatList from './components/RetreatList';

const App = () => {
  const [retreats, setRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);

  useEffect(() => {
    // Fetch data from API and set it to `retreats` and `filteredRetreats`
    // For now, use mock data
    const fetchData = async () => {
      const response = await fetch('https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats');
      const data = await response.json();
      setRetreats(data);
      setFilteredRetreats(data);
    };
    fetchData();
  }, []);

  const handleFilterChange = (value, type) => {
    // Implement filter logic
  };

  const handleSearch = (query) => {
    const filtered = retreats.filter((retreat) =>
      retreat.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRetreats(filtered);
  };

  return (
    <div>
      <Header />
      <HeroSection />
      <FilterSearchBar onFilterChange={handleFilterChange} onSearch={handleSearch} />
      <RetreatList retreats={filteredRetreats} />
    </div>
  );
};

export default App;
