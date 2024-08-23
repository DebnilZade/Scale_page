import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

function ProjectDetailPage() {
  const { id } = useParams();
  const project = { id: 1, title: 'Project 1', image: 'https://picsum.photos/800/600?random=1' };

  const waveTransition = {
    duration: 1.5,
    ease: 'easeInOut',
    times: [0, 0.5, 1],
  };

  const waveVariants = {
    initial: { scale: 1, borderRadius: "0%" },
    animate: {
      scale: 1.2,
      borderRadius: ["0%", "10%", "0%"], // Create wave effect with rounded corners
      transition: waveTransition,
    },
  };

  return (
    <div className="project-detail">
      <motion.img
        src={project.image}
        alt={project.title}
        className="banner-image"
        layoutId={`project-image-${id}`}
        initial="initial"
        animate="animate"
        variants={waveVariants}
      />
      <div className="content">
        <h1>{project.title}</h1>
        <p>Project description goes here...</p>
        <section>
          <h2>Section 1</h2>
          <p>Details about section 1...</p>
        </section>
        <section>
          <h2>Section 2</h2>
          <p>Details about section 2...</p>
        </section>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
