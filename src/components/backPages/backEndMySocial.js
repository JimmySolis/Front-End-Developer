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
        Here  we are fixing the problem how to modify a database through api calls. 
        This is strictly done through the backend where we create specific CRUD routes that will create, delete, upload and read data we want.
        For this specific project I needed to make a route for a socail app where people can create a profile and add friends, update user info, and create as well as delete profiles.
        The trickiest part is setting up all the dependencies and having the correct ports connected to access the mongoDB server.
          </h2>
        </div>

        <div  className='socDesDiv'>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 className='socDesDivH2'>
               I began by writing out all my routes on paper.
               Makeing sure I had a visual of what models I needed.
               I worked on the requirements I needed inorder to assure I would be able to create an account.
               Once I had a plan next I created my server page and cheked the connection to mondoDB.
               After, I finished up the models and created the routes to be about to make profiles.
               Finally, I tested the all the routes to make sure they all worked and I was finish with the project.
              </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default mySocialPage;