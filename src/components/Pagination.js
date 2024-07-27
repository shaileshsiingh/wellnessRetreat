// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div style={styles.pagination}>
      {currentPage > 1 && (
        <button style={styles.button} onClick={() => onPageChange(currentPage - 1)}>
          Previous
        </button>
      )}
      <span style={styles.pageInfo}>
        Page {currentPage} of {totalPages}
      </span>
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
    marginTop: '20px',
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
  pageInfo: {
    alignSelf: 'center',
  },
};

export default Pagination;
