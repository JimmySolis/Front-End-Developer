import React from 'react';
import blgGIF from "../../img/blgVidPage.gif";
import { motion } from "framer-motion";
import "../../assets/frontStyle/blg.css"

const blgPage = () => {
  return (
    <motion.div 
    initial={{scaleY:0}} 
    animate={{ scaleY:1 }} 
    exit={{ scaleY: 0 }} 
    transition={{ duration: .3 }}
    >
    <div className='blgPageDiv'>

      <div className='blgLeftDiv'>
       <a href="https://bloominglg.com/" target="_blank"> <img src= {blgGIF} alt="your-image-description-here" className='blgSrc'/> </a> 
       <figcaption className='blgFigcaption'>Click image to visit website</figcaption> 
      </div>

      <div className='blgRightDiv'>

        <div className='blgTechDiv'>
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 className='blgTechDivH2'> HTML, CSS, JS</h2>
        </div>

        <div className='blgProbDiv'>
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 className='blgProbDivH2'> 
        For this website we are trying to emphasize the type of labor. The client wanted me to develop some eye candy for his new company.
        He wanted to make people see that although he was just starting out he has asperations to be clean and professional.
        The task was difficult becasue he did not have any photos other than his cetificates but with a neat website he feels confident that he will have
        many customers soon. And as of now he is doing well.  
          </h2>
        </div>

        <div className='blgDesDiv'>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 className='blgDesDivH2'>
            When I set out to do this project I came up with the idea of a perfect lawn to Demonstrate what his comapny was aiming to do.
            He loved the idea and with some pretty colors that complement the green grass I began to build the lay out. He didnt want to many pages. Therefore, I sticked to a menu that only had about 
            three options that alternate as clicked. He liked the simplicity and agreed to keep me updated when he had Enough images for a galley.             </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default blgPage;