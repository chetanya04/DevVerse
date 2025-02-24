import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../utlis';

const ExpertForm = () => {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const [designation, setDesignation] = useState('');
  const [photo, setPhoto] = useState(null);
const navigate = useNavigate()

  const handleLogout = (e) => {
          localStorage.removeItem('token');
          localStorage.removeItem('loggedInUser');
          handleSuccess('User Loggedout');
          setTimeout(() => {
              navigate('/');
          }, 1000)
      }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('experience', experience);
    formData.append('designation', designation);
    formData.append('photo', photo);

    try {
      const response = await axios.post("http://localhost:5000/api/experts", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Expert saved:', response.data);
    } catch (error) {
      console.error('Error saving expert:', error);
    }
  };

  return (
    <>
    <button onClick={handleLogout}>Log out</button>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Experience</label>
        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Designation</label>
        <input
          type="text"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default ExpertForm;
