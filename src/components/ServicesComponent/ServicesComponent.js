// import Drag from './Drag';
import './ServicesComponent.css';
import arrow from '../../assets/button-arrow.svg'

const ServicesComponent = () => {


  return (
    <div className="services-component">
      <div className='services-wrapper'>
        <section className='services-content'>
          <article className='services-main'> 
            <h2 className='services-title'>SERVICES</h2>
            <img className='services-arrow' src={arrow} alt='Arrow'/>
          </article>
          <article className='services-description'>
            <p className='services-first'>*Lorem ipsum</p>
            <p>*Lorem ipsum</p>
            <p>*Lorem ipsum</p>
            <p>*Lorem ipsum</p>
          </article>
        </section>
      {/* <Drag /> */}
      </div>
    </div>
  );
};

export default ServicesComponent;
