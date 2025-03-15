import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaBookReader, FaRocket } from 'react-icons/fa';

const About = () => {
  const education = [
    {
      degree: "Masters in Computer Science",
      institution: "Rathinam College of Arts and Science",
      location: "Coimbatore",
      year: "2023",
      description: "Focused on advanced software development, algorithms, and modern web technologies."
    },
    {
      degree: "Bachelors in Computer Science",
      institution: "Rathinam College of Arts and Science",
      location: "Coimbatore",
      year: "2021",
      description: "Built strong foundations in programming, data structures, and software engineering principles."
    }
  ];

  const highlights = [
    {
      icon: <FaLaptopCode className="text-3xl text-accent" />,
      title: "Modern Tech Stack",
      description: "Proficient in React.js ecosystem, TypeScript, and modern frontend development tools"
    },
    {
      icon: <FaRocket className="text-3xl text-accent" />,
      title: "Performance Focused",
      description: "Dedicated to creating fast, efficient, and scalable web applications"
    },
    {
      icon: <FaBookReader className="text-3xl text-accent" />,
      title: "Continuous Learner",
      description: "Constantly updating skills and adopting new technologies to stay current"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="heading text-center">
            About Me
          </motion.h2>

          {/* Professional Summary */}
          <motion.div 
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-16 text-center leading-relaxed"
          >
            <p className="mb-4">
              As a Frontend Developer with 1.5 years of experience, I specialize in creating 
              intuitive and performant web applications using React.js and modern web technologies.
              My approach combines technical expertise with a keen eye for user experience.
            </p>
            <p>
              I thrive in collaborative environments where I can contribute to meaningful projects
              that make a real impact. My goal is to build scalable solutions that help businesses
              grow and provide exceptional user experiences.
            </p>
          </motion.div>

          {/* Key Highlights */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-accent/10 rounded-full">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education Section */}
          <motion.div variants={containerVariants} className="mt-16">
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-center"
            >
              Education Journey
            </motion.h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-accent/10 rounded-full">
                        <FaGraduationCap className="text-3xl text-accent" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                      <p className="text-accent font-semibold mb-1">{edu.institution}</p>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {edu.location} • {edu.year}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Interested in collaborating or learning more about my work?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block btn-primary"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
