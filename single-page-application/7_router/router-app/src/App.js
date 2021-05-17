import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Contacts from './Pages/Contacts';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">

      <header>
        <a href="/">Home</a>&nbsp;&nbsp;
        <a href="/blog">Blog</a>&nbsp;&nbsp;
        <a href="/contacts">Kontakt</a>&nbsp;&nbsp;
        <a href="/user/TestUser123">Profil 1</a>&nbsp;&nbsp;

        {/* der wert hinter /user/ ist unser parameter */}
        <a href="/user/IchBinEinUser">Profil 2</a>&nbsp;&nbsp;
        <a href="/user/GalipKannKochen">Profil 3</a>&nbsp;&nbsp;
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

          {/* Wichtig ist, hier einen doppelpunkt zu setzen, damit der router weiss, das es sich um einen parameter handelt */}
          <Route path="/user/:id" component={ Profile } />

          {/* mehrere parameter in produktionslogik: /kategorien/:kategorie/produkt/:produktId */}
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
