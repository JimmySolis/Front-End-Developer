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
        To maintain the orderliness of an e-commerce website, the use of routes is crucial. 
        By implementing routes, the website is able to handle various transactions, such as a product purchase, by sending out an API call and updating the database. 
        This system is also helpful in keeping track of inventory and other key metrics. 
        Creating a user profile streamlines the process even further, allowing for greater customization and ease of use.
          </h2>
        </div>

        <div  className='shopDesDiv'>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 className='shopDesDivH2'>
            In this project, the objective was to create models that were straightforward and uncluttered. 
            I began by outlining each model and specifying the data that they would contain. 
            Once this was established, I could populate the models with the relevant price and quantity information. 
            Finally, I created the necessary routes and took the time to thoroughly test them to ensure that they functioned as intended.
              </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default BackOfShopPage;