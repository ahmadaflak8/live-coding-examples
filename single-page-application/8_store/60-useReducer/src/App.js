import './App.css';
import React from 'react';

// sample code from:
// https://www.react.express/hooks/usereducer

const types = {
  PET: 'PET',
  COLOR: 'COLOR',
};

const COLORS = {
  BLACK: 'Schwarz',
  PINK: 'Pink',
  BLUE: 'Blau'
};

const PETS = {
  CAT: 'Katze',
  DOG: 'Hund',
  MOUSE: 'Maus'
};

const initialState = {
  color: COLORS.BLACK,
  pet: PETS.CAT,
};

const petReducer = (state, action) => {
  switch (action.type) {
    case types.PET:
      return { ...state, pet: action.value }
    case types.COLOR:
      return { ...state, color: action.value }
  }
}

function App() {
  const [state, dispatchState] = React.useReducer(petReducer, initialState)

  return (
    <div>
      <label>Wähle eine Farbe und ein Tier: </label>
      <br />
      <select
        value={state.color}
        onChange={event => {
          dispatchState({ type: types.COLOR, value: event.target.value })
        }}
      >
        <option value={COLORS.BLACK}>{COLORS.BLACK}</option>
        <option value={COLORS.BLUE}>{COLORS.BLUE}</option>
        <option value={COLORS.PINK}>{COLORS.PINK}</option>
      </select>
      <select
        value={state.pet}
        onChange={event => {
          dispatchState({ type: types.PET, value: event.target.value })
        }}
      >
        <option value={PETS.CAT}>{PETS.CAT}</option>
        <option value={PETS.DOG}>{PETS.DOG}</option>
        <option value={PETS.MOUSE}>{PETS.MOUSE}</option>
      </select>
      <br />
      <br />
      Deine Auswahl:
      <dl>
        <dt>Farbe:</dt><dd>{state.color}</dd>
        <dt>Tier:</dt><dd>{state.pet}</dd>
      </dl>
    </div>
  )
}

export default App;
