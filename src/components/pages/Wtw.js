import React from 'react';
import wtwGIF from "../../img/wtw.gif";
import { motion } from "framer-motion";
import "../../assets/wtw.css"


const wtwPage = () => {
  return (
    <motion.div 
    initial={{scaleY:0}} 
    animate={{ scaleY:1 }} 
    exit={{ scaleY: 0 }} 
    transition={{ duration: .3 }}
    >
    <div className='wtwPageDiv'>

      <div className='wtwLeftDiv'>
       <a href="https://jimmysolis.github.io/WhatsTheWeather/" target="_blank"> <img src= {wtwGIF} alt="your-image-description-here" className='wtwSrc' /> </a> 
       <figcaption className='wtwFigcaption'>Click image to visit website</figcaption> 
      </div>

      <div className='wtwRightDiv'>

        <div className='wtwTechDiv'>
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 className='wtwTechDivH2'> HTML, CSS, JS, BootStrap</h2>
        </div>

        <div className='wtwProbDiv{'>
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 className='wtwProbDivH2'>
            Here we have a project where i was asked to recreate this webite from top to bottom.
            We wanted to have the weather for each city accessible through The Weather Apps API.
            I needed to get the lay about and even the gradient color from the example. 
            I am happy to say I got everything I needed. And even added the icons to represent the days.
          </h2>
        </div>

        <div className='wtwDesDiv' >
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 className='wtwDesDivH2'>
            The design process for this app was fairly easy. I started by looking at the devTool in chrome.
            Once I had an idea of how it was done I took it upon myself to set divs in the dementions that I saw resemble the example.
            After that I changed the viewport size and made sure it would fit well in all the most popular phones out there.   
            </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default wtwPage;