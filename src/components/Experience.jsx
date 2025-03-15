import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaServer, FaMobileAlt, FaMotorcycle, FaUsers, FaDatabase, FaCogs } from 'react-icons/fa';
const Experience = () => {
  const projects = [
    {
      title: "Enterprise Management Solution",
      role: "Lead Frontend Developer",
      duration: "2023 - Present",
      bgGradient: "bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-black/95",
      overlayGradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
      description: "Spearheaded the development of a cutting-edge enterprise solution that revolutionized business operations through innovative microservices architecture and seamless system integration.",
      achievements: [
        {
          icon: <FaCode className="text-2xl text-white" />,
          text: "Pioneered scalable micro-frontend architecture using Webpack 5 module federation, reducing deployment complexity by 60%"
        },
        {
          icon: <FaServer className="text-2xl text-white" />,
          text: "Implemented robust OAuth2 authentication and RESTful services, achieving 99.9% system uptime"
        },
        {
          icon: <FaMobileAlt className="text-2xl text-white" />,
          text: "Crafted responsive UI components with 98% accessibility score and mobile-first approach"
        }
      ],
      features: [
        {
          name: "Advanced HR Management",
          description: "AI-powered employee analytics and automated payroll processing system"
        },
        {
          name: "Smart CRM Integration",
          description: "Real-time customer insights with predictive engagement metrics"
        },
        {
          name: "Intelligent Inventory Control",
          description: "ML-based inventory forecasting with automated reordering"
        },
        {
          name: "Production Optimization",
          description: "IoT-enabled workflow automation with real-time monitoring"
        }
      ],
      technologies: ["React.js", "TypeScript", "Micro-frontends", "Redux", "Material-UI", "REST APIs"]
    },
    {
      title: "Two-Wheeler Rental System",
      type: "Undergraduate Project",
      role: "Full Stack Developer",
      duration: "2023",
      bgGradient: "bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-black/95",
      overlayGradient: "from-cyan-500/20 via-teal-500/20 to-emerald-500/20",
      description: "Created a simple two-wheeler rental system as an undergraduate project to demonstrate MERN stack development skills and basic CRUD operations.",
      achievements: [
        {
          icon: <FaMotorcycle className="text-2xl text-white" />,
          text: "Built a basic bike booking and rental management system"
        },
        {
          icon: <FaUsers className="text-2xl text-white" />,
          text: "Created user registration and login functionality"
        },
        {
          icon: <FaDatabase className="text-2xl text-white" />,
          text: "Implemented simple MongoDB database for storing rental records"
        },
        {
          icon: <FaCogs className="text-2xl text-white" />,
          text: "Added basic email notifications for booking confirmations"
        }
      ],
      features: [
        {
          name: "Vehicle Management",
          description: "Add, update, and track available two-wheelers"
        },
        {
          name: "Booking System",
          description: "Simple interface for bike reservations and returns"
        },
        {
          name: "User Authentication",
          description: "Basic login and registration system"
        },
        {
          name: "Rental History",
          description: "Track and view past rental records"
        }
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
        staggerChildren: 0.2
      }
    }
  };

  const elementVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <motion.section
      id="experience"
      className="py-20 bg-black/[0.96] relative overflow-hidden backdrop-blur-3xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-500/10 blur-[120px] -z-10 animate-pulse-slow" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          className="text-6xl font-bold text-center mb-24 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-transparent bg-clip-text tracking-tight"
          variants={elementVariants}
        >
          Professional Experience & Projects
        </motion.h2>

        <motion.div
          className="space-y-40"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="relative group"
            >
              <div className={`absolute -inset-[2px] bg-gradient-to-r ${project.overlayGradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700`} />

              <div className={`${project.bgGradient} rounded-2xl p-8 relative z-10 backdrop-blur-2xl backdrop-saturate-150 border border-white/10 group-hover:border-white/20 transition-all duration-700 group-hover:translate-y-[-8px] shadow-xl group-hover:shadow-2xl`}>
                <div className="flex flex-col gap-8">
                  {/* Project Header */}
                  <motion.div
                    className="flex items-start gap-6"
                    variants={elementVariants}
                  >
                    <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all duration-700 backdrop-blur-xl shadow-xl">
                      <FaBriefcase className="text-4xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-3 text-white tracking-tight cursor-pointer hover:underline">
                        {project.title}
                      </h3>                      <div className="space-y-2">
                        {project.type && (
                          <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-xl group-hover:bg-white/20 transition-all duration-700 shadow-lg">
                            {project.type}
                          </span>
                        )}
                        <p className="text-white/90 font-semibold text-lg">{project.role}</p>
                        <p className="text-white/70">{project.duration}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    className="text-lg text-white/80 leading-relaxed"
                    variants={elementVariants}
                  >
                    {project.description}
                  </motion.p>

                  {/* Key Achievements */}
                  <motion.div variants={elementVariants}>
                    <h4 className="text-xl font-semibold mb-6 text-white">Key Achievements</h4>
                    <div className="grid gap-4">
                      {project.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          variants={elementVariants}
                          className="flex items-start gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-700 hover:scale-[1.02] hover:shadow-xl backdrop-blur-xl shadow-lg group-hover:shadow-xl"
                        >
                          <div className="p-3 bg-white/10 rounded-xl shadow-lg">
                            {achievement.icon}
                          </div>
                          <p className="text-white/90 font-medium">{achievement.text}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Core Features */}
                  <motion.div variants={elementVariants}>
                    <h4 className="text-xl font-semibold mb-6 text-white">Core Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          variants={elementVariants}
                          className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-700 hover:scale-[1.02] hover:shadow-xl backdrop-blur-xl shadow-lg group/feature"
                        >
                          <h5 className="font-semibold mb-3 text-white text-lg group-hover/feature:text-white/90 transition-colors">
                            {feature.name}
                          </h5>
                          <p className="text-white/70 group-hover/feature:text-white/90 transition-colors">
                            {feature.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div variants={elementVariants}>
                    <h4 className="text-xl font-semibold mb-6 text-white">Technologies</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          variants={elementVariants}
                          className="px-4 py-2 bg-white/10 text-white rounded-xl text-sm font-medium hover:bg-white/20 hover:scale-110 transition-all duration-700 cursor-pointer backdrop-blur-xl shadow-lg"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
