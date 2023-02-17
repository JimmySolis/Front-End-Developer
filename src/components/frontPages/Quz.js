import React from 'react';
import quzGIF from "../../img/quizgif.gif";
import { motion } from "framer-motion";
import "../../assets/frontStyle/quz.css"

const quzPage = () => {
  return (
    <motion.div 
    initial={{scaleY:0}} 
    animate={{ scaleY:1 }} 
    exit={{ scaleY: 0 }} 
    transition={{ duration: .3 }}
    >
    <div className='quzPageDiv'>

      <div className='quzLeftDiv'>
       <a href="https://jimmysolis.github.io/quizCoded/" target="_blank"> <img src= {quzGIF} alt="your-image-description-here" className='quzSrc' /> </a> 
       <figcaption className='quzFigcaption'>Click image to visit website</figcaption> 
      </div>

      <div className='quzRightDiv'>

        <div className='quzTechDiv'>
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 className='quzTechDivH2'> HTML, CSS, JS</h2>
        </div>

        <div className='quzProbDiv'>
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 className='quzProbDivH2'>
        There has been a long-standing debate on which car is the fastest. 
        This test is designed to provide assurance that each nation brings to the table a unique trait in car manufacturing. 
        With a high-speed and challenging quiz, individuals can focus on championing each other and their respective nations, rather than getting caught up in inconsequential debates.
          </h2>
        </div>

        <div className='quzDesDiv'>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 className='quzDesDivH2'>
            The design concept for this quiz was to create a visually engaging experience that captures the user's attention. 
            This was achieved by utilizing bright and contrasting colors, such as green for correct answers and red for incorrect ones. 
            In order to add an additional layer of difficulty, a timed element was introduced, making it more challenging and exciting for users. 
            Finally, a scoreboard was implemented to showcase the user's final score, which is automatically saved to local storage. This feature also encourages friendly competition among users, further adding to the overall experience of the quiz.
            </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default quzPage;