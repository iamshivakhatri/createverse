import React from 'react';
import Card from '../components/card';
import './ShowCreators.css'

const ShowCreators = ({ creators, onEdit, onDelete }) => {
  return (
    /**Checking if it is empty */
    <div className='main-container'>
      {creators.length === 0 ? (
        <div className='no-creators-message'>No creators to display</div>
      ) : (
        <div className="card-container">
          {creators.map((creator) => (
            <Card key={creator.id} creator={creator} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowCreators;
