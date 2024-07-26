// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={styles.pagination}>
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>
      )}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          style={number === currentPage ? styles.active : null}
        >
          {number}
        </button>
      ))}
      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
      )}
    </div>
  );
};

const styles = {
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  active: {
    fontWeight: 'bold',
    backgroundColor: '#2C3E50',
    color: 'white',
  },
};

export default Pagination;
