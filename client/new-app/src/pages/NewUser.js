import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewUser.css';

function NewUser() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage('');
      setSuccessMessage('');
    }, 1000);

    return () => clearTimeout(timer);
  }, [errorMessage, successMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !age) {
      setErrorMessage('Name and Age are required');
      return;
    }

    try {
      const response = await axios.post('/submitData', { name, age });
      setErrorMessage('');
      setSuccessMessage(response.data.message);
      console.log(response.data);
      setName('');
      setAge('');
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Error creating user');
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="input-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        {successMessage && <p className="success message">{successMessage}</p>}
        {errorMessage && <p className="error message">{errorMessage}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewUser;
