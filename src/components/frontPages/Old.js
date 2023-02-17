import React from 'react';
import delGIF from "../../img/oldpro.gif";
import { motion } from "framer-motion";
import "../../assets/frontStyle/old.css"

const oldPage = () => {
  return (
    <motion.div 
    initial={{scaleY:0}} 
    animate={{ scaleY:1 }} 
    exit={{ scaleY: 0 }} 
    transition={{ duration: .3 }}
    >
    <div className='oldPageDiv'>

      <div className='oldLeftDiv'>
       <a href="https://jimmysolis.github.io/Challenge2Portfolio/" target="_blank"> <img src= {delGIF} alt="your-image-description-here" className='oldSrc' /> </a> 
       <figcaption className='oldFigcaption'>Click image to visit website</figcaption> 
      </div>

      <div className='oldRightDiv'>

        <div className='oldTechDiv'>
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 className='oldTechDivH2'> HTML, CSS, JS</h2>
        </div>

        <div className='oldProbDiv'>
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 className='oldProbDivH2'>
        This was my inaugural attempt at creating a portfolio, which aimed to display all the projects I had completed in the beginning stages of my coding career. 
        I made sure to present everything in a clear and concise manner, using the hover effect to provide additional context for viewers. 
        As it was my first time coding a portfolio, I honed my skills, which may now appear elementary. 
        For instance, I utilized "_blank" in an "a tag" or div controlled through the DOM.

          </h2>
        </div>

        <div  className='oldDesDiv'>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 className='oldDesDivH2'>
            At the time, the task was challenging for me due to my limited knowledge of the necessary tools. 
            However, the challenge proved to be tremendously helpful as it opened my mind to the idea that with research and practice, I could achieve anything that I could visualize. 
            The color scheme was predetermined to be black and yellow, and I aimed to evoke the feeling of an old school monitor. 
            Therefore, I opted for green text and a retro-style font. 
            I was highly satisfied with the resulting design.

             </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default oldPage;