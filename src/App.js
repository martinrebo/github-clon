import React from 'react';
import { StateProvider } from './store/store'

import './App.css';

import Header from './components/Header/Header'
import Searchbar from './components/Searchbar/Searchbar';
import RepoList from './components/RepoList/RepoList';

function App() {

  // 

  return (
    <div className="App">
      <StateProvider >
        <Header />
        <Searchbar />
        <RepoList />
      </StateProvider>
    </div>
  );
}

export default App;
