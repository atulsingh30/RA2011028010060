import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    ownerName: '',
    rollNo: '',
    ownerEmail: '',
    accessCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://20.244.56.144/train/register',
        formData
      );
      console.log('Registration successful!', response.data);
      // Store clientID and clientSecret in state or context
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <h2>Company Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Registration form inputs */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;