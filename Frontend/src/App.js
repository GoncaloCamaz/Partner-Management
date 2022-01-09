import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './history';
import { GroupProvider } from './context/GroupContext';
import {Provider} from 'react-redux'
import store from './redux/store';

function App() {
  const reduxStore = store
  
  return (
    <div className="App">
      <Provider store={reduxStore}>
        <GroupProvider>
          <Router history={history}>
            <Routes />
          </Router>
        </GroupProvider>
      </Provider>
    </div>
  );
}

export default App;
