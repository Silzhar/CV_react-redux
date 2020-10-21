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
      <div className="App">
      <div className="App__content">
      <img className="App__photo" src={imgUrl} alt="" srcset=""/>

        <h1 className="App__name">Luis Ruiz Fernández</h1>
        <p>
        Persigo adaptar los conocimientos de alta calidad junto 
        con la orientación al cliente para derarrolar apps y funcionalidades estables.
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
