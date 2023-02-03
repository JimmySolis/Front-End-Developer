import React from 'react';
import blgGIF from "../../img/blgVidPage.gif";
import { motion } from "framer-motion";

const blgPage = () => {
  return (
    <motion.div 
    initial={{scaleY:0}} 
    animate={{ scaleY:1 }} 
    exit={{ scaleY: 0 }} 
    transition={{ duration: .3 }}
    >
    <div style={{ display: 'flex'}}>

      <div style={{ width: '40%', padding: '80px', marginTop: '32px'}}>
       <a href="https://bloominglg.com/" target="_blank"> <img src= {blgGIF} alt="your-image-description-here" /> </a> 
       <figcaption style={{ color:'black', display:'flex', justifyContent:"center" }}>Click image to visit website</figcaption> 
      </div>

      <div style={{ width: '60%', padding: '16px', marginTop: '48px' }}>

        <div style={{ fontWeight: 'bold', fontFamily:'Chakra Petch' , marginTop: '32px'}}>
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 style={{color:'black',fontFamily:'Chakra Petch'}}> HTML, CSS, JS</h2>
        </div>

        <div style={{ fontWeight: 'bold', marginTop: '16px', fontFamily:'Chakra Petch'}}>
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 style={{color:'black', paddingRight: '64px', fontFamily:'Chakra Petch'}}> 
        For this website we are trying to emphasize the type of labor. The client wanted me to develop some eye candy for his new company.
        He wanted to make people see that although he was just starting out he has asperations to be clean and professional.
        The task was difficult becasue he did not have any photos other than his cetificates but with a neat website he feels confident that he will have
        many customers soon. And as of now he is doing well.  
          </h2>
        </div>

        <div  style={{ fontWeight: 'bold', marginTop: '16px', fontFamily:'Chakra Petch'}}>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 style={{color:'black', paddingRight: '64px', fontFamily:'Chakra Petch'}}>
            When I set out to do this project I came up with the idea of a perfect lawn to Demonstrate what his comapny was aiming to do.
            He loved the idea and with some pretty colors that complement the green grass I began to build the lay out. He didnt want to many pages. Therefore, I sticked to a menu that only had about 
            three options that alternate as clicked. He liked the simplicity and agreed to keep me updated when he had Enough images for a galley.             </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default blgPage;