import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './history';
import AppContextProvider from './context/AppContext';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;
