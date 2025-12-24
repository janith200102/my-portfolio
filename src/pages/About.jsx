import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className="page-container"
      initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50 }}
    >
      <h1>About Me</h1>
      <div className="card">
        <h3>🎓 Education</h3>
        <p><strong>BSc (Hons) in Software Engineering</strong> - Plymouth University (UK) (2025)</p>
        <p><strong>Full-Stack Development Course</strong> - University of Moratuwa (2024)</p>
      </div>

      <div className="card">
        <h3>🛠️ Technical Skills</h3>
        <p><strong>Languages:</strong> Java, Python, JavaScript, PHP</p>
        <p><strong>Web:</strong> React, Node.js, HTML, CSS, WordPress</p>
        <p><strong>Database:</strong> MySQL, Firebase</p>
        <p><strong>Design:</strong> Figma, Canva</p>
      </div>

      <div className="card">
        <h3>💼 Experience</h3>
        <p><strong>IT Project Leader</strong> at Smart Scholar Hub (Pvt) Ltd (2024 - Present)</p>
      </div>
    </motion.div>
  );
};

export default About;