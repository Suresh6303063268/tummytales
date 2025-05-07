import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

import OurCourses from '../Our Courses/OurCourese.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Pregnancy-tests.css';




//import Pregent11 from '../../Images/Pregent11.jpg';
import Pregent8 from '../../Images/Pregent8.jpg';

import Lern from '../../Images/lern.jpg';
import Lern1 from '../../Images/lern2.jpg';
import Lern2 from '../../Images/lern3.jpg';





function Home() {
 

  
  return (
    <div className='Women'>
      <Header />

     
      {/* Hear From Moms Section */}
      <div className='Mom'>
        <div className='Mom1'>
        <h3>Essential Testing Tales</h3>
       <p>Follow along to learn about the various tests available to you, their purposes, and how they may differ from what you're familiar with. We’ll guide you through each test, helping you understand its significance and what to expect. Ask your doctor about these tests and get their recommendation as well!</p>
        <button>Join The Network</button>
        </div>

        <div className='Mom2'>
       <img src={Pregent8} alt=""/>

</div>

      </div>

     

{/* Prices  Section*/}


<OurCourses/>



    
      
<div className='Hear-Test'>
        <h2>What you'll learn</h2>
        <div className='Hear-Mom-Test'>
          <div className='Test1'>
          <img src={Lern} alt=""/>
            <h3>Developing a Business Plan</h3>
            <p>
            Describe your lesson with a short summary.

Setting up Your Online Presence


            </p>
          </div>

          <div className='test1'>
          <img src={Lern1} alt=""/>
            <h3>Setting up Your Online Presence</h3>
            <p>
            Describe your lesson with a short summary.
            </p>
          </div>

          <div className='test2'>
          <img src={Lern2} alt=""/>
            <h3>Effective Communication</h3>
            <p>
            Describe your lesson with a short summary.
            </p>
          </div>
        </div>
        
      </div>


<Footer/>

    </div>
  );
}

export default Home;
