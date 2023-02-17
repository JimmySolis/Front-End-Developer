import React from 'react';
import mySocialGIF from "../../img/mySocial.gif";
import { motion } from "framer-motion";
import "../../assets/backStyle/social.css"



const mySocialPage = () => {
  return (
  <motion.div 
    initial={{scaleY:0}} 
    animate={{ scaleY:1 }} 
    exit={{ scaleY: 0 }} 
    transition={{ duration: .3 }}
    >
    <div className='socPageDiv'>

      <div className='socLeftDiv'>
       <a href="https://github.com/JimmySolis/MySocialAPI" target="_blank"> <img src= {mySocialGIF} alt="your-image-description-here" className='socSrc' /> </a> 
       <figcaption className='socFigcaption' >Click image to visit website</figcaption> 
      </div>

      <div className='socRightDiv'>

        <div className='socTechDiv'>
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 className='socTechDivH2'> Mongoose, MongoDB, JavaScript</h2>
        </div>

        <div className='socProbDiv'>
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 className='socProbDivH2'> 
        In this project, I tackled the issue of modifying a database through API calls, which is achieved exclusively through the backend using specific CRUD routes to create, delete, update, and read the data we require. 
        For this particular project, I created a route for a social application, enabling users to create a profile, add friends, update their personal information, and create or delete profiles. 
        One of the most challenging aspects of the project was configuring all the dependencies and ensuring that the correct ports were connected to gain access to the MongoDB server.
          </h2>
        </div>

        <div  className='socDesDiv'>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 className='socDesDivH2'>
            To ensure a structured and organized approach to this project, I started by outlining all the required routes and models on paper. 
            I made sure to have a clear visual of what models I needed to create and how the routes should function. 
            Once I had a plan in place, I proceeded to create the server page and checked the connection to MongoDB. 
            After that, I completed the necessary models and created the routes to be able to create profiles, add friends, and update user information. 
            Finally, I thoroughly tested all the routes to ensure that they were all functioning as intended. With that, the project was completed.
              </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default mySocialPage;