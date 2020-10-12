import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import { Header } from './components/Header'
import { Formation } from './components/Formation'
import { Knowledge } from './components/Knowledge'
import { Links } from './components/Links'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header />
          <Switch>
            <Route exact path='/formation'>
              <Formation />
            </Route>
            <Route exact path='/knowledge'>
              <Knowledge />
            </Route>
            <Route exact path='/links'>
              <Links />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
