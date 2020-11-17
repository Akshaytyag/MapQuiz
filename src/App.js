import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import register from './components/register';
import login from './components/Form/login';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/play/instructions" exact component={QuizInstructions} /> 
      <Route path="/login" exact component={login} />
      <Route path="/register" exact component={register} />
      <Route path="/play/Quiz" exact component={Play} />
      <Route path="/play/QuizSummary" exact component={QuizSummary} />
    </Router>
  );
}

export default App;
