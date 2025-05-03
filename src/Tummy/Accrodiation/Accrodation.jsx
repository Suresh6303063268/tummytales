import React, { useState } from 'react';
import './Accrodiation.css'; // Make sure file name matches exactly (no typo!)

const AccordionItem = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <button className={`accordion ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
        {title}
      </button>
      <div className="panel" style={{ display: isActive ? 'block' : 'none' }}>
        {children}
      </div>
    </>
  );
};

const Accordion = () => {
  return (
    <div>
      <h2>Nutritional Values</h2>

      <AccordionItem title="Protein (3-4 servings)">
        <ul>
          <li>3 oz cooked lean meat</li>
          <li>3 oz poultry</li>
          <li>1 egg</li>
          <li>½ cup beans</li>
          <li>¼ cup nuts</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Carbohydrates (6-8 servings)">
      <ul>
          <li>  ½ cup cooked rice/pasta</li>
          <li>1 slice whole grain bread</li>
          <li>½ cup oats</li>
        

        


        </ul>
      </AccordionItem>

      <AccordionItem title="Fats (4-5 servings)">
        <ul>
      <li> ¼ avocado</li>
          <li>10 almonds</li>
          <li>1 tbsp chia seeds</li>
        
          </ul>



      </AccordionItem>

      <AccordionItem title="Dairy (3-4 servings)">
      <ul>
      <li>   1 cup milk/yogurt</li>
          <li>  1.5 oz cheese</li>
         
          </ul>

       
        
      </AccordionItem>
    </div>
  );
};

export default Accordion;
