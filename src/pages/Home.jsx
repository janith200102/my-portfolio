import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
    >
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        
        {/* --- Profile Image Section Start --- */}
        <div className="img-container">
            {/* Make sure the path matches your file location */}
            <img 
                src="/src/assets/profile.jpg" 
                alt="Janith Kuruppu" 
                className="profile-img" 
            />
        </div>
        {/* --- Profile Image Section End --- */}

        <motion.h1 
          initial={{ y: -50 }} animate={{ y: 0 }}
          style={{ fontSize: '3rem', marginBottom: '10px' }}
        >
          Hi, I'm <span style={{ color: '#38bdf8' }}>Janith Kuruppu</span>
        </motion.h1>
        
        <h2 style={{ color: '#94a3b8' }}>IT Project Leader | Software Engineer</h2>
        
        <p style={{ maxWidth: '600px', margin: '20px auto', lineHeight: '1.6' }}>
          I am a passionate and results-driven Software Engineer with a strong foundation in web and software development. 
          Currently leading IT projects at Smart Scholar Hub.
        </p>
        
        <a href="/projects" className="btn">View My Work</a>
      </div>
    </motion.div>
  );
};

export default Home;