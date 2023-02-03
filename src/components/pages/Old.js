import React from 'react';
import delGIF from "../../img/oldpro.gif";

const oldPage = () => {
  return (
    <div style={{ display: 'flex'}}>

      <div style={{ width: '40%', padding: '80px', marginTop: '24px'}}>
       <a href="https://jimmysolis.github.io/Challenge2Portfolio/" target="_blank"> <img src= {delGIF} alt="your-image-description-here" /> </a> 
       <figcaption style={{ color:'black', display:'flex', justifyContent:"center" }}>Click image to visit website</figcaption> 
      </div>

      <div style={{ width: '60%', padding: '16px', marginTop: '16px' }}>

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
            This was the first time I put together a porfolio. 
            The task was to show off all of my project I had wored up to in the begnning of my codeing carrer.
            I was able to have everything in view, utilizing the hover effect to give some more context when viewrs saw my portfolio.
            Since it was my first time coding a profile I sharpened skills that now seem elementary. 
            For exapmle, _blanck in a "a tag" or div controlled throught the dom.

          </h2>
        </div>

        <div  style={{ fontWeight: 'bold', marginTop: '16px', fontFamily:'Chakra Petch'}}>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 style={{color:'black', paddingRight: '64px', fontFamily:'Chakra Petch'}}>
            At that time it was challenging because my knowledge of the tools was very poor.
            However, that challenge help me tremendously since it opened my mind and put me on a wave length that 
            as long as I am able to create it in my mind it is achievable through research and practice. 
            I knew the colors were going to be black and yellow, and I wanted it to have the feeling of an old school monitor.
            So i went with the green for text and a font that seem like retro tec and I was very happy with the results.

             </h2>
        </div>

      </div>
    </div>
  );
};

export default oldPage;