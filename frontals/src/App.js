import React, { useState } from 'react';

import LoginForm from './components/LoginForm';
import Animals from './components/Animals';
function App() {
  const [token, setToken] = useState('');

  const setUserToken = (newToken) => {
    setToken(newToken);
  };

  return (
    <div className="App">
    {
      token === ''
      ? <LoginForm setUserToken={setUserToken}/> 
      : <Animals token={token} />
    }
    </div>
    

  );
}

export default App;
