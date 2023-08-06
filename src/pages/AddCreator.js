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
    <div className="add-creator-container">
      <h1 className="add-creator-title">Add Content Creator</h1>
      <form className="add-creator-form" onSubmit={handleSubmit}>
        <label className="add-creator-label">Name</label>
        <input
          className="add-creator-input"
          placeholder= "Enter the creator's name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="add-creator-label">Social Media URL</label>
        <input
          className="add-creator-input"
          type="text"
          value={url}
          placeholder='Enter url of any social media'
          onChange={(e) => setUrl(e.target.value)}
        />
        <label className="add-creator-label">Description</label>
        <textarea
          className="add-creator-textarea"
          value={description}
          placeholder='Describe about the creator'
          onChange={(e) => setDescription(e.target.value)}
        />
        <label className="add-creator-label">Image URL</label>
        <input
          className="add-creator-input"
          type="text"
          value={imageURL}
          placeholder='Add a image address of a picture'
          onChange={(e) => setImageURL(e.target.value)}
        />
        <button className="add-creator-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCreator;
