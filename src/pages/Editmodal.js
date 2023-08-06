// EditModal.js
import React, { useState } from 'react';
import './Editmodal.css';

const EditModal = ({ creator, onSave, onClose }) => {
  const [editedName, setEditedName] = useState(creator.name);
  const [editedUrl, setEditedUrl] = useState(creator.url);
  const [editedDescription, setEditedDescription] = useState(creator.description);
  const [editedImageURL, setEditedImageURL] = useState(creator.imageURL);

  const handleSave = () => {
    const editedCreator = {
      name: editedName,
      url: editedUrl,
      description: editedDescription,
      imageURL: editedImageURL,
      id: creator.id
    };
    onSave(editedCreator);
    onClose();
  };

  return (
 
  <div className="modal">

  <div className="modal-content">
    <div className="modal-header">
      <h2 className="modal-title">Edit Creator</h2>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
    </div>
    <form>
      <label className="input-label">Name:</label>
      <input
        type="text"
        className="input-field"
        value={editedName}
        onChange={(e) => setEditedName(e.target.value)}
      />
      <label className="input-label">URL:</label>
      <input
        type="text"
        className="input-field"
        value={editedUrl}
        onChange={(e) => setEditedUrl(e.target.value)}
      />
      <label className="input-label">Description:</label>
      <textarea
        className="textarea-field"
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
      />
      <label className="input-label">Image URL:</label>
      <input
        type="text"
        className="input-field"
        value={editedImageURL}
        onChange={(e) => setEditedImageURL(e.target.value)}
      />
      <div className="button-container">
        <button className="button" onClick={handleSave}>
          Save
        </button>
        <button className="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  </div>
</div>


  );
};

export default EditModal;
