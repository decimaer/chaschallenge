import React, { useState } from 'react';
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('');
  const [acceptedRules, setAcceptedRules] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(username, email, password, confirmPassword, location, acceptedRules);
  };

  return (
    <div>
        <Header />
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Confirm password:
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <label>
        Accept rules:
        <input type="checkbox" checked={acceptedRules} onChange={(e) => setAcceptedRules(e.target.checked)} />
      </label>
      <button type="submit">Register</button>
    </form>
    <Footer />
    </div>
    
  );
  
}

export default Register;
