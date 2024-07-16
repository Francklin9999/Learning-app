import { motion } from 'framer-motion';
import '../styles/Emote.css';

export default function Emote(props) {
    const state = (props.state == "happy") ? "happy" : "sad";

    return (
        <motion.div
            className={`emote-${state}`}
            initial={{ scale: 1, rotate: 30 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            >
            <div className={`emote-face-${state}`}>
                <div className={`emote-eyes-${state}`}>
                <div className={`eye-${state}`}></div>
                <div className={`eye-${state}`}></div>
                </div>
                <div className={`emote-mouth-${state}`}></div>
            </div>
        </motion.div>
    );
};


