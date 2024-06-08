import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

class AuthService {
  login(credentials) {
    return axios.post(`${API_URL}/login`, credentials);
  }

  register(user) {
    return axios.post(`${API_URL}/register`, user);
  }
}

export default new AuthService();
