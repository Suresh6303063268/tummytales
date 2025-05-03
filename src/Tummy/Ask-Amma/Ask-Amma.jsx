import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';


import './Ask-Amma.css';


//import Pregent11 from '../../Images/Pregent11.jpg';

import Pregent13 from '../../Images/Pregent13.jpg';



function Home() {
 

  
  return (
    <div className='Women'>
      <Header />

     
      {/* Hear From Moms Section */}
      <div className='Mom'>
        <div className='Ask-mom1'>
        <img src={Pregent13} alt=""/>
        </div>

        <div className='Ask-mom2'>
    
       <h3>
       Ask Amma</h3>
      <p>Meet Ask Amma - your trusted AI assistant for all pregnancy-related questions! Whether you're looking for expert-backed advice, cultural insights, or just a little reassurance.

Amma is here to provide detailed, personalized answers whenever you need them. Give it a try!</p>
        <button>Get Started !</button>

</div>

      </div>

     

{/* Prices  Section*/}





<Footer/>

    </div>
  );
}

export default Home;
