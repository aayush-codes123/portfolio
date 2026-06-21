import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className={`${styles.padding} max-w-7xl mx-auto relative z-0 py-24`}>
     <div className="bg-primary rounded-[3rem] text-center px-6">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-secondary font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[24px] leading-tight">
                Let’s build something <br />
                remarkable together.
            </h2>
            <p className="mt-6 text-gray-500 max-w-lg mx-auto text-sm md:text-base">
                Currently accepting new projects for Q3 2026.
                Focusing on data visualization and interactive web experiences.
            </p>

            <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center items-center">
                <a
                    href="aayush.sah98211@gmail.com"
                    className="bg-accent text-white py-4 px-10 rounded-full font-bold shadow-lg shadow-blue-200 hover:shadow-xl hover:bg-accent-light transition-all flex items-center gap-3 text-lg"
                >
                    <FaEnvelope />
                    aayush.sah98211@gmail.com
                </a>

                <div className="flex gap-4">
                     <a href="https://github.com/aayush-codes123" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-accent hover:text-accent transition-all">
                        <FaGithub size={20} />
                     </a>
                     <a href="https://www.linkedin.com/in/aayush-sah0640/" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-accent hover:text-accent transition-all">
                        <FaLinkedin size={20} />
                     </a>
                </div>
            </div>

            <div className="mt-20 border-t border-gray-200 pt-10 flex flex-col items-center">
                 <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-accent rounded-lg flex items-center justify-center text-white text-xs font-bold">A</div>
                    <span className="font-bold text-secondary">Aayush</span>
                 </div>
                 <p className="text-gray-400 text-xs text-center">
                    © 2026 Aayush Design Studio. All rights reserved. <br />
                    Built with passion and precision.
                 </p>
            </div>
        </motion.div>
     </div>
    </section>
  );
};

export default Contact;
