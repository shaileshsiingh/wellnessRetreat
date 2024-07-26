// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FilterSearchBar from './components/FilterSearchBar';
import RetreatList from './components/RetreatList';
import Pagination from './components/Pagination';

const App = () => {
  const [retreats, setRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchRetreats();
  }, [currentPage]);

  const fetchRetreats = async (filterParams = {}, searchQuery = '') => {
    try {
      const { date, type } = filterParams;
      let url = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${currentPage}&limit=5`;
      
      if (date) url += `&date=${date}`;
      if (type) url += `&type=${type}`;
      if (searchQuery) url += `&search=${searchQuery}`;

      const response = await fetch(url);
      const data = await response.json();
      
      setRetreats(data);
      setFilteredRetreats(data);
      setTotalPages(Math.ceil(data.total / 5));  // Assuming the API returns the total number of retreats
    } catch (error) {
      console.error('Error fetching retreats:', error);
    }
  };

  const handleFilterChange = (value, type) => {
    const filterParams = {};
    if (type === 'date') filterParams.date = value;
    if (type === 'type') filterParams.type = value;

    fetchRetreats(filterParams);
  };

  const handleSearch = (query) => {
    fetchRetreats({}, query);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header />
      <HeroSection />
      <FilterSearchBar onFilterChange={handleFilterChange} onSearch={handleSearch} />
      <RetreatList retreats={filteredRetreats} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;
