import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; 
import "../../assets/contact.css"

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to send data to your email here
    emailjs.sendForm('service_4gzwqqa', 'template_ulm3i6o', event.target, 'WqwHbchkg4Y3qZ7yC')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    console.log(`Name: ${name} Email: ${email} Message: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
    alert("Thank you your message has been sent. I will get back to you in one to two business days.");
  };

  return (
    <motion.div 
    initial={{opacity:0}} 
    animate={{ opacity:1 }} 
    exit={{ opacity: 0 }} 
    transition={{ delay: .3 }}
    >
    <div className="contactDiv">
    <div  className="contactDivInner" >
        
      <form onSubmit={handleSubmit}>
        <div>
            <h1 className="h1Style">Send me an Email...</h1>
          <label htmlFor="name"></label>
          <input
           className="name"
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            className="email"
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea
           className="message"
            id="message"
            name="message"
            placeholder="Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    </motion.div>
  );
};

export default ContactForm;