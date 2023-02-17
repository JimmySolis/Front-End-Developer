import React from 'react';
import listedGIF from "../../img/listed.gif";
import { motion } from "framer-motion";
import "../../assets/backStyle/listed.css"

const ListedPage = () => {
  return (
  <motion.div 
    initial={{scaleY:0}} 
    animate={{ scaleY:1 }} 
    exit={{ scaleY: 0 }} 
    transition={{ duration: .3 }}
    >
    <div className='lisPageDiv'>

      <div className='lisLeftDiv'>
       <a href="listed.herokuapp.com/" target="_blank"> <img src= {listedGIF} alt="your-image-description-here" className='lisSrc'/> </a> 
       <figcaption className='lisFigcaption'>Click image to visit website</figcaption> 
      </div>

      <div className='lisRightDiv'>

        <div className='lisTechDiv'>
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 className='lisTechDivH2'> React, Nodejs, JavaScript, Express, MondoDB, GraphQL</h2>
        </div>

        <div className='lisProbDiv'>
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 className='lisProbDivH2'> 
        Have you ever encountered the awkward situation of asking someone what they want for their birthday or Christmas, only to worry about getting the size or color wrong? 
        Well, I have a solution to that problem. 
        I designed an application that allows you to create a profile and list the specific items you wish to receive, whether it be a toy or a shirt. 
        This way, people can visit your profile and purchase items for you without any confusion or errors. 
        The application eliminates the need for awkward conversations about preferences and sizes, and it enhances the gift-giving experience for everyone involved.
          </h2>
        </div>

        <div  className='lisDesDiv'>
            <h1>Design Proccess</h1>
        </div>
      
        <div>
            <h2 className='lisDesDivH2'>
            For this project, my focus was primarily on the backend functionality, with design taking a secondary role. 
            My emphasis was on creating lists and individual list items with comprehensive details to accurately identify the desired gift or object. 
            I made sure to include a URL section for easy access to the specific item needed. With the creation of a server page and connection to GraphQL, the development process was smooth and efficient. 
            GraphQL proved to be a highly effective tool in quickly implementing the desired functionality. 
            Overall, the application is user-friendly and intuitive.
              </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default ListedPage;