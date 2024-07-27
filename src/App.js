import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FilterSearchBar from './components/FilterSearchBar';
import RetreatList from './components/RetreatList';
import Pagination from './components/Pagination';
import RetreatProvider from './context/RetreatContext'; // Import the context provider

const App = () => {
  return (
    <RetreatProvider>
      <div>
        <Header />
        <HeroSection />
        <FilterSearchBar />
        <RetreatList />
        <Pagination />
      </div>
    </RetreatProvider>
  );
};

export default App;
