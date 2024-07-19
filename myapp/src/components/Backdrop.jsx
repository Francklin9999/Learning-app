import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Backdrop.css';

export default function Backdrop({ children, onClick }) {
    return (
        <motion.div
            onClick={onClick}
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    );
}