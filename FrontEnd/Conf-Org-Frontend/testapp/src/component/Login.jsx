import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api'

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();  // Updated to useNavigate
  var FormData = require('form-data');
 

  const login =  async event => {
    event.preventDefault();
   
    const data = new FormData();
    
    data.append('username', username);
    data.append('password', password);
    const response = await api.post('/token',data)
    .catch(error => console.error(error));
    // console.log(response.data.state)
    if (response.data.state === "success") {
      alert('Login successful!');
    
      // Redirect to another page or update authenticated state
      navigate('/home');  // Updated to use navigate
    } else {
      alert("Invalid username or password");
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
