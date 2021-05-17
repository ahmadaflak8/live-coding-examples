import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Contacts from './Pages/Contacts';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">

      <header>
        <a href="/">Home</a>&nbsp;&nbsp;
        <a href="/blog">Blog</a>&nbsp;&nbsp;
        <a href="/contacts">Kontakt</a>&nbsp;&nbsp;
        <a href="/error">Fehler</a>
      </header>
      
      {/* Wir rufen den router auf, indem wir das element in unserem code platzieren */}
      <BrowserRouter>
        <Switch>

          {/*
            path: der pfad zum komponenten
            component: der komponent den wir anzreigen wollen
            exact: spezifiziert das NUR an diesem pfad der komponent angezeigt wird
          */}
          <Route exact path="/" component={ Home } />
          <Route path="/blog" component={ Blog }/>
          <Route path="/contacts" component={ Contacts } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
