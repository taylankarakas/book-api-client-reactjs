import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Books from './pages/Books';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path={'/'} exact component={ Home } />
      <Route path={'/books'} exact component={ Books } />
    </BrowserRouter>
  );
}

export default App;
