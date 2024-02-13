import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'; 

function UserList() {
  const [backendData, setBackendData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage('');
      setSuccessMessage('');
    }, 1000);

    return () => clearTimeout(timer);
  }, [errorMessage, successMessage]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api');
      setBackendData(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/api/${userId}`);
      setSuccessMessage('User deleted successfully');
      fetchUsers();
    } catch (error) {
      setErrorMessage('Error deleting user');
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
       {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>User ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {backendData.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user._id}</td>
              <td><button className='btn' onClick={() => deleteUser(user._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
