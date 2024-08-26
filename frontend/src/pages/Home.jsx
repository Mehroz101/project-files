import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import ParkingFinderCard from "../components/ParkingFinderCard";
import userImg from "../assets/parkingZone.png";
import Footer from "../components/Footer";
import Partner1 from "../assets/partner-1.png"
import Partner2 from "../assets/partner-2.png"
import Partner3 from "../assets/partner-3.png"
import Partner4 from "../assets/partner-4.png"
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const words = ["Anywhere","Anytime","Effortlessly","Smartly"];
  const speed = 150; // Typing speed in milliseconds

 

  const faqs = [
    {
      question: 'How do I reserve a parking spot?',
      answer: 'To reserve a parking spot, simply search for available spots in your area, select your desired time, and complete the payment. You\'ll receive a confirmation and instructions on how to access your reserved spot.'
    },
    {
      question: 'How can I list my parking space for rent?',
      answer: 'Listing your parking space is easy. Go to the "List Your Space" page, provide details about your spot, set your price, and publish your listing. Our platform will handle the rest!'
    },
    {
      question: 'What if I need to cancel my reservation?',
      answer: 'If you need to cancel, you can do so through your account dashboard. Depending on the cancellation policy of the spot owner, you may be eligible for a refund.'
    },
    {
      question: 'Is my payment information secure?',
      answer: 'Yes, we use industry-standard encryption to ensure that your payment information is secure. Your data is protected with the highest levels of security.'
    }
  ];

  const handleClick = index => {
    if (activeIndex === index) {
      setHeight('0px');
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      setHeight(`${contentRef.current.scrollHeight}px`);
    }
  };

  useEffect(() => {
    if (activeIndex === null) {
      setHeight('0px');
    }
  }, [activeIndex]);
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === currentWord.length) {
          setIsDeleting(true);
        }
      } else {
        setText(currentWord.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const typingInterval = setInterval(handleTyping, speed);

    return () => clearInterval(typingInterval);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <>
      <Navbar />
      <div className="hero_section">
        <div className="hero_left">
          <ParkingFinderCard />
        </div>
        <div className="hero_right">
          <div className="here_right_text">
            {/* //  <h1>Smart <span>Parking</span> Smart <span>Solution</span></h1>  */}
            <h1>Find Your Perfect Parking Spot <span> {text}</span></h1>
            <p>
              Discover the convenience of finding and reserving parking spaces in advance. Whether you're heading to work, shopping, or an event, our smart parking solution makes it easy to secure a spot with just a few clicks.
            </p>
          </div>
        </div>
      </div>
      <div className="howtobook_container">
        <h2>How It Works?</h2>
        <p className="sporttext">Effortlessly explore, choose, and reserve your ideal parking spot in just a few clicks.</p>
        <div className="stepboxs">

          <div className="step_box">
            <div className="number">
              <span>1</span>
            </div>
            <h3>Explore Nearby Parking</h3>
            <p>Open our platform and instantly view available parking spots in your desired location. Use the map or search function to explore nearby options and filter by price, distance, or amenities.</p>
          </div>
          <div className="step_box">
            <div className="number">
              <span>2</span>
            </div>
            <h3>Choose Your Spot</h3>
            <p>Browse through available spots, check real-time availability, and view detailed information including photos and user reviews. Select the perfect spot that fits your needs.</p>
          </div>
          <div className="step_box">
            <div className="number">
              <span>3</span>
            </div>
            <h3>Reserve & Pay</h3>
            <p>Once you’ve found the ideal spot, reserve it with a click. Complete your payment securely, and receive instant confirmation with all the details you need.</p>
          </div>
        </div>
      </div>
      <section class="features">
        <div class="section-header">
          <h2>Why Choose Us</h2>
          <p>Explore the advantages of our smart parking solution and how it enhances your parking experience.</p>
        </div> <div className="feature_boxs">  <div class="feature-box">
          <div class="icon">
            <i class="fas fa-search"></i>
          </div>
          <h3>Real-Time Availability</h3>
          <p>Get up-to-date information on available parking spots.</p>
        </div>
          <div class="feature-box">
            <div class="icon">
              <i class="fas fa-lock"></i>
            </div>
            <h3>Secure Payments</h3>
            <p>Enjoy secure transactions with our integrated payment system.</p>
          </div>
          <div class="feature-box">
            <div class="icon">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <h3>User-Friendly Interface</h3>
            <p>Easy navigation and quick searches for your convenience.</p>
          </div>
          <div class="feature-box">
            <div class="icon">
              <i class="fas fa-calendar-day"></i>
            </div>
            <h3>Flexible Options</h3>
            <p>Reserve for a few hours or several days, based on your needs.</p>
          </div>
        </div>
      </section>
      <section class="feature-highlight">
        <div class="feature-image">
          <img src={userImg} alt="Feature Image" />
        </div>
        <div class="feature-content">
          <p class="supporting-line">Discover Our Key Feature</p>
          <h2>Unlock the Best Parking Experience</h2>
          <p>Our innovative system makes parking and renting spaces more convenient than ever. Sign up to experience seamless parking management and discover new opportunities to list your space.</p>
          <a href="#signup" class="cta-button">Get Started</a>
        </div>
      </section>
      <section class="testimonials">
        <div class="section-header">
          <h2>What Our Users Say</h2>
          <p>Hear from satisfied users who have transformed how they park and rent out their spaces.</p>
        </div>
        <div class="testimonials-container">
          <div class="testimonial">
            <div class="testimonial-image">
              <img src={userImg} alt="Alex J." />
            </div>
            <div class="testimonial-content">
              <p>"This service has completely changed the way I park. It's so convenient to reserve a spot ahead of time!"</p>
              <h4>- Alex J.</h4>
              <div class="rating">
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9734;</span>
              </div>
            </div>
          </div>
          <div class="testimonial">
            <div class="testimonial-image">
              <img src={userImg} alt="Maria S." />
            </div>
            <div class="testimonial-content">
              <p>"Listing my parking space has been a great way to earn some extra income. Highly recommend!"</p>
              <h4>- Maria S.</h4>
              <div class="rating">
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
              </div>
            </div>
          </div>
          <div class="testimonial">
            <div class="testimonial-image">
              <img src={userImg} alt="John D." />
            </div>
            <div class="testimonial-content">
              <p>"Finding a parking spot is no longer a hassle. The app is easy to use and very reliable."</p>
              <h4>- John D.</h4>
              <div class="rating">
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9734;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="call-to-action">
        <div class="cta-content">
          <h2>Get Started Today</h2>
          <p>Sign up now to find your perfect parking spot or list your space for rent. Experience the future of parking with our smart solution.</p>
          <a href="#signup" class="cta-button">Sign Up Now</a>
        </div>
      </section>

      
      <section className="faqs">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to the most common questions about our parking and renting solutions.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => handleClick(index)}>
                <h3>{faq.question}</h3>
              </div>
              <div
                className="faq-answer"
                style={{ height: activeIndex === index ? height : '0px' }}
                ref={activeIndex === index ? contentRef : null}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section class="partners">
        <div class="section-header">
          <h2>Our Partners</h2>
          <p>We collaborate with industry leaders to bring you the best parking solutions.</p>
        </div>
        <div class="partners-scroll">
          <div class="partners-list">
            <div class="partner-item">
              <img src={Partner1} alt="Partner 1" />
            </div>
            <div class="partner-item">
              <img src={Partner2} alt="Partner 2" />
            </div>
            <div class="partner-item">
              <img src={Partner3} alt="Partner 3" />
            </div>
            <div class="partner-item">
              <img src={Partner4} alt="Partner 4" />
            </div>
            <div class="partner-item">
              <img src={Partner1} alt="Partner 1" />
            </div>
            <div class="partner-item">
              <img src={Partner2} alt="Partner 2" />
            </div>
            <div class="partner-item">
              <img src={Partner3} alt="Partner 3" />
            </div>
            <div class="partner-item">
              <img src={Partner4} alt="Partner 4" />
            </div>
          </div>
        </div>
      </section>

      <section class="contact-us">
        <div class="section-header">
          <h2>Contact Us</h2>
          <p>We're here to help. Reach out to us with any questions or concerns.</p>
        </div>
        <div class="contact-form-container">
          <form class="contact-form">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default Home;
