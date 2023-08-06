import React, { useState } from 'react';
import './card.css'
import EditModal from '../pages/Editmodal';
import { Link } from 'react-router-dom';

const Card = ({ creator, onEdit, onDelete }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
  };


  const handleEditModalSave = (editedCreator) => {
    // Handle saving the edited creator data
    onEdit(editedCreator)
    console.log('Edited Creator:', editedCreator);
    handleEditModalClose();
  };


  return (
    <div className="card">
      <img src={creator.imageURL} alt={creator.name} />
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
       <Link to = {"/creators/"+creator.id} > Visit Creator</Link>
      <div className="card-buttons">
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={() => onDelete(creator)}>Delete</button>
      </div>

     

{showEditModal && (
        <EditModal creator={creator} onSave={handleEditModalSave} onClose={handleEditModalClose} />
      )}
    
    </div>
  );
};

export default Card;
