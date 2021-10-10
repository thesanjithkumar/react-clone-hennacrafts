import React, { useState } from 'react';
import { MdOutlineCall, MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import './ContactPage.css';
import FAQ from './FAQ';

function ContactPage () {
  const [faqs, setfaqs] = useState([
    {
      question: 'Pulvinar nostrud class cum facilis?',
      answer: 'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.',
      open: false
    },
    {
      question: 'Pon excepturi numquam, facilis?',
      answer: 'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.',
      open: false
    },
    {
      question: 'Pon excepturi numquam, facilis?',
      answer: 'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.',
      open: false
    },
    
    {
      question: 'Consequat nesciunt fusce facilisi?',
      answer: 'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.',
      open: false
    },

    {
      question: 'Pon excepturi numquam, facilis?',
      answer: 'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.',
      open: false
    },

    {
      question: 'Consequat nesciunt fusce facilisi?',
      answer: 'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  

  return (
    <div className='maincontainer'>

    <div className='heading_style'>
     <h1> Get In Touch</h1>
    </div>


    <div className='container'>
    <div className='img_styling'>
      <img src="https://hennacrafts.com/wp-content/uploads/2019/06/leaf-free-img.png" />
    </div>
      <div className='card'> 
      <MdOutlineCall size="2em" />
        <p>+123 456 7890</p>
        <p>+123 456 7890</p>
      </div>
      <div className='card'>
        <HiOutlineMail size="2em"/>
        <p>nayabhenna.in@gmail.com</p>
      </div>
      <div className='card'>
        <MdLocationOn size="2em" />
        <p>0, MALIYON KA BADA BAS, SOJAT CITY, Pali, Rajasthan</p>
      </div>
    </div>

    <div className='faq_heading_style'>
    <h2>Frequently Asked Question!</h2>
    </div>

      <div className='img_styling1'>
      <img src="https://hennacrafts.com/wp-content/uploads/2019/07/logo-leaf-new.png" />
      </div>

      <div className="ContactPage">
        <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
        </div>
    </div>
  


    </div>
  );
}

export default ContactPage;
