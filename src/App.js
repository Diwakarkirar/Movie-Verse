// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={MoviesList} />
        <Route path="/movies/:movieId" Component={MovieDetails} />
      </Routes>
    </Router>
  );
};

export default App;
