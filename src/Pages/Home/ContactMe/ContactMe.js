import "./ContactMe.css";
import React, { useState, useEffect,useRef } from 'react';
import ContactSuccessPopup from './ContactSuccessPopup.js';
import { useTranslation} from 'react-i18next';  

function ContactMe(){
  const {t} = useTranslation(); 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
 const [showContactSuccessPopup, setShowContactSuccessPopup] = useState(false);
  const handleContactSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      "fields": {
        "First Name": firstName,
        "Last Name": lastName,
        "Email": email,
        "Phone Number": phoneNumber,
        "Message": message,
      }
    };

    fetch(`https://api.airtable.com/v0/appPrmFJzdWiFnCpN/Contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer patjcE0Oa54kfWtFE.820c3b5107a690a0160fa2730a0d1a7354c09bdecad6625f180f671b19e2c4e2',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
         console.log(data);
        //alert('Contact form submitted successfully!');
         setShowContactSuccessPopup(true);
         
      // Check if all form fields have values before showing the popup
        if (firstName && lastName && email && phoneNumber && message) {
           setShowContactSuccessPopup(true);
         }
         setFirstName('');
         setLastName('');
         setEmail('');
         setPhoneNumber('');
         setMessage('');

        // You can redirect the user or perform other actions here
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error submitting the contact form. Please try again.');
      });
  };

  return(
   
   
    <section id="Contact" className="contactSection">
     
      <h2>{t('contactme')}</h2>

      <form  onSubmit={handleContactSubmit}  className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span >{t('firstname')}</span>
            <input
              type="text"
              className="contact--input"
              name="first-name"
           
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={t('enterfirstname')}
              required
            />
          </label>

          <label htmlFor="last-name" className="contact--label">
            <span >{t('lastname')}</span>
            <input
              type="text"
              className="contact--input"
              name="last-name"
          
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder={t('enterlastname')}
              required
            />
          </label>

          <label htmlFor="email" className="contact--label">
            <span >{t('email')}</span>
            <input
              type="email"
              className="contact--input "
              name="email"
            
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('enteremail')}
              required
            />
          </label>

          <label htmlFor="phone-number" className="contact--label">
            <span >{t('phoneNum')}</span>
            <input
              type="text"
              className="contact--input"
              name="phone-number"
             
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder={t('enterphonenum')}
              required
            />
          </label>
        </div>

        <label htmlFor="message" className="contact--label">
          <span >{t('message')}</span>
          <textarea
            className="contact--input text-sm"
            name="message" 
            rows="8"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t('entermessage')}
            required
          />
        </label>

        <div>
          <button className="contactButton btn btn-primary" type="submit">{t('submit')}</button>
        </div>
      </form>
      {showContactSuccessPopup && (
    <ContactSuccessPopup onClose={() => setShowContactSuccessPopup(false)}/>
  )}
      
     
      
    </section>
 
 );

}
export default  ContactMe;


/*action="https://formsubmit.co/017c6972d29d4c8ef5d0b6b93dc3ab8d" */
