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
  const [totalPages, setTotalPages] = useState(4);
  const itemsPerPage = 3;

  useEffect(() => {
    fetchRetreats();
  }, [currentPage]);

  const fetchRetreats = async (filterParams = {}, searchQuery = '') => {
    try {
      let url = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${currentPage}&limit=${itemsPerPage}`;
      if (filterParams.date) url += `&date=${filterParams.date}`;
      if (filterParams.type) url += `&type=${filterParams.type}`;
      if (searchQuery) url += `&search=${searchQuery}`;

      const response = await fetch(url);
      const data = await response.json();

      setRetreats(data);
      setFilteredRetreats(data);  // Update filtered retreats
      setTotalPages(Math.ceil(data.total / itemsPerPage)); // Assuming API provides total items count
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
      <FilterSearchBar 
        onFilterChange={handleFilterChange} 
        onSearch={handleSearch}
        totalPages={totalPages}
      />
      <RetreatList retreats={filteredRetreats} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;
