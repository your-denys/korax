import './RoadMapContent.css';

const Card = () => {
    
  return (
    <article className='card-wrapper'>
      <button className='card-item' style={{backgroundColor: '#59575A'}}>
        <span>01</span>
        <h2>Lorem, ipsum</h2>
        <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc vulputate libero et velit interdum, ac aliquet odio
          mattis.
        </p> 
      </button>
      <button  className='card-item' style={{backgroundColor: '#0A080B'}}>
        <span>02</span>
        <h2>Lorem, ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc vulputate libero et velit interdum, ac aliquet odio
          mattis.
        </p>
      </button>
      <button  className='card-item' style={{backgroundColor: '#06593B'}}>
        <span>03</span>
        <h2>Lorem, ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc vulputate libero et velit interdum, ac aliquet odio
          mattis.
        </p>
      </button>
      <button  className='card-item' style={{backgroundColor: '#52C4BC'}}>
        <span>04</span>
        <h2>Lorem, ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc vulputate libero et velit interdum, ac aliquet odio
          mattis.
        </p>
      </button>
    </article>
  );
};

export default Card;
