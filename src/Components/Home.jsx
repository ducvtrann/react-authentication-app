import React, { useState } from 'react';
import Login from './auth/Login';
import Registration from './auth/Registration';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Home = ({ setUser, history }) => {
  const classes = useStyles();
  const [login, setLoginComponent] = useState(true);
  const handleSuccessfulAuth = (data) => {
    setUser(data);
    history.push('/dashboard');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Authorization App
          </Typography>
          <Button color="inherit" onClick={() => setLoginComponent(false)}>
            Register
          </Button>
          <Button color="inherit" onClick={() => setLoginComponent(true)}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {login ? (
        <Login handleSuccessfulAuth={handleSuccessfulAuth} />
      ) : (
        <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      )}
    </div>
  );
};

export default Home;
