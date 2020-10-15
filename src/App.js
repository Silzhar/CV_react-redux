import React from 'react';

import { Formation } from './components/Formation';
import { Knowledge } from './components/Knowledge';
import { Links } from './components/Links';
// import { Card } from './components/Card'

import './App.scss';

const imgUrl = 
"https://raw.githubusercontent.com/Silzhar/cv-html/master/img/boootcamp-pic.jpeg"

function App() {
  return (
    <div className='background'>
      {/* <img className="Header_avatar" src={imgUrl} alt="" srcset=""/> */}
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
    </div>
    
  );
}

export default App;
