import React from 'react';
import Card from '../components/card';
import './ShowCreators.css'


const ShowCreators = ({ creators, onEdit, onDelete }) => {
  return (
    <div className='main-container'> 
      <h1>All Content Creators</h1>
      <div className="card-container">
        {creators.map((creator) => (
          <Card key={creator.id} creator={creator} onEdit = {onEdit} onDelete = {onDelete} />
        ))}
      </div>
    </div>
  );
};

export default ShowCreators;
