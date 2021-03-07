import React from 'react';
import axios from 'axios';
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

const Dashboard = ({ history, handleLogout }) => {
  const classes = useStyles();
  const handleLogoutClick = () => {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then((_response) => {
        handleLogout();
        history.push('/');
      })
      .catch((e) => console.log(e));
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
          <Button color="inherit" onClick={() => handleLogoutClick()}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Dashboard;
