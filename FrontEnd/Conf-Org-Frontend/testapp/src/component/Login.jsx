import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();  // Updated to useNavigate
  
  const login = (event) => {
    event.preventDefault();
    if (username === 'admin@admin.com' && password === 'admin') {
      alert('Login successful!');
      // Redirect to another page or update authenticated state
      navigate('/home');  // Updated to use navigate
    } else {
      setErrorMessage('Invalid username or password, please try again!');
    }
  };

  return (
    <div>
      <h1>Welcome to RSEAA25!</h1>
      <form onSubmit={login}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <p>If you need assistance to log in, please contact our IT support!</p>
    </div>
  );
}

export default LoginPage;
