import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import NutritionalValues from '../Accrodiation/Accrodation.jsx';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './What-your-mom.css';

import Thali from '../../Images/thali.png';

import float from '../../Images/float.jpg';
import food from '../../Images/food.jpg';
import Proten from '../../Images/proton.jpg';
import iron from '../../Images/iron.jpg';
import food2 from '../../Images/food2.jpg';
import meal1 from '../../Images/meal1.jpg';
import meal from '../../Images/meal.jpg';



function Home() {
 

  
  return (
    <div className='Women'>
      <Header />

     
      {/* Hear From Moms Section */}
      <div className='Mom'>
        <div className='Mom1'>
        <h3>Thali Tales</h3>
    <p>How you treat your diet changes everything during your pregnancy! South Asian diets are naturally rich in essential nutrients, but we should be aware regarding the quality and quantity of food. While many of these practices are rooted in Ayurvedic and traditional medicine, it is important to balance them with modern nutritional science to ensure a healthy pregnancy.

</p>
        <button>Join The Network</button>
        </div>

        <div className='Mom2'>
       <img src={Thali} alt=""/>

</div>

      </div>

     





      <div className='Hear-Mom'>
        <h2>Thali Tales</h2>
        <div className='Hear-Mom-Content'>
          <div className='Hear1'>
           
            <h3>Folate and Fiber</h3>
            <img src={float} alt=""/>
            <p>
            Whole Grains: Brown rice, whole wheat roti, jowar, and bajra provide fiber and essential vitamins.</p>
            <p>Beets, Oranges & Citrus Fruits: Rich in folate, Vitamin C, and antioxidants.</p>
            <p>Figs & Dates: Help with digestion and boost iron levels.</p>
          </div>

          <div className='Hear1'>
         
            <h3>Protein</h3>
            <img src={Proten} alt=""/>
            <p>Lentils (Dal): Packed with protein, fiber, and iron, lentils help prevent constipation and anemia.
            </p>
            <p>Chickpeas (Chana) & Kidney Beans (Rajma): Excellent plant-based protein sources that support muscle and tissue development.</p>
          </div>

          <div className='Hear1'>
         
            <h3>Calcium and Iron</h3>
            <img src={iron} alt=""/>
            <p>
            Leafy Greens: Spinach (Palak), Fenugreek (Methi), and Drumstick Leaves (Moringa) are loaded with iron and folic acid.
            </p>
            <p>Calcium and Iron
Leafy Greens: Spinach (Palak), Fenugreek (Methi), and Drumstick Leaves (Moringa) are loaded with iron and folic acid.
Dairy Products: Yogurt (Dahi), Milk, and Buttermilk (Chaas) are excellent sources of calcium and probiotics.</p>
<p>Sesame Seeds (Til) & Almonds: Provide iron, calcium, and healthy fats.</p>
          </div>

          <div className='Hear1'>
       
            <h3>Daily Meal Plan</h3>
            <img src={food} alt=""/>
            <p>
            Kitchen to Table: Nourish, Savor, Thrive!
            Discover delicious, fresh recipes tailored to your dietary needs and nutritional goals. Enjoy meals that satisfy your cravings while keeping you healthy—one thoughtfully curated dish at a time.
            </p>
       <button>Join here !</button>
          </div>
        </div>
      </div>

{/* Prices  Section*/}
<div className='Hear-Mom'>
        <h2>Foods To Avoid</h2>
        <div className='Hear-Mom-Content'>
          <div className='Hear1'>
            <h3>Foods That May Induce Contractions</h3>
            <img src={meal} alt=""/>
            <p><li>Ajwain (Carom Seeds) & Fenugreek (Methi) Seeds: Used post-delivery for lactation but should be limited in early pregnancy as they may stimulate contractions.</li></p>
            <p><li>Excessive Spicy Foods: Overly spicy dishes can cause acidity, heartburn, and discomfort.</li>
            </p>
          </div>

          <div className='Hear1'>
            <h3>Unpasteurized Dairy & Soft Cheeses</h3>
            <img src={meal1} alt=""/>
            <p> <li>Unpasteurized milk & soft cheeses (Paneer, Brie, Feta, Blue Cheese): May contain harmful bacteria like listeria, which can lead to infections. Always opt for pasteurized dairy products.</li>
           
            </p>
          </div>

          <div className='Hear1'>
            <h3>Caffeinated & Sugary Drinks</h3>
            <img src={food2} alt=""/>
            <p><li>Tea & Coffee: High caffeine intake (over 200mg per day) may increase the risk of miscarriage. Limit to one small cup per day.</li>
            
            </p>
            <p><li>Soft Drinks & Sugary Juices: Contain artificial sweeteners and high sugar content, which can lead to gestational diabetes.</li></p>
           
          </div>
        </div>



<NutritionalValues/>

        <div className='Hear-Mom-Content'>
          <div className='Hear1'>
            <h3>Foods That May Cause Digestive Issues</h3>
            <p><li>Raw Sprouts: May carry bacteria like E.coli and should be cooked before consumption.</li></p>
            <p><li>Too much Ghee or Fried Foods: While small amounts of ghee are beneficial, excessive intake can lead to weight gain and indigestion.</li>
            </p>
          </div>

          <div className='Hear1'>
            <h3>Unpasteurized Dairy & Soft Cheeses</h3>
            <p> <li>Heavy Lentils (Chana Dal, Urad Dal, Rajma): Can cause bloating; should be consumed in moderation.</li> </p>
            <p> <li>Raw & Undercooked Seafood, Eggs, and Meat: Do not eat sushi made with raw fish (cooked sushi is safe).</li>
           
            </p>
          </div>

          <div className='Hear1'>
            <h3>Processed & Preservative-Laden Foods</h3>
            <p><li>Pickles & Excess Salt: High sodium levels can cause water retention and increased blood pressure.</li>
            
            </p>
            <p><li>Packaged & Instant Foods: Often contain preservatives, MSG, and unhealthy trans fats.</li></p>
           
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


    


<Footer/>

    </div>
  );
}

export default Home;
