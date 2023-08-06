import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddCreator = ({ onAdd }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCreator = { name, url, description, imageURL };
    onAdd(newCreator);
    setName('');
    setUrl('');
    setDescription('');
    setImageURL('');
    navigate("/");

  };

  return (
    <div >
      <h1> Add a Content Creator</h1>
      <form onSubmit={handleSubmit}>
        <label >Name</label>
        <input
         
          placeholder= "Enter the creator's name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Social Media URL</label>
        <input
        
          type="text"
          value={url}
          placeholder='Enter url of any social media'
          onChange={(e) => setUrl(e.target.value)}
        />
        <label >Description</label>
        <textarea
          
          value={description}
          placeholder='Describe about the creator'
          onChange={(e) => setDescription(e.target.value)}
        />
        <label >Image URL</label>
        <input
        
          type="text"
          value={imageURL}
          placeholder='Add a image address of a picture'
          onChange={(e) => setImageURL(e.target.value)}
        />
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCreator;
