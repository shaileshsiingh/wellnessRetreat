// RetreatList.js
import React, { useContext } from 'react';
import { RetreatContext } from '../context/RetreatContext';

const RetreatList = () => {
  const { filteredRetreats } = useContext(RetreatContext);

  return (
    <div style={styles.container}>
      {filteredRetreats.map((retreat) => (
        <div key={retreat.id} style={styles.card}>
          <img src={retreat.image} alt={retreat.title} style={styles.image} />
          <div>
            <h2>{retreat.title}</h2>
            <p>{retreat.description}</p>
            <p><strong>Date:</strong> {retreat.date}</p>
            <p><strong>Location:</strong> {retreat.location}</p>
            <p><strong>Price:</strong> {retreat.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '20px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    width: '30%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: '150px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
};

export default RetreatList;
