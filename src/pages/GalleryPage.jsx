import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Project 1', image: 'https://picsum.photos/800/600?random=1' },
  { id: 2, title: 'Project 2', image: 'https://picsum.photos/800/600?random=2' },
  { id: 3, title: 'Project 3', image: 'https://picsum.photos/800/600?random=3' },
];

function GalleryPage() {
  return (
    <div className="gallery">
      {projects.map((project) => (
        <motion.div 
          key={project.id} 
          className="project-thumbnail" 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Link to={`/project/${project.id}`}>
            <motion.div 
              className="thumbnail-overlay" 
              initial={{ opacity: 0 }} 
              whileHover={{ opacity: 1 }}
            >
              <span className="explore-text">Explore</span>
            </motion.div>
            <motion.img 
              src={project.image} 
              alt={project.title} 
              className="thumbnail" 
              layoutId={`project-image-${project.id}`} // Ensure smooth transition
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export default GalleryPage;
