import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './history';
import { AuthProvider } from './context/AuthContext';
import { GroupProvider } from './context/GroupContext'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <GroupProvider>
          <Router history={history}>
            <Routes />
          </Router>
        </GroupProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
