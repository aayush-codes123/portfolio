import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaChartBar, FaCode, FaDatabase } from "react-icons/fa";

const expertise = [
    {
        title: "Data Visualization",
        icon: <FaChartBar />,
        description: "Transforming complex datasets into clear, interactive charts and dashboards using PowerBI and Python libraries."
    },
    {
        title: "Frontend Development",
        icon: <FaCode />,
        description: "Building responsive, pixel-perfect web interfaces with React, Tailwind CSS, and modern animation libraries."
    },
    {
        title: "Backend & Logic",
        icon: <FaDatabase />,
        description: "Designing robust APIs and efficient database schemas to support scalable data-driven applications."
    },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

const Skills = () => {
    return (
        <section id="skills" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            <div className="text-center mb-16">
                <span className="text-accent font-bold tracking-wider uppercase text-sm">Core Expertise</span>
                <h2 className={styles.sectionHeadText}>What I bring to the table</h2>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {expertise.map((item, index) => (
                    <motion.div
                        key={item.title}
                        variants={itemVariant}
                        className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] shadow-card border border-white/50 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-accent flex items-center justify-center text-2xl mb-6">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-4">{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
