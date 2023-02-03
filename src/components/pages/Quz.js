import React from 'react';
import quzGIF from "../../img/quizgif.gif";
import { motion } from "framer-motion";

const quzPage = () => {
  return (
    <motion.div 
    initial={{scaleY:0}} 
    animate={{ scaleY:1 }} 
    exit={{ scaleY: 0 }} 
    transition={{ duration: .3 }}
    >
    <div style={{ display: 'flex'}}>

      <div style={{ width: '40%', padding: '80px', marginTop: '32px'}}>
       <a href="https://jimmysolis.github.io/quizCoded/" target="_blank"> <img src= {quzGIF} alt="your-image-description-here" /> </a> 
       <figcaption style={{ color:'black', display:'flex', justifyContent:"center" }}>Click image to visit website</figcaption> 
      </div>

      <div style={{ width: '60%', padding: '16px', marginTop: '48px' }}>

        <div style={{ fontWeight: 'bold', fontFamily:'Chakra Petch' , marginTop: '32px'}}>
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 style={{color:'black',fontFamily:'Chakra Petch'}}> HTML, CSS, JS</h2>
        </div>

        <div style={{ fontWeight: 'bold', marginTop: '16px', fontFamily:'Chakra Petch'}}>
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 style={{color:'black', paddingRight: '64px', fontFamily:'Chakra Petch'}}>
           There has been long debate on what car is the faastest. This test is made to asure poeple that each nation brings to
           the table a unique trait in car. 
           With a high speed and intense quiz people can focus on championing each other rather than focusing on silly debates. 
          </h2>
        </div>

        <div  style={{ fontWeight: 'bold', marginTop: '16px', fontFamily:'Chakra Petch'}}>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 style={{color:'black', paddingRight: '64px', fontFamily:'Chakra Petch'}}>
          The design for this quiz was easy. I really wanted popping colors.
          So with a correct answer the background goes green and with a wrong one it goes red.
          I wanted to make it challenging, so I added a timer that starts the moment the quiz begins.
          At the end there is a score board that is saved in the local storage but this made for a fun competition with my friends. 
            </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default quzPage;