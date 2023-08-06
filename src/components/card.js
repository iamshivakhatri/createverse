import React, { useState } from 'react';
import './card.css'
import EditModal from '../pages/Editmodal';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


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
    handleEditModalClose();
  };


  return (
   
    <article style={{ backgroundImage: `url(${creator.imageURL})`, backgroundSize: 'cover' }}>
        
      
    
      <h2>{creator.name}</h2>
      <p className="description-line">{creator.description}</p>
       <Link to = {"/creators/"+creator.id} > <i className="fas fa-external-link-alt"></i> </Link>
      <div className="card-buttons">
        <button onClick={handleEditClick}>
        <i className="fas fa-edit"></i> {/* Icon for Edit */}
        </button>
        <button onClick={() => onDelete(creator)}>
        <i className="fas fa-trash-alt"></i>
        </button>
      </div>

     

{showEditModal && (
        <EditModal creator={creator} onSave={handleEditModalSave} onClose={handleEditModalClose} />
      )}
    
    </article>
  );
};

export default Card;
