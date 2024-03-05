import React, { useState } from 'react';

function Connexion() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      login:<input type="text" value={login} onChange={(e) => setLogin(e.target.value)}placeholder="Login"/>
      <br></br>
      password:<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
     <br></br>
      <button onClick={() => console.log('Login:', login, 'Password:', password)}>Submit</button>
    </div>
  );
}

export default Connexion;
