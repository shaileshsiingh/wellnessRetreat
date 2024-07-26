
// RetreatCard.js
import React from 'react';

const RetreatCard = ({ retreat }) => (
  <div style={tyles.card}>
    <img src={retreat.image} alt={retreat.title} style={tyles.image} />
    <h3>{retreat.title}</h3>
    <p>{retreat.description}</p>
    <p><strong>Date:</strong> {retreat.date}</p>
  </div>
);

const tyles = {
  card: {
    width: '300px',
    margin: '10px',
    padding: '20px',
    borderRadius: '5px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '5px',
  },
};

export default RetreatCard;