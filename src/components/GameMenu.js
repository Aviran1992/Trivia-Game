import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';

const GameMenu = () => {
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState(9);

  const categories = useRef([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=11&type=multiple&category=${category}`
      );
      if (!categories.current.length) {
        categories.current = (
          await axios.get('https://opentdb.com/api_category.php')
        ).data.trivia_categories;
      }
      setQuestions(data.results);
    })();
  }, [category]);

  return (
    <div className="game-menu">
      <img
        alt="header"
        src="https://www.psd.gov.sg/images/default-source/challenge-library/lifestyle/trivia-quiz/triviaquiz/trivia-quiz-01-main-720x400.jpg"
      ></img>
      <Dropdown
        label="Choose Category:"
        options={categories.current.map((category) => category.name)}
        set={setCategory}
      />
      <button>
        <Link to={{ pathname: '/questions', state: questions }}>
          Start Game
        </Link>
      </button>{' '}
    </div>
  );
};

export default GameMenu;
