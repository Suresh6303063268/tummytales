import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './Pregnancy-tests.css';


import Pregent4 from '../../Images/Pregent5.jpg';
import Pregent6 from '../../Images/Pregent6.jpg';

import Pregent1 from '../../Images/blood.jpg';
import Pregent2 from '../../Images/urene.jpg';
//import Pregent11 from '../../Images/Pregent11.jpg';
import Pregent8 from '../../Images/Pregent8.jpg';
import Pregent13 from '../../Images/Pregent13.jpg';
import Pregent14 from '../../Images/Pregent14.jpg';
import Lern from '../../Images/lern.jpg';
import Lern1 from '../../Images/lern2.jpg';
import Lern2 from '../../Images/lern3.jpg';
import Lern3 from '../../Images/lern4.jpg';
import Lern4 from '../../Images/lern5.jpg';




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

<div className='Hear-Test'>
        <h2>First Trimester</h2>
        <div className='Hear-Mom-Test'>
          <div className='Test1'>
          <img src={Pregent1} alt=""/>
            <h3>Blood Tests</h3>
            <p>
            Getting your blood work done is one of the first steps of your pregnancy. This will give the doctor several details that will be used in your future. You will be asked for additional blood samples later as well, but this will first assess overall health and any underlying conditions you may have.
            </p>
          </div>

          <div className='test1'>
          <img src={Pregent2} alt=""/>
            <h3>Urine Tests</h3>
            <p>
            Urine tests will be a routine part of your prenatal care. While they may feel tedious, they provide valuable insights into how your body is responding to pregnancy. During your first visit, urine tests help confirm pregnancy by measuring rising HCG levels. They also screen for urinary tract infections (UTIs), kidney issues, and early signs of preeclampsia. Be prepared to receive a urine cup at every doctor’s visit, as these tests play a crucial role in monitoring your health throughout pregnancy.
            </p>
          </div>

          <div className='test2'>
          <img src={Pregent1} alt=""/>
            <h3>Dating and Viability Ultrasound</h3>
            <p>
            The first trimester ultrasound typically takes place during your initial appointment and is performed transvaginally. While the transvaginal probe may appear large, the procedure is painless. During the scan, you will see a magnified image of your baby, often in a C-like formation within the sac. This ultrasound aims to confirm pregnancy viability, detect the baby’s heartbeat, and estimate the due date. Measurements such as the crown-rump length (CRL) and gestational sac (GS) size are taken to ensure they align with your last ovulation cycle.
            </p>
          </div>
        </div>

        <div className='Hear-Mom-Test'>
          <div className='Test1'>
          <img src={Pregent13} alt=""/>
            <h3>Genetic Screening (NIPT and Carrier)</h3>
            <p>
            Genetic screening tests are optional but recommended to assess the risk of genetic disorders your child may be predisposed to. This non-invasive procedure requires only a blood or saliva sample. These tests provide valuable insights, allowing you to prepare for potential outcomes. If necessary, you will be referred to a genetic counselor for further guidance.
            </p>
          </div>

          <div className='test1'>
          <img src={Pregent14} alt=""/>
            <h3>Nuchal Translucency (NT) Scan</h3>
            <p>
            The ultrasound technician performs a specialized ultrasound that measures the fluid-filled space at the back of the baby's neck. An increased NT measurement can indicate a higher risk of chromosomal abnormalities or congenital heart defects, such as Down Syndrome, Edwards Syndrome, Patau Syndrome, etc. If the NT test is normal, no further testing is required. If it is irregular, you will be communicated with for further testing.
            </p>
          </div>

         
        </div>
      </div>





      
<div className='Hear-Test'>
        <h2>Second Trimester</h2>
        <div className='Hear-Mom-Test'>
          <div className='Test1'>
          <img src={Pregent1} alt=""/>
            <h3>Maternal Serum Screening(MSS)</h3>
            <p>
            Getting your blood work done is one of the first steps of your pregnancy. This will give the doctor several details that will be used in your future. You will be asked for additional blood samples later as well, but this will first assess overall health and any underlying conditions you may have.
            </p>
          </div>

          <div className='test1'>
          <img src={Pregent4} alt=""/>
            <h3>Urine Tests</h3>
            <p>
            Urine tests will be a routine part of your prenatal care. While they may feel tedious, they provide valuable insights into how your body is responding to pregnancy. During your first visit, urine tests help confirm pregnancy by measuring rising HCG levels. They also screen for urinary tract infections (UTIs), kidney issues, and early signs of preeclampsia. Be prepared to receive a urine cup at every doctor’s visit, as these tests play a crucial role in monitoring your health throughout pregnancy.
            </p>
          </div>

          <div className='test2'>
          <img src={Pregent6} alt=""/>
            <h3>Dating and Viability Ultrasound</h3>
            <p>
            The first trimester ultrasound typically takes place during your initial appointment and is performed transvaginally. While the transvaginal probe may appear large, the procedure is painless. During the scan, you will see a magnified image of your baby, often in a C-like formation within the sac. This ultrasound aims to confirm pregnancy viability, detect the baby’s heartbeat, and estimate the due date. Measurements such as the crown-rump length (CRL) and gestational sac (GS) size are taken to ensure they align with your last ovulation cycle.
            </p>
          </div>
        </div>
        <h2>Third Trimester</h2>
        <div className='Hear-Mom-Test'>
          <div className='Test1'>
          <img src={Pregent13} alt=""/>
            <h3>Nuchal Translucency (NT) Scan</h3>
            <p>
            What is the secondary ultrasound within the first trimester needed for? Get to know here.
            </p>
          </div>

          <div className='test1'>
          <img src={Pregent14} alt=""/>
            <h3>Nuchal Translucency (NT) Scan</h3>
            <p>
            What is the secondary ultrasound within the first trimester needed for? Get to know here.
            </p>
          </div>

         
        </div>
      </div>

      <div className="marquee-wrapper">
      <div className="marquee-content">
        {[...Array(6)].map((_, index) => (
          <span key={index}>
            <AcUnitIcon className="margue-icon" /> Meet Your Instructions. <AcUnitIcon className="margue-icon" />
          </span>
        ))}
      </div>
    </div>

        <div className='Hear-Mom-Test'>
          <div className='Test1'>
          <img src={Lern3} alt=""/>
            <h3>MACK</h3>
          
          </div>

          <div className='test1'>
          <img src={Lern4} alt=""/>
            <h3>KATE</h3>
           
          </div>
          <p>
          It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world.
            </p>
         
        </div>
    
      
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
