import React from 'react';
import delGIF from "../../img/delVid.gif";
import { motion } from "framer-motion";
import "../../assets/frontStyle/del.css"

const delPage = () => {
  return (
    <motion.div 
    initial={{scaleY:0}} 
    animate={{ scaleY:1 }} 
    exit={{ scaleY: 0 }} 
    transition={{ duration: .3 }}
    >
    <div className='delPageDiv'>

      <div className='delLeftDiv'>
       <a href="https://delegantpoodlesanddoodles.com/" target="_blank"> <img src= {delGIF} alt="your-image-description-here" className='delSrc' /> </a> 
       <figcaption className='delFigcaption'>Click image to visit website</figcaption> 
      </div>

      <div className='delRightDiv'>

        <div className='delTechDiv'>
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 className='delTechDivH2'> HTML, CSS, JS</h2>
        </div>

        <div className='delProbDiv'>
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 className='delProbDivH2'>
        My objective in creating this website was to bring happiness to families through showcasing new puppies and providing information on different breeds. 
        With the incorporation of captivating photos, I developed an efficient system that allows prospective buyers to inquire about the availability of these delightful pups. 
        My client required an expedited project completion that adhered to aesthetic standards, as the litter of puppies was already two months old. 
        I was able to deliver a pleasing result that met her expectations, resulting in a request for my services to market and promote her Schnauzer breed on a more significant scale.
          </h2>
        </div>

        <div className='delDesDiv'>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 className='delDesDivH2'>
            Despite a compressed timeline, I was able to develop a website that struck a balance between eye-catching text and a user-friendly layout that was both engaging and comprehensible. 
            Notably, I prioritized the mobile version's development, recognizing the importance of accommodating users across various devices. 
            While the project posed no significant challenges, I relished in ensuring that the website was well displayed and seamlessly functional across all platforms, resulting in a high-quality product that met and exceeded the client's expectations."
             </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default delPage;