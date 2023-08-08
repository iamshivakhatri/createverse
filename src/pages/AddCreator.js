import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddCreator.css';

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

    // Clear input fields after newCreator is passed.
    setName('');
    setUrl('');
    setDescription('');
    setImageURL('');

    //Use the useNavigate hook to navigate to ShowCreator page after adding the creator
    navigate('/');
  };

  return (
   
    <div className="add-creator-container">
      <h1 className="add-creator-title">Add a Content Creator</h1>
      <form className="add-creator-form" onSubmit={handleSubmit}>
        <label className="add-creator-label">Name</label>
        <input
          className="add-creator-input"
          type="text"
          placeholder="Enter the creator's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="add-creator-label">Social Media URL</label>
        <input
          className="add-creator-input"
          type="text"
          placeholder="Enter url of any social media"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <label className="add-creator-label">Description</label>
        <textarea
          className="add-creator-textarea"
          value={description}
          placeholder="Describe about the creator"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label className="add-creator-label">Image URL</label>
        <input
          className="add-creator-input"
          type="text"
          placeholder="Add an image address of a picture"
          value={imageURL}
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
