import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import GameMenu from './components/GameMenu';
import Summary from './components/Score';
import Questions from './components/Questions';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <GameMenu />
        </Route>
        <Route path="/questions">
          <Questions />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
