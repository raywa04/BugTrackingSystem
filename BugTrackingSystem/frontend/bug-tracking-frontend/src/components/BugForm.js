import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BugService from '../services/BugService';

function BugForm() {
  const { id } = useParams();
  const [bug, setBug] = useState({ title: '', description: '', status: '', priority: '' });

  useEffect(() => {
    if (id) {
      BugService.getBug(id).then((response) => {
        setBug(response.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBug({ ...bug, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      BugService.updateBug(id, bug).then(() => {
        // Handle successful update
      });
    } else {
      BugService.createBug(bug).then(() => {
        // Handle successful creation
      });
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Bug' : 'Create Bug'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={bug.title} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={bug.description} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>Status:</label>
          <select name="status" value={bug.status} onChange={handleChange}>
            <option value="">Select Status</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <div>
          <label>Priority:</label>
          <select name="priority" value={bug.priority} onChange={handleChange}>
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default BugForm;
