import React, { useState } from 'react';
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(usernameOrEmail, password);
  };

  return (
    <div>
      <Header />
      <h2>Logga in</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Användarnamn eller e-post:
          <input 
            type="text" 
            value={usernameOrEmail} 
            onChange={(e) => setUsernameOrEmail(e.target.value)} 
            placeholder="Användarnamn eller e-post"
          />
        </label>
        <label>
          Lösenord:
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Lösenord"
          />
        </label>
        <p>Glömt ditt lösenord?</p>
        <button type="submit">Logga in</button>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
