import React from 'react';
import backOfShopGIF from "../../img/mySocial.gif";
import { motion } from "framer-motion";



const BackOfShopPage = () => {
  return (
  <motion.div 
    initial={{scaleY:0}} 
    animate={{ scaleY:1 }} 
    exit={{ scaleY: 0 }} 
    transition={{ duration: .3 }}
    >
    <div style={{ display: 'flex'}}>

      <div style={{ width: '40%', padding: '80px', marginTop: '32px'}}>
       <a href="" target="_blank"> <img src= {backOfShopGIF} alt="your-image-description-here" /> </a> 
       <figcaption style={{ color:'black', display:'flex', justifyContent:"center" }}>Click image to visit website</figcaption> 
      </div>

      <div style={{ width: '60%', padding: '16px', marginTop: '16px' }}>

        <div style={{ fontWeight: 'bold', fontFamily:'Chakra Petch' , marginTop: '32px'}}>
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 style={{color:'black',fontFamily:'Chakra Petch'}}> Mongoose, MongoDB, JavaScript</h2>
        </div>

        <div style={{ fontWeight: 'bold', marginTop: '16px', fontFamily:'Chakra Petch'}}>
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 style={{color:'black', paddingRight: '64px', fontFamily:'Chakra Petch'}}> 
        How do we keep an E-commerce in order? By using routes that how.
        If a product gets bought an api call gets sent out and it updated. 
        Once a profile is made it becomes much more simple to adjust and keep track of inventory.
          </h2>
        </div>

        <div  style={{ fontWeight: 'bold', marginTop: '16px', fontFamily:'Chakra Petch'}}>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 style={{color:'black', paddingRight: '64px', fontFamily:'Chakra Petch'}}>
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