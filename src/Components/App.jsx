import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import { CssBaseline } from '@material-ui/core';

function App() {
  const [user, setUser] = useState(null);
  const checkLoginStatus = () => {
    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && !user) {
          setUser(response.data.user);
        } else if (!response.data.logged_in && !user) {
          setUser(null);
        }
      })
      .catch((e) => console.log(e));
  };

  const handleLogout = () => {
    setUser(null);
  };

  useEffect(() => {
    checkLoginStatus();
  });

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
            render={(props) => (
              <Dashboard {...props} user={user} handleLogout={handleLogout} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
