// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null; // Do not render pagination if there is only one page or none

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={styles.pagination}>
      {currentPage > 1 && (
        <button style={styles.button} onClick={() => onPageChange(currentPage - 1)}>
          Previous
        </button>
      )}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          style={number === currentPage ? { ...styles.button, ...styles.active } : styles.button}
        >
          {number}
        </button>
      ))}
      {currentPage < totalPages && (
        <button style={styles.button} onClick={() => onPageChange(currentPage + 1)}>
          Next
        </button>
      )}
    </div>
  );
};

const styles = {
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
  button: {
    margin: '0 5px',
    padding: '10px 15px',
    border: '1px solid #2C3E50',
    borderRadius: '5px',
    backgroundColor: '#2C3E50',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
  active: {
    backgroundColor: '#1ABC9C',
    borderColor: '#1ABC9C',
  },
};

export default Pagination;
