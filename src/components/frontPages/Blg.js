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
        My goal for this website is to highlight the specific type of labor that the client offers. 
        The client tasked me with creating an engaging visual design for their new company. 
        They sought to communicate their dedication to upholding high standards of cleanliness and professionalism, despite being in the early stages of their business venture. 
        The challenge of the project was intensified by the absence of images, with the exception of a few certificates. 
        However, with a polished website, our client now feels confident in their ability to attract a large customer base. 
        As of the present, the business is thriving.
          </h2>
        </div>

        <div className='blgDesDiv'>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 className='blgDesDivH2'>
            When embarking on this project, I proposed the idea of a pristine lawn to vividly illustrate the objective of the company. 
            The concept was well-received by the client, and I began constructing the layout, incorporating colors that harmonized with the vibrant green of the grass. 
            Given the client's preference for a streamlined website, I ensured that the menu was composed of only three options that toggled as clicked. 
            This approach was embraced by the client who appreciated the website's simplicity and ease of navigation. 
            I also created the logo seen at the top of the page.
            Additionally, we reached an agreement that the client would keep me apprised of the acquisition of sufficient images for the creation of a gallery."
             </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default blgPage;