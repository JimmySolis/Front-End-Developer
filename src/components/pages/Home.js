import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home (){
    return (
        <motion.div 
        initial={{opacity:0}} 
        animate={{ opacity:1 }} 
        exit={{ opacity: 0 }} 
        transition={{ delay: .3 }}
        >
        <div className="containerHome">
            <div className="containerHomeGrid">
                <Link to="/FrontEnd"> <button className="btnStyle btnOne"></button> </Link>
                <Link to="/BackEnd"> <button className="btnStyle btnTwo"></button> </Link> 
                <Link to="/Contact"> <button className="btnStyle btnThree">Contact</button> </Link>
                <Link to="/About">  <button className="btnStyle btnFour"> About Me  </button></Link>
            </div>
        </div>
        </motion.div>
    )
}

export default Home;