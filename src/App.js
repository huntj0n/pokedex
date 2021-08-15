import React from 'react';
import './App.css';
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Switch>
        <Route exact path ='/' 
          render={(props) => <Pokedex {...props}/>} />
        <Route path='/:pokemonId' 
          render={(props) => <Pokemon {...props}/>} />
      </Switch>
  );
}
export default App;
