import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';


import './Mom-mom.css';

import Pregent7 from '../../Images/Pregent7.jpg';




function Home() {
 

  
  return (
    <div className='Women'>
      <Header />

     
      {/* Hear From Moms Section */}
      <div className='Mom-mom'>
        <div className='Mom-Mom1'>
        <h3>Mom-to-Mom Network</h3>
        <p>Hey Mom! Have questions, concerns, or just something on your mind that only other moms would understand? We’re here for you! Join our thread and chat function with a community of moms who truly get it. Don’t be afraid, ask away. You’re never alone—let’s navigate this journey together!</p>
        <button>Join The Network</button>
        </div>

        <div className='Mom-Mom2'>
       <img src={Pregent7} alt=""/>

</div>

      </div>

     

{/* Prices  Section*/}





<Footer/>

    </div>
  );
}

export default Home;
