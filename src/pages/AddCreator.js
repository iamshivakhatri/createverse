import React, { useState } from 'react';
import './AddCreator.css'; // Import the Pico CSS file

const AddCreator = ({ onAdd }) => {
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

  };

  return (
    <div className="add-creator-container">
      <h1 className="add-creator-title">Add Content Creator</h1>
      <form className="add-creator-form" onSubmit={handleSubmit}>
        <label className="add-creator-label">Name:</label>
        <input
          className="add-creator-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="add-creator-label">URL:</label>
        <input
          className="add-creator-input"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <label className="add-creator-label">Description:</label>
        <textarea
          className="add-creator-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label className="add-creator-label">Image URL:</label>
        <input
          className="add-creator-input"
          type="text"
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
