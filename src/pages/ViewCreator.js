import React, {useState} from 'react';
import EditModal from './Editmodal';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './ViewCreator.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';




const ViewCreator = ({ creators, onEdit, onDelete }) => {
  const navigate = useNavigate();
  const { id } = useParams();
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

  // Getting the creator based on the id, we could have got creator differently too.
  const creator = creators.find((c) => c.id === parseInt(id));

  if (!creator) {
    return <div className='black'>
      <h2> Creator Not Found</h2>
    </div>;
  }

  return (

    <div className='containerBig'>
      <div className="top-container">  
      <div className="image-section">
      <img src={creator.imageURL} alt={creator.name} />
     
    </div>
    <div className="info-section">
      <div className='top'>  
      <div className='title'>
      {creator.name}
      </div>
      <div  className = "icon">  
      <Link to = {creator.url} > <i className="fas fa-external-link-alt"></i> </Link>
      </div>
      </div>

      <p>{creator.description}</p>
    </div>


    </div>
    
    <div className="buttons-section">
      <button onClick={() =>{
          handleEditClick()
      } }>Edit</button>
      <button onClick={
        () => {
          onDelete(creator)
          navigate("/");
        } 

        }>Delete</button>
    </div>

    {showEditModal && (
        <EditModal creator={creator} onSave={handleEditModalSave} onClose={handleEditModalClose} />
      )}

  </div>
  

  );
};

export default ViewCreator;
