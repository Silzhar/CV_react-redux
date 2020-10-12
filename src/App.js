import React from 'react'

import { Redirect } from 'react-router'
import { Header } from './components/Header'
import { Formation } from './components/Formation'
import { Knowledge } from './components/Knowledge'
import { Links } from './components/Links'

import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Formation />
        <Knowledge />
        <Links />
      </header>
    </div>
  );
}

export default App;
