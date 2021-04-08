import React from 'react';
import { Link } from 'react-router-dom';

const Summary = ({ score }) => {
  return (
    <div className="score">
      <h2>Your score is {score} out of 10</h2>
      <button>
        <Link to="/">Play Again</Link>
      </button>
    </div>
  );
};

export default Summary;
