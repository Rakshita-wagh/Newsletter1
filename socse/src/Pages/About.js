import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import boy from '../images/boy.png';
import girl from '../images/girl.png';
const About = () => {
  return (
    <div className="container2">
      <div className="mb-4">
        <div className='border-left border-right border-bottom'>
          <h1 className="text-center">Association Coordinators</h1>
        </div>
        <div className="coordinate">
        <div className="image1">
            <img
              src="https://placehold.it/150x150" 
              alt="anand"
              className="img rounded-circle"
            />
            <h4 className='anand'>Anand Meti</h4>
            <p className='num'>Mobile:12345678</p>
          </div>
          <div className="image2">
            <img
              src="https://placehold.it/150x150" 
              alt="uday"
              className="img rounded-circle"
            />
            <h4 className='uday'>Uday Kulkarni</h4>
            <p className='num'>Mobile:12345678</p>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h1 className="text-center">Association Leads</h1>
        <div className='cordinate'>
          <div className='image'>
        
        <img src={boy} className='img1'/>
        <img src={girl} className='img2'/>
        </div>
        </div>
        <div className='lead'>
          <div className="coordinate">
            <h2 className='module'>Cultural</h2>
            <div className='name'>
           <p>Sathwik</p>
          <p className="space-between">Sakshi</p>
      </div>
          </div>
          <div className="coordinate">
            <h2 className='module'>Cocurricular</h2>
            <div className='name1'>
           <p>Praveen</p>
          <p className="space-between">Akshata</p>
      </div>
          </div>
          <div className="coordinate">
            <h2 className='module'>Media</h2>
            <div className='name2'>
           <p>Prateeth</p>
          <p className="space-between">Rakshita</p>
      </div>
          </div>
          <div className="coordinate">
            <h2 className='module'>Sports</h2>
            <div className='name3'>
           <p>Bharat</p>
          <p className="space-between">Apeksha</p>
      </div>
          </div>
          <div className="coordinate">
            <h2 className='module'>Literature</h2>
            <div className='name4'>
           <p>Murali</p>
          <p className="space-between">Gouri</p>
      </div>
          </div>
          <div className="coordinate">
            <h2 className='module'>Programming</h2>
            <div className='name5'>
           <p>Shuchit</p>
          <p className="space-between">-</p>
      </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default About;
