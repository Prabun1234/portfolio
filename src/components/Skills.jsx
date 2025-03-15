import { motion } from 'framer-motion';
import { 
  DiReact, DiJavascript1, DiPython, DiGit, DiCss3, DiHtml5, DiMongodb, DiMysql,
  DiSass, DiNodejs, DiNpm
} from 'react-icons/di';
import { SiTypescript, SiTailwindcss, SiRedux, SiWebpack } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';

const Skills = () => {
  const skills = {
    frontend: [
      { name: "React.js", icon: <DiReact className="text-5xl text-[#61DAFB]" />, level: 90 },
      { name: "TypeScript", icon: <SiTypescript className="text-4xl text-[#3178C6]" />, level: 85 },
      { name: "JavaScript", icon: <DiJavascript1 className="text-5xl text-[#F7DF1E]" />, level: 90 },
      { name: "HTML5", icon: <DiHtml5 className="text-5xl text-[#E34F26]" />, level: 95 },
      { name: "CSS3", icon: <DiCss3 className="text-5xl text-[#1572B6]" />, level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-[#06B6D4]" />, level: 85 },
      { name: "Redux", icon: <SiRedux className="text-4xl text-[#764ABC]" />, level: 80 },
      { name: "UI Design", icon: <MdDesignServices className="text-4xl text-[#0081CB]" />, level: 85 }
    ],
    tools: [
      { name: "Git", icon: <DiGit className="text-5xl text-[#F05032]" />, level: 85 },
      { name: "Node.js", icon: <DiNodejs className="text-5xl text-[#339933]" />, level: 75 },
      { name: "Webpack", icon: <SiWebpack className="text-4xl text-[#8DD6F9]" />, level: 70 },
      { name: "npm", icon: <DiNpm className="text-5xl text-[#CB3837]" />, level: 85 }
    ],
    backend: [
      { name: "Python", icon: <DiPython className="text-5xl text-[#3776AB]" />, level: 75 },
      { name: "MongoDB", icon: <DiMongodb className="text-5xl text-[#47A248]" />, level: 70 },
      { name: "MySQL", icon: <DiMysql className="text-5xl text-[#4479A1]" />, level: 75 },
      { name: "Sass", icon: <DiSass className="text-5xl text-[#CC6699]" />, level: 80 }
    ],
    certifications: [
      {
        name: "Python Full Stack Development",
        issuer: "Appin Technology",
        date: "2022",
        description: "Comprehensive training in full-stack development using Python"
      },
      {
        name: "Advanced JavaScript",
        issuer: "Online Learning Platform",
        date: "2022",
        description: "Deep dive into modern JavaScript features and best practices"
      },
      {
        name: "TypeScript Mastery",
        issuer: "Online Learning Platform",
        date: "2023",
        description: "Advanced TypeScript concepts and practical applications"
      },
      {
        name: "Redux & Form Validation",
        issuer: "Online Learning Platform",
        date: "2023",
        description: "State management with Redux and form validation using Formik + Yup"
      },
      {
        name: "Web Development Fundamentals",
        issuer: "SoloLearn",
        date: "2022",
        description: "Core web development concepts and modern practices"
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  const SkillBar = ({ level }) => (
    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-accent"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="heading text-center">
            Skills & Certifications
          </motion.h2>

          {/* Frontend Skills */}
          <div className="mb-16">
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-center"
            >
              Frontend Development
            </motion.h3>
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {skills.frontend.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
                >
                  <div className="flex flex-col items-center">
                    {skill.icon}
                    <h4 className="mt-3 mb-2 font-medium">{skill.name}</h4>
                    <SkillBar level={skill.level} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Development Tools */}
          <div className="mb-16">
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-center"
            >
              Development Tools
            </motion.h3>
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {skills.tools.concat(skills.backend).map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
                >
                  <div className="flex flex-col items-center">
                    {skill.icon}
                    <h4 className="mt-3 mb-2 font-medium">{skill.name}</h4>
                    <SkillBar level={skill.level} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div variants={containerVariants}>
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-center"
            >
              Professional Certifications
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-lg text-accent">{cert.name}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuer}</p>
                    <p className="text-gray-600 dark:text-gray-400">{cert.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
