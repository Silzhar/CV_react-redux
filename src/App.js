import React from 'react';

import { Formation } from './components/Formation';
import { Knowledge } from './components/Knowledge';
import { Links } from './components/Links';
// import { Card } from './components/Card'

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="App__content">
        <h1>Luis Ruiz Fernández</h1>
        <p>
          Desde que descubrí la programación dedico todo el tiempo posible a
          aprender, es algo que me resulta a la par interesante y entretenido.
          Mi intención es formarme y realizarme en esta profesión.
        </p>
        <div className="App__cards">
          <Knowledge />
          <Links />
          <Formation />
        </div>
      </div>
    </div>
  );
}

export default App;
