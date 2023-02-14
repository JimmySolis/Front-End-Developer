import React from 'react';
import mrkGIF from "../../img/mrkGIF.gif";
import { motion } from "framer-motion";
import "../../assets/frontStyle/mrk.css"

const mrkPage = () => {
  return (
  <motion.div 
    initial={{scaleY:0}} 
    animate={{ scaleY:1 }} 
    exit={{ scaleY: 0 }} 
    transition={{ duration: .3 }}
    >
    <div className="mrkPageDiv">

      <div className="mrkLeftDiv">
       <a href="https://mrkx.net/" target="_blank"> <img src= {mrkGIF} alt="your-image-description-here" className='mrkSrc' /> </a> 
       <figcaption  className="mrkFigcaption">Click Image To Visit Website</figcaption> 
      </div>

      <div  className="mrkRightDiv">

        <div  className="mrkTechDiv">
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 className="mrkTechDivH2"> HTML, CSS, JS</h2>
        </div>

        <div  className="mrkProbDiv">
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 className="mrkProbDivH2"> In order to have some feedback while the page is loading, I designed a preloader that disappears when all the images have loaded.
             The client wanted a minimalistic website to display some of his photography styles.
              My job was to display each collection in a unique and staggered way.
               This layout gives the viewers a pleasant experience when visiting his site.

          </h2>
        </div>

        <div className="mrkDesDiv">
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2  className="mrkDesDivH2">
                I approached the creation of the website with a minimalist design in mind.
                I carefully selected a color palette that was understated and complemented the simple design. 
                My client was thrilled with the final result and appreciated the clean and modern look of the site. 
                The process was a smooth one as I worked closely with the client to ensure that their vision was realized. </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default mrkPage;