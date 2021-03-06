import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Books from './pages/Books';
import Detail from './pages/Detail';
import Profile from './pages/Profile';

import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import Reducers from './reducers';

const store = createStore(Reducers, applyMiddleware(reduxThunk));

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Header />
        
        <Route path={'/'} exact component={ Home } />
        <Route path={'/books'} exact component={ Books } />
        <Route path={'/books/detail/:id'} exact component={ Detail } />
        <Route path={'/profile'} exact component={ Profile } />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
