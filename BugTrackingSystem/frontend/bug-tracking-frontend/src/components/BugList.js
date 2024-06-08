import React, { useState, useEffect } from 'react';
import BugService from '../services/BugService';

function BugList() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    BugService.getBugs().then((response) => {
      setBugs(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Bug List</h2>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>
            {bug.title} - {bug.status} - {bug.priority}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BugList;
