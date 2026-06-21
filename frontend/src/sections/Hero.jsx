import { motion } from "framer-motion";
import { styles } from "../styles";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import InteractiveParticles from "../components/InteractiveParticles";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto flex flex-col justify-center items-center overflow-hidden`}>

      <div className={`relative z-10 text-center ${styles.paddingX} max-w-7xl mx-auto`}>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <span className="py-2 px-4 rounded-full bg-blue-50 text-accent font-medium text-sm tracking-wider uppercase shadow-sm border border-blue-100">
                Available for Projects
            </span>
            <h1 className={`${styles.heroHeadText} mt-10 drop-shadow-sm`}>
                Designing <br className="sm:block hidden" />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600'>Data Insights</span>
            </h1>
            <p className={`${styles.heroSubText} mt-6 text-gray-600 max-w-2xl mx-auto`}>
                Modern minimalistic design focused on clarity, depth, and interactive 3D aesthetics
                for the next generation of data-driven applications.
            </p>

            <div className="mt-10 flex gap-4 justify-center">
                <a href="#projects" className="bg-accent text-white py-3 px-8 rounded-full font-bold shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1">
                    View My Work
                </a>
                <a href="#about" className="bg-white text-secondary py-3 px-8 rounded-full font-bold shadow-md hover:shadow-lg transition-all border border-gray-100 hover:-translate-y-1">
                    My Process
                </a>
            </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0 h-full w-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
                <InteractiveParticles mouse={mousePosition} />
            </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
