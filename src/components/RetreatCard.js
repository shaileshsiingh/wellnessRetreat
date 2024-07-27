// RetreatCard.js
import React from 'react';

const RetreatCard = ({ retreat }) => {
  return (
    <div style={styles.card}>
      <img src={retreat.image} alt={retreat.title} style={styles.image} />
      <div style={styles.details}>
        <h3>{retreat.title}</h3>
        <p>{retreat.description}</p>
        <p>Date: {retreat.date}</p>
        <p>Location: {retreat.location}</p>
        <p>Price: {retreat.price}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ddd',
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '10px',
    padding: '5px',
  },
  image: {
    width: '250px',
    height: '200px',
    borderRadius: '10px',
    marginBottom: '15px',
  },
  details: {
    flex: 1,
  },
};

export default RetreatCard;
