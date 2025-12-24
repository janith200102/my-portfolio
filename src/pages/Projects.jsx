import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Stress Reduce Mobile App",
    desc: "A mental health app for NSBM students using React Native & Firebase.",
    year: "2025"
  },
  {
    id: 2,
    title: "Accommodation Finder",
    desc: "Web application to simplify student accommodation search using PHP & MySQL.",
    year: "2024"
  },
  {
    id: 3,
    title: "Clothing Store Web App",
    desc: "C# and SQL-based online store with payment integration.",
    year: "2024"
  }
];

const Projects = () => {
  return (
    <motion.div 
      className="page-container"
      initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}
    >
      <h1>My Projects</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {projects.map((project) => (
          <motion.div key={project.id} className="card" whileHover={{ scale: 1.05 }}>
            <h3>{project.title}</h3>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{project.year}</span>
            <p>{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;