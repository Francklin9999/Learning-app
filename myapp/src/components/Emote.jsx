// src/Emote.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Emote.css';

const Emote = () => {
  return (
    <motion.div
      className="emote"
      initial={{ scale: 0.5, rotate: 0 }}
      animate={{ scale: 1, rotate: 360 }}
      transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
    >
      <div className="emote-face">
        <div className="emote-eyes">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        <div className="emote-mouth"></div>
      </div>
    </motion.div>
  );
};

export default Emote;
