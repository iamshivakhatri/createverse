import React from 'react';
import { useParams } from 'react-router-dom';
import './ViewCreator.css'; // You can create a CSS file for styling

const ViewCreator = ({ creators }) => {
  const { id } = useParams();

  // Find the creator with the matching ID
  const creator = creators.find((c) => c.id === parseInt(id));

  if (!creator) {
    return <div>Creator not found</div>;
  }

  return (
    <div className="view-creator">
      <h1>{creator.name}</h1>
      <img src={creator.imageURL} alt={creator.name} />
      <p>{creator.description}</p>
    </div>
  );
};

export default ViewCreator;
