import React from "react";
import { motion } from "framer-motion";
import "../../assets/about.css";
import file from "../../assets/FrontEndResume.pdf";
import github from "../../img/github.png";
import linkedin from "../../img/linkIN.png";

const about = () => {

    window.scrollTo(0, 0)

    return (
        <motion.div 
        initial={{scaleY:0}} 
        animate={{ scaleY:1 }} 
        exit={{ scaleY: 0 }} 
        transition={{ duration: .6 }}
        >
        <div>
            <div className="aboutGrid">

                <div className="aboutSection">

                    <h1> About Me: Jimmy Geovanny Solis </h1>
                    <p className="aboutPara">
                    Hello World!
                    <br/>
                    Front-end website developer implementing an art background to create avant garde UI designs. 
                    Obtained a MERN focused certificate from Georgia Institute of Technology that covered JavaScript, Databases, React.js and responsive web design.
                    Problem solver and optimistic designer, pushing to bring creativity presented by clients and employers to life. 
                    Versed in Photoshop, After Effects and other powerful illustrating and editing programs to achieve sketched up or planned ideas. 
                    Combining these skills with a never-ending curiosity which helps expand knowledge and further push the possibilities of creative designs. 
                    Nevertheless, pedantically involved in creating a seamless relation between mobile and monitor viewports.
                    </p>


                </div>

             <div>

                <div className="resumeSection">
                     <h1> Resume </h1>
                     <a href={file} download> <button className="downloadButton">
            Download My Resume
            </button></a>

            <div className="resumeSectionDivison">

            <div>
            <h2>Front-end Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            </div>

            <div>
            <h2>Back-end Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>REST</li>
                <li>GrapgQL</li>
            </ul>
            </div>

            </div>
        
                </div>

                <div className="linkSection">

                     <h1> GitHub & Linkined </h1>
                     <div className="linkDiv">
                    <a href="https://github.com/JimmySolis" target="_blank"> <img src={github} className="picSize"/> </a>
                    <a href="https://www.linkedin.com/in/jimmysoliscoding/" target="_blank"> <img src={linkedin} className="picSize"/></a>
                    </div>
                </div>

             </div>
               

            </div>
        </div>
        </motion.div>
    );

};

export default about;