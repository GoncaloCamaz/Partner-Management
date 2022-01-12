import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './history';
import { GroupProvider } from './context/GroupContext';
import { AuthProvider } from './context/AuthContext';

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
