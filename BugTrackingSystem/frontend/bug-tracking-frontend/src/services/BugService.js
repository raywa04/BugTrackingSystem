import axios from 'axios';

const API_URL = 'http://localhost:8080/api/bugs';

class BugService {
  getBugs() {
    return axios.get(API_URL);
  }

  getBug(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  createBug(bug) {
    return axios.post(API_URL, bug);
  }

  updateBug(id, bug) {
    return axios.put(`${API_URL}/${id}`, bug);
  }

  deleteBug(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new BugService();
