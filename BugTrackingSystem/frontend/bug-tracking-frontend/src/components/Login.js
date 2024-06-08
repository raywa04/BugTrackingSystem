import React, { useState } from 'react';
import AuthService from '../services/AuthService';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.login(credentials).then((response) => {
      // Handle successful login
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={credentials.username} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
