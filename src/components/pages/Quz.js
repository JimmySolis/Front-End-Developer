import React from 'react';
import quzGIF from "../../img/quizgif.gif";
import { motion } from "framer-motion";
import "../../assets/quz.css"

const quzPage = () => {
  return (
    <motion.div 
    initial={{scaleY:0}} 
    animate={{ scaleY:1 }} 
    exit={{ scaleY: 0 }} 
    transition={{ duration: .3 }}
    >
    <div className='quzPageDiv'>

      <div className='quzLeftDiv'>
       <a href="https://jimmysolis.github.io/quizCoded/" target="_blank"> <img src= {quzGIF} alt="your-image-description-here" className='quzSrc' /> </a> 
       <figcaption className='quzFigcaption'>Click image to visit website</figcaption> 
      </div>

      <div className='quzRightDiv'>

        <div className='quzTechDiv'>
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 className='quzTechDivH2'> HTML, CSS, JS</h2>
        </div>

        <div className='quzProbDiv'>
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 className='quzProbDivH2'>
           There has been long debate on what car is the faastest. This test is made to asure poeple that each nation brings to
           the table a unique trait in car. 
           With a high speed and intense quiz people can focus on championing each other rather than focusing on silly debates. 
          </h2>
        </div>

        <div className='quzDesDiv'>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 className='quzDesDivH2'>
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