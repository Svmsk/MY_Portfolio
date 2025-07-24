import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce application with user authentication, product management, and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: '/project1.jpg',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A modern and responsive portfolio website built with React and Tailwind CSS.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: '/project2.jpg',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    tech: ['React', 'Firebase', 'Material UI'],
    imageUrl: '/project3.jpg',
    demoUrl: '#',
    codeUrl: '#',
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore some of my recent work and projects
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 text-sm leading-6 text-gray-600 sm:grid-cols-2">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: project.id * 0.2 }}
                className="group relative isolate flex flex-col gap-8 rounded-2xl bg-white p-8 shadow sm:overflow-hidden sm:p-10"
              >
                <div className="flex items-center gap-x-6">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary-500">
                    <span className="text-sm font-semibold leading-6 text-white">
                      {project.id}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-7 text-gray-900 group-hover:text-primary-600">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-base leading-7 text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-x-4">
                  <a
                    href={project.demoUrl}
                    className="flex-none rounded-md bg-primary-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex-none rounded-md px-3.5 py-2 text-sm font-semibold text-gray-900 hover:text-gray-600"
                  >
                    View Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
