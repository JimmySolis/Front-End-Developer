import React from 'react';
import delGIF from "../../img/delVid.gif";
import { motion } from "framer-motion";
import "../../assets/del.css"

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
            This website was made in efforts to bring joy to families. 
            We needed a way to display new puppies as well as have a place to have information about the breeds. 
            Couple that with photos and a way to inquire about the availability of pups.
            The client just need something done fast but pretty becasue she had a litter of pups going into two months. 
            She was please with the work and asked to getting starting on a bigger project where she will sale and promote her Schnauzer. 
          </h2>
        </div>

        <div className='delDesDiv'>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 className='delDesDivH2'>
            With short notice and a quick due date I needed to make sure I was building a website that had text that stood-out but was not overwhelming.
            On top of that I focused on the moblie version first beacuse I knew that my client would be texting the website to all her customers.
            There was nothing to challenging and I had a great time making sure every platform was well displayed.

             </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default delPage;