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
        <h2 className="mrkProbDivH2"> To provide users with feedback during the loading process, a preloader was meticulously designed to vanish only after all images had loaded. 
        The project objective was to curate a minimalistic website that showcases the client's photographic styles. 
        My assignment was to showcase each collection in a distinctive and strategically staggered manner.
        As a result, this layout creates a gratifying user experience, elevating the user's engagement with the client's website.

          </h2>
        </div>

        <div className="mrkDesDiv">
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2  className="mrkDesDivH2">
            From the outset, the website's design was envisaged as minimalist, and every decision was made with that principle in mind.
            The color palette was selected with utmost care to complement the simple design with understated hues. 
            The final outcome garnered the client's admiration, with appreciation for the site's clean and modern aesthetic. 
            The creation process progressed smoothly, and client satisfaction was achieved by working closely to ensure the vision was realized. </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default mrkPage;