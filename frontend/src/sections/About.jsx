import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import profile from "../assets/profile.jpeg";

const About = () => {
  return (
    <section id="about" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center">

        {/* Left Column: Image */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 w-full max-w-[400px] md:max-w-[500px]"
        >
            <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
                <img
                    src={profile}
                    alt="Aayush - Data Analyst"
                    className="w-full h-full object-cover"
                />
            </div>
        </motion.div>

        {/* Right Column: Text */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
        >
            <span className="text-accent font-bold tracking-wider uppercase text-sm">About Me</span>
            <h2 className={`${styles.sectionHeadText} mt-4 mb-6 leading-tight`}>
                Crafting insights with <br />
                passion & precision.
            </h2>

            <p className="text-secondary text-[17px] leading-[30px] mb-6">
                I blend technical proficiency with a data-driven mindset to create unique digital products.
                My work focuses on uncovering trends, designing intuitive visualizations, and building
                scalable web applications that solve real-world problems.
            </p>

            <p className="text-gray-500 text-[16px] leading-[28px] mb-8">
                I believe that data is only as good as the insights it provides. My goal is to make
                complex information accessible, actionable, and visually compelling for users
                and stakeholders alike.
            </p>

            <div className="grid grid-cols-2 gap-6">
                <div>
                   <h4 className="flex items-center gap-2 font-bold text-secondary mb-2">
                        <span className="text-accent">✓</span> Data Analysis
                   </h4>
                   <p className="text-sm text-gray-500">Transforming raw data into meaningful business insights.</p>
                </div>
                <div>
                   <h4 className="flex items-center gap-2 font-bold text-secondary mb-2">
                        <span className="text-accent">✓</span> Web Development
                   </h4>
                   <p className="text-sm text-gray-500">Building interactive dashboards and responsive applications.</p>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
