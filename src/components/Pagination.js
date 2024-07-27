// Pagination.js
import React, { useContext } from 'react';
import { RetreatContext } from '../context/RetreatContext';

const Pagination = () => {
  const { currentPage, totalPages, setCurrentPage } = useContext(RetreatContext);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div style={styles.container}>
      <button
        style={styles.button}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>{`${currentPage} / ${totalPages}`}</span>
      <button
        style={styles.button}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    margin: '0 5px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#2C3E50',
    color: 'white',
    cursor: 'pointer',
  },
};

export default Pagination;
