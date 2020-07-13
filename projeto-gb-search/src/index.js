import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/Home';
import SearchBar from './Components/SearchBar'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Home />
    <SearchBar/>
  </React.StrictMode>,
  document.getElementById('root')
);


