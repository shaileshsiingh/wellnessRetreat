// RetreatList.js
import React from 'react';

const RetreatList = ({ retreats }) => {
  return (
    <div style={styles.container}>
      {retreats.map((retreat) => (
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
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '20px',
    padding: '20px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    display: 'flex',
    alignItems: 'flex-start',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '10px',
    marginRight: '15px',
    objectFit: 'cover',
  },
};

export default RetreatList;
