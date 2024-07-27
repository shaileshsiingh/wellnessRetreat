// RetreatContext.js
import React, { createContext, useState, useEffect } from 'react';

export const RetreatContext = createContext();

const RetreatProvider = ({ children }) => {
  const [retreats, setRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filterParams, setFilterParams] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 3;

  useEffect(() => {
    fetchRetreats();
  }, [currentPage, filterParams, searchQuery]);

  const fetchRetreats = async () => {
    try {
      let url = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${currentPage}&limit=${itemsPerPage}`;
      const query = [];
      if (filterParams.type) query.push(`type=${filterParams.type}`);
      if (filterParams.date) query.push(`date=${filterParams.date}`);
      if (searchQuery) query.push(`search=${searchQuery}`);
      if (query.length > 0) url += `&${query.join('&')}`;

      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setRetreats(data);
      setFilteredRetreats(data);
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    } catch (error) {
      console.error('Error fetching retreats:', error);
      setRetreats([]);
      setFilteredRetreats([]);
      setTotalPages(1);
    }
  };

  return (
    <RetreatContext.Provider
      value={{
        retreats,
        filteredRetreats,
        currentPage,
        totalPages,
        setFilterParams,
        setSearchQuery,
        setCurrentPage,
      }}
    >
      {children}
    </RetreatContext.Provider>
  );
};

export default RetreatProvider;
