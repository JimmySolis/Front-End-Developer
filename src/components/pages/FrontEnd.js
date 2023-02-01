import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function frontEnd (){
    return(
        <motion.div 
        initial={{scaleY:0}} 
        animate={{ scaleY:1 }} 
        exit={{ scaleY: 0 }} 
        transition={{ duration: .3 }}
        >
            <div className="containerFullPage">
                <div className="containerFrontGrid">

            <button className="mrk"></button>

            <button className="blg"></button>

            <button className="del"></button>

            <button className="old"></button>

            <button className="wtw"></button>

            <button className="quz"></button>

           

                </div>
            </div>
           

        </motion.div>
    )

}

export default frontEnd;