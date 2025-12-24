import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
    >
      <h1>Contact Me</h1>
      <div className="card" style={{ textAlign: 'center' }}>
        <p>Feel free to reach out for collaborations!</p>
        <h2>📧 janithkuruppu0202@gmail.com</h2>
        <p>📞 070 486 95 62</p>
        
        <div style={{ marginTop: '20px' }}>
            <a href="https://linkedin.com/in/janith-kuruppu-2bb2b8291" className="btn" target="_blank">LinkedIn Profile</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;