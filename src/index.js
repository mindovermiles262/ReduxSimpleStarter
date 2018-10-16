import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

const API_KEY = '[API KEY]'

// Create new component. Should produce some HTML
const App = () => {
  return(
  <div>
    <SearchBar />
  </div>
  )
}

// Append Component into DOM
ReactDOM.render(<App />, document.querySelector('.container'));
