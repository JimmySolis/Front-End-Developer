import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function backEnd (){
    return(
        <motion.div 
        initial={{opacity:0}} 
        animate={{ opacity:1 }} 
        exit={{ opacity: 0 }} 
        transition={{ delay: .3 }}
        >
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            
        </motion.div>
    )

}

export default backEnd;