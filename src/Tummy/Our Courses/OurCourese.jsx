import React, { useState } from 'react'
import './OurCourses.css';

import { CiClock2 } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";


import blood from '../../Images/blood.jpg';

import urene from '../../Images/urene.jpg';
import dating from '../../Images/dating.jpg';
import dattting1 from '../../Images/datting1.jpg';
import Scrum from '../../Images/scrum.jpg';



import fetal from '../../Images/fetal.jpg';
import nutriation from '../../Images/nutriation.jpg';
import scrum1 from '../../Images/scrum1.jpg';
import Sytoms from '../../Images/symtos.jpg';



import baby from '../../Images/baby-dev.jpg';
import warn from '../../Images/warn.jpg';
import list from '../../Images/list.jpg';



function OurCourses() {
  const [selectedCategory, setSelectedCategory] = useState('All Courses');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderCourses = () => {
    if (selectedCategory === 'Full Stack Courses') {
      return (
        <>
    
<div className='Our_Courses'>
            <img src={blood} alt="" />
            <h1>Blood Tests </h1>
          
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>Getting your blood work done is one of the first steps of your pregnancy. This will give the doctor several details that will be used in your future. You will be asked for additional blood samples later as well, but this will first assess overall health and any underlying conditions you may have.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>





          <div className='Our_Courses'>
            <img src={urene} alt="" />
            <h1>Urine Tests </h1>
            
            <div className='card-main-3'>
              <CiClock2/>
              <p>Urine tests will be a routine part of your prenatal care. While they may feel tedious, they provide valuable insights into how your body is responding to pregnancy. During your first visit, urine tests help confirm pregnancy by measuring rising HCG levels. They also screen for urinary tract infections (UTIs).</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>




          <div className='Our_Courses'>
            <img src={dating} alt="" />
            <h1>Dating and Viability Ultrasound</h1>
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>The first trimester ultrasound typically takes place during your initial appointment and is performed transvaginally. While the transvaginal probe may appear large, the procedure is painless. During the scan, you will see a magnified image of your baby, often in a C-like formation within the sac.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>





          <div className='Our_Courses'>
            <img src={Scrum} alt="" />
            <h1>Genetic Screening (NIPT and Carrier)</h1>
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>Genetic screening tests are optional but recommended to assess the risk of genetic disorders your child may be predisposed to. This non-invasive procedure requires only a blood or saliva sample. These tests provide valuable insights, allowing you to prepare for potential outcomes.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>









          <div className='Our_Courses'>
            <img src={dattting1} alt="" />
            <h1>Nuchal Translucency (NT) Scan</h1>
            
            <div className='card-main-3'>
              <CiClock2/>
              <p>The ultrasound technician performs a specialized ultrasound that measures the fluid-filled space at the back of the baby's neck. An increased NT measurement can indicate a higher risk of chromosomal abnormalities or congenital heart defects, such as Down Syndrome.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>








        </>
      );
    } 
    
    else if(selectedCategory === 'Job Assistance Placement Program'){
      return(
      <>
 
 <div className='Our_Courses'>
            <img src={Sytoms} alt="" />
            <h1>Symptoms That May Occur</h1>
           
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>The second trimester, typically considered the most comfortable phase of pregnancy, still comes with its own set of physical and emotional symptoms as the body adapts to the growing baby. Many women experience relief from early pregnancy symptoms like nausea and extreme fatigue.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>



          
          <div className='Our_Courses'>
            <img src={fetal} alt="" />
            <h1>Fetal Development</h1>
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>The second trimester of pregnancy, spanning from week 13 to week 26, is often considered the most comfortable period for many pregnant women. During this time, fetal development accelerates, and many important milestones occur. The fetus begins to grow rapidly in size and weight.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>




          <div className='Our_Courses'>
            <img src={nutriation} alt="" />
            <h1>Nutrition Tips</h1>
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>During the second trimester of pregnancy, a woman’s nutritional needs increase to support the rapid growth and development of the fetus, as well as the changes occurring in her own body. This period typically requires an additional 300–350 calories per day, which should come from nutrient-rich foods.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>


      </>
      )
    }


    else if(selectedCategory === 'Internships'){
      return(
        <>
      

      <div className='Our_Courses'>
            <img src={baby} alt="" />
            <h1>Baby’s Development</h1>
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>During the third trimester, your baby undergoes rapid growth and important developmental changes. The brain continues to mature quickly, and the lungs develop to prepare for breathing after birth. Fat accumulates under the skin, giving the baby a fuller, rounder appearance.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>





          <div className='Our_Courses'>
            <img src={list} alt="" />
            <h1> Key To-Do List</h1>
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>Attend regular prenatal check-ups (usually every 2 weeks, then weekly after week 36)

Monitor baby’s movements daily and report any significant decrease to your doctor

Finalize your birth plan – include preferences for pain relief, delivery positions, and emergency procedures.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>







          <div className='Our_Courses'>
            <img src={warn} alt="" />
            <h1>Warning Signs – Call Your Doctor If</h1>
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>During the third trimester, it’s important to watch for warning signs that may indicate complications. Call your doctor if you experience vaginal bleeding, leaking fluid, severe abdominal pain, strong contractions before 37 weeks, sudden swelling, severe headaches, vision changes, high fever. </p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>





        </>
      )
    }
    



    else if(selectedCategory === 'Certification Programs'){
      return(
        <>
      

      <div className='Our_Courses'>
            <img src={baby} alt="" />
            <h1>Baby’s Development</h1>
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>During the third trimester, your baby undergoes rapid growth and important developmental changes. The brain continues to mature quickly, and the lungs develop to prepare for breathing after birth. Fat accumulates under the skin, giving the baby a fuller, rounder appearance.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>





          <div className='Our_Courses'>
            <img src={list} alt="" />
            <h1> Key To-Do List</h1>
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>Attend regular prenatal check-ups (usually every 2 weeks, then weekly after week 36)

Monitor baby’s movements daily and report any significant decrease to your doctor

Finalize your birth plan – include preferences for pain relief, delivery positions, and emergency procedures.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>







          <div className='Our_Courses'>
            <img src={warn} alt="" />
            <h1>Warning Signs – Call Your Doctor If</h1>
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>During the third trimester, it’s important to watch for warning signs that may indicate complications. Call your doctor if you experience vaginal bleeding, leaking fluid, severe abdominal pain, strong contractions before 37 weeks, sudden swelling, severe headaches, vision changes, high fever. </p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>




        </>
      )
    }
    
    
    
    
    else {
      return (
        <>

<div className='Our_Courses'>
            <img src={blood} alt="" />
            <h1>Blood Tests </h1>
          
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>Getting your blood work done is one of the first steps of your pregnancy. This will give the doctor several details that will be used in your future. You will be asked for additional blood samples later as well, but this will first assess overall health and any underlying conditions you may have.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>





          <div className='Our_Courses'>
            <img src={urene} alt="" />
            <h1>Urine Tests </h1>
            
            <div className='card-main-3'>
              <CiClock2/>
              <p>Urine tests will be a routine part of your prenatal care. While they may feel tedious, they provide valuable insights into how your body is responding to pregnancy. During your first visit, urine tests help confirm pregnancy by measuring rising HCG levels. They also screen for urinary tract infections (UTIs).</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>




          <div className='Our_Courses'>
            <img src={dating} alt="" />
            <h1>Dating and Viability Ultrasound</h1>
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>The first trimester ultrasound typically takes place during your initial appointment and is performed transvaginally. While the transvaginal probe may appear large, the procedure is painless. During the scan, you will see a magnified image of your baby, often in a C-like formation within the sac.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>





          <div className='Our_Courses'>
            <img src={Scrum} alt="" />
            <h1>Genetic Screening (NIPT and Carrier)</h1>
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>Genetic screening tests are optional but recommended to assess the risk of genetic disorders your child may be predisposed to. This non-invasive procedure requires only a blood or saliva sample. These tests provide valuable insights, allowing you to prepare for potential outcomes.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>









          <div className='Our_Courses'>
            <img src={dattting1} alt="" />
            <h1>Nuchal Translucency (NT) Scan</h1>
            
            <div className='card-main-3'>
              <CiClock2/>
              <p>The ultrasound technician performs a specialized ultrasound that measures the fluid-filled space at the back of the baby's neck. An increased NT measurement can indicate a higher risk of chromosomal abnormalities or congenital heart defects, such as Down Syndrome.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>






          <div className='Our_Courses'>
            <img src={scrum1} alt="" />
            <h1>Maternal Serum Screening(MSS)</h1>
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>Getting your blood work done is one of the first steps of your pregnancy. This will give the doctor several details that will be used in your future. You will be asked for additional blood samples later as well, but this will first assess overall health and any underlying conditions you may have.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>



          <div className='Our_Courses'>
            <img src={Sytoms} alt="" />
            <h1>Symptoms That May Occur</h1>
           
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>The second trimester, typically considered the most comfortable phase of pregnancy, still comes with its own set of physical and emotional symptoms as the body adapts to the growing baby. Many women experience relief from early pregnancy symptoms like nausea and extreme fatigue.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>



          
          <div className='Our_Courses'>
            <img src={fetal} alt="" />
            <h1>Fetal Development</h1>
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>The second trimester of pregnancy, spanning from week 13 to week 26, is often considered the most comfortable period for many pregnant women. During this time, fetal development accelerates, and many important milestones occur. The fetus begins to grow rapidly in size and weight.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>




          <div className='Our_Courses'>
            <img src={nutriation} alt="" />
            <h1>Nutrition Tips</h1>
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>During the second trimester of pregnancy, a woman’s nutritional needs increase to support the rapid growth and development of the fetus, as well as the changes occurring in her own body. This period typically requires an additional 300–350 calories per day, which should come from nutrient-rich foods.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>




          <div className='Our_Courses'>
            <img src={baby} alt="" />
            <h1>Baby’s Development</h1>
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>During the third trimester, your baby undergoes rapid growth and important developmental changes. The brain continues to mature quickly, and the lungs develop to prepare for breathing after birth. Fat accumulates under the skin, giving the baby a fuller, rounder appearance.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>





          <div className='Our_Courses'>
            <img src={list} alt="" />
            <h1> Key To-Do List</h1>
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>Attend regular prenatal check-ups (usually every 2 weeks, then weekly after week 36)

Monitor baby’s movements daily and report any significant decrease to your doctor

Finalize your birth plan – include preferences for pain relief, delivery positions, and emergency procedures.</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>







          <div className='Our_Courses'>
            <img src={warn} alt="" />
            <h1>Warning Signs – Call Your Doctor If</h1>
           
            <div className='card-main-3'>
              <CiClock2/>
              <p>During the third trimester, it’s important to watch for warning signs that may indicate complications. Call your doctor if you experience vaginal bleeding, leaking fluid, severe abdominal pain, strong contractions before 37 weeks, sudden swelling, severe headaches, vision changes, high fever. </p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Start Tracking</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>








   

        

         




         



         


        </>
      );
    }
  };

  return (
    <div className='OurCourse-bg'>
      <header>
        <h1>Essential  <span>Your Testing Tales</span></h1>
        <p>Essential Testing Tales.</p>
      </header> 

      <main>
        <ul>
          <li onClick={() => handleCategoryClick('All Courses')}>Essential  Your Testings</li>
          <li onClick={() => handleCategoryClick('Full Stack Courses')}>First Trimester</li>
          <li onClick={() => handleCategoryClick('Job Assistance Placement Program')}>Second Trimester</li>
          <li onClick={() => handleCategoryClick('Internships')}>Third Trimester</li>
       
        </ul>
      </main>

      <section>
        {renderCourses()}
      </section>
    </div>
  )
}

export default OurCourses;
