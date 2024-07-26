// RetreatList.js
import React from 'react';
import RetreatCard from './RetreatCard';

const RetreatList = ({ retreats }) => (
  <div style={styles.list}>
    {retreats.map((retreat) => (
      <RetreatCard key={retreat.id} retreat={retreat} />
    ))}
  </div>
);

const styles = {
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px',
  },
};

export default RetreatList;

