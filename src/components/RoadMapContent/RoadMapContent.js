import React from 'react';
import Card from './Card';

const RoadMapContent = () => {
  return (
    <section className="roadmap">
      <p className="blocks-title">Roadmap</p>
      <h2 className="blocks-description blocks-description-border" style={{color: '#161616'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
      <Card/>
      <p className='roadmap-text-footer' style={{color: '#161616', marginTop:'70px', width:'260px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, tempore?</p>
    </section>
  );
};

export default RoadMapContent;
