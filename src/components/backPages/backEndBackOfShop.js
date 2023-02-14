import React from 'react';
import backOfShopGIF from "../../img/mySocial.gif";
import { motion } from "framer-motion";
import "../../assets/backStyle/shop.css"

const BackOfShopPage = () => {
  return (
  <motion.div 
    initial={{scaleY:0}} 
    animate={{ scaleY:1 }} 
    exit={{ scaleY: 0 }} 
    transition={{ duration: .3 }}
    >
    <div className='shopPageDiv'>

      <div className='shopLeftDiv'>
       <a href="" target="_blank"> <img src= {backOfShopGIF} alt="your-image-description-here" className='shopSrc' /> </a> 
       <figcaption className='shopFigcaption'>Click image to visit website</figcaption> 
      </div>

      <div className='shopRightDiv'>

        <div className='shopTechDiv'>
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 className='shopTechDivH2'> Mongoose, MongoDB, JavaScript</h2>
        </div>

        <div className='shopProbDiv'>
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 className='shopProbDivH2'> 
        How do we keep an E-commerce in order? By using routes that how.
        If a product gets bought an api call gets sent out and it updated. 
        Once a profile is made it becomes much more simple to adjust and keep track of inventory.
          </h2>
        </div>

        <div  className='shopDesDiv'>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 className='shopDesDivH2'>
             In this project I needed modles that were clean and simple.
             I outlined each one and what they held once that was established I was able to fill the price and quntity.
             After that made the routes and tested them thoroughly.
              </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default BackOfShopPage;