// pages/EditCreator.js
import React, { useState } from 'react';

const EditCreator = ({ creator, onSave }) => {
  const [name, setName] = useState(creator.name);
  const [url, setUrl] = useState(creator.url);
  const [description, setDescription] = useState(creator.description);
  const [imageURL, setImageURL] = useState(creator.imageURL);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCreator = { name, url, description, imageURL };
    onSave(updatedCreator);
  };

  return (
    <div>
      <h1>Edit Content Creator</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>URL:</label>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <label>Image URL:</label>
        <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditCreator;
