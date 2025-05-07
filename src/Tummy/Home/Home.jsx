import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Contact from '../Contact/Contact.jsx';
import { FaHeart, FaRegHandshake, FaLeaf } from 'react-icons/fa';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';

import Pregent3 from '../../Images/pre8.jpg';
import Pregent4 from '../../Images/Pregent3.jpg';
import Pregent6 from '../../Images/pre9.png';
import Pregent7 from '../../Images/Pregent7.jpg';
import Pregent8 from '../../Images/Pregent5.jpg';
import Pregent10 from '../../Images/Pregent10.jpg';
import Pregent11 from '../../Images/pre2.jpg';
import Pregent12 from '../../Images/Pregent12.jpg';
import Pregent13 from '../../Images/pre6.jpg';
import Pregent14 from '../../Images/Pregent14.jpg';
import Pregent16 from '../../Images/pregent16.jpg';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    { id: 4, title: "Slide 1", image: Pregent11 },
    { id: 2, title: "Slide 2", image: Pregent4 },
    { id: 3, title: "" }, // No background key; handled via CSS
    { id: 1, title: "Slide 4", image: Pregent8 },
  ];

  return (
    <div className='Women'>
      <Header />

      <div className="carousel-container">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`carousel-slide ${slide.id === 3 ? 'slide-3' : ''}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="carousel-image"
              />

              {slide.id === 1 && (
                <div className='Slider-img1'>
                  <img src={Pregent6} alt='Pregnant Woman Reflecting' />
                </div>
              )}

              {slide.id === 2 && (
                <div className='Slider-img'>
                  <img src={Pregent10} alt='Pregnant Woman Reflecting' />
                </div>
              )}

              {slide.id === 3 && (
                <div className='Slider-img2'>
                  <img src={Pregent3} alt='Pregnant Woman Reflecting' />
                  <p>
                    Pregnancy is a beautiful journey that should be cherished. For South Asians in the United States, medical care and cultural practices often feel poles apart – we bridge that gap for you. By blending South Asian heritage with Western medicine, we create a seamless and supportive experience.

                    We offer guidance that blends both worlds, ensuring that no sort of dialogue gets lost. You can expect a touch of familiarity within each step of your special chapter.
                  </p>
                </div>
              )}

              {slide.id === 4 && (
                <div className='Slider-text'>
                  <p>
                    Pregnancy is a beautiful journey that should be cherished. For South Asians in the United States, medical care and cultural practices often feel poles apart – we bridge that gap for you. By blending South Asian heritage with Western medicine, we create a seamless and supportive experience.

                    We offer guidance that blends both worlds, ensuring that no sort of dialogue gets lost. You can expect a touch of familiarity within each step of your special chapter.
                  </p>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>

      {/* Hear From Moms Section */}
      <div className='Hear-Mom'>
        <h2>Hear From Moms</h2>
        <div className='Hear-Mom-Content'>
          <div className='Hear1'>
            <h3><FaHeart style={{ marginRight: '10px' }} /> Rely</h3>
            <p>
              I tried to talk to my doctor about feeling overwhelmed, but postpartum depression isn’t something I can go to my family for. I don’t know where to turn for help.
            </p>
          </div>

          <div className='Hear1'>
            <h3><FaRegHandshake style={{ marginRight: '10px' }} /> Understand</h3>
            <p>
              My doctor told me to eat more protein and dairy, but I am vegetarian and they do not seem to understand my dilemma - my doctor in India didn’t mention any problems when I was there.
            </p>
          </div>

          <div className='Hear1'>
            <h3><FaLeaf style={{ marginRight: '10px' }} /> Trust</h3>
            <p>
              Back home, we rely on traditional remedies for morning sickness, but my doctor dismissed them and only suggested medications. I didn’t know what I could trust.
            </p>
          </div>
        </div>
      </div>

      <p className='hear-text'>
        Moving to a new country itself presents countless challenges, yet the unique experiences of pregnant women navigating this transition often go unnoticed.

        Pregnancy is a time when advice—solicited or not—flows from every direction. However, when that advice is conflicting, shaped by both cultural traditions and unfamiliar medical practices, it can leave one feeling confused, isolated, and uncertain about the right path to take.

        Growing up in a different cultural environment means embracing a distinct set of norms, and adjusting to a new healthcare system and way of life takes time.

        TummyTales was born from our own experiences of seeking guidance and support while finding our footing in a new country. We understand the importance of feeling heard and having a space to ask questions without fear or hesitation.
      </p>

      {/* Prices Section */}
      <div className='Price'>
        <div><img src={Pregent16} alt='' /></div>
        <div>
          <h1>Silver</h1>
          <h4>Get access to 40 weeks of:</h4>
          <li>Mom-to-Mom Network</li>
          <li>Keep a Journal</li>
          <li>Daily Food Recommendations</li>
          <li>AI-generated responses</li>
          <button>$4.99</button>
        </div>

        <div className='Price2'><img src={Pregent14} alt='' /></div>
        <div>
          <h1>Gold</h1>
          <h4>Get access to 40 weeks of:</h4>
          <li>Silver Package Deal</li>
          <li>Discounts on Specialists</li>
          <li>Communicate with OB/GYN’s</li>
          <li>Curated TUMMY Box</li>
          <button>$8.99</button>
        </div>
      </div>

      <Contact />

      {/* Newsletter Section */}
      <div className='News-Letter'>
        <img src={Pregent7} alt='' />
        <h1>Subscribe to Our Newsletter</h1>
        <h4>Sign up with your email address to receive news and updates</h4>
        <form>
          <input type='text' placeholder='Enter The Email' />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
