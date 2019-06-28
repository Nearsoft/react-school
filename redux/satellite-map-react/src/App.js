import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import Map from './components/Map/MapContainer';
import Info from './components/Info/InfoContainer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Map />
        <Info />
      </div>
    </Provider>
  );
}

export default App;
