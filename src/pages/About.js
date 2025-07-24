import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            A passionate software engineer with expertise in building scalable and efficient web applications.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Professional Background
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <span className="flex-none text-sm font-semibold leading-6 text-gray-900">
                  Software Engineer
                </span>
                <span className="mt-3 flex-auto">
                  With over X years of experience in software development, I specialize in creating robust and scalable web applications using modern technologies.
                </span>
              </dd>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col"
            >
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Areas of Expertise
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <span className="flex-none text-sm font-semibold leading-6 text-gray-900">
                  Web Development
                </span>
                <span className="mt-3 flex-auto">
                  Full-stack development, cloud services, and modern web frameworks.
                </span>
              </dd>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col"
            >
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Personal Interests
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <span className="flex-none text-sm font-semibold leading-6 text-gray-900">
                  Tech Enthusiast
                </span>
                <span className="mt-3 flex-auto">
                  Passionate about exploring new technologies and staying updated with the latest industry trends.
                </span>
              </dd>
            </motion.div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;
