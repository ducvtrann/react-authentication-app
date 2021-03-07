import React from 'react';
import Registration from './auth/Registration';

const Home = ({ setUser, history }) => {
  const handleSuccessfulAuth = (data) => {
    setUser(data);
    history.push('/dashboard');
  };

  return (
    <div>
      <h1>Home</h1>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
};

export default Home;
