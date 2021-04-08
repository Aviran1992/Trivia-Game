import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Score from './Score';

const Questions = () => {
  const questions = useLocation().state;

  const [currQuestion, setCurrQuestion] = useState(questions[0]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [currAnswers, setAnswers] = useState([]);
  const [showCorrectAnswer, setShow] = useState(null);
  const [gameStatus, setGameStatus] = useState(true);

  useEffect(() => {
    if (index === questions.length - 1) setGameStatus(false);
    setShow(false);
    const answers = [
      ...currQuestion.incorrect_answers,
      currQuestion.correct_answer,
    ];

    setAnswers(
      shuffleArray(
        answers.map((answer, i) =>
          i === answers.length - 1 ? (
            <p key={i}>
              <button className="correct" onClick={checkAnswer}>
                {answer}
              </button>
            </p>
          ) : (
            <p key={i}>
              <button onClick={checkAnswer}>{answer}</button>
            </p>
          )
        )
      )
    );

    return () => {};
  }, [index]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  };

  const checkAnswer = (e) => e.target.classList.contains('correct');

  const moveNext = (e) => {
    if (checkAnswer(e)) setScore((prev) => prev + 1);
    setShow(!showCorrectAnswer);
    if (gameStatus) {
      setTimeout(() => {
        setCurrQuestion(questions[index + 1]);
        setIndex((prev) => prev + 1);
      }, 500);
    }
  };

  return (
    <div>
      {gameStatus && (
        <div className="questions">
          <h3 dangerouslySetInnerHTML={{ __html: currQuestion.question }}></h3>
          <p className={showCorrectAnswer ? 'show' : null} onClick={moveNext}>
            {currAnswers}
          </p>
        </div>
      )}
      {!gameStatus && <Score score={score} />}
    </div>
  );
};

export default Questions;
