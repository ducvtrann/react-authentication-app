import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import { CssBaseline } from '@material-ui/core';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={'/'}
            render={(props) => <Home {...props} setUser={setUser} />}
          />
          <Route
            exact
            path={'/dashboard'}
            render={(props) => <Dashboard {...props} user={user} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
