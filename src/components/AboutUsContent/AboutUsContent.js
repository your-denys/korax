import React from 'react';
import './AboutUsContent.css';

const AboutUsContent = () => {
  return (
    <section className='about-us'>
      <p className="blocks-title">About us</p>
      <h2 className="blocks-description blocks-description-border">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
      <article className='about-us-content'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc vulputate libero et velit interdum, ac aliquet odio
          mattis. <br/> <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis.
        </p>
      </article>
    </section>
  );
};

export default AboutUsContent;
