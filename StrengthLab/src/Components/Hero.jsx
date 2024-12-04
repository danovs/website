import { motion } from 'framer-motion';
import React from 'react';
import BannerImg from '../assets/hero.png';

const BgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Hero = () => {
  return (
    <motion.div
      id="#"
      style={BgStyle}
      className="bg-zinc-900 text-white"
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div className="bg-zinc-900/75 h-[90vh] flex justify-center items-center px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
          {/* Left Text Block */}
          <div className="md:w-1/2 w-full space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Наслаждение спортом <br /> начинается здесь.
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto md:mx-0">
              Присоединяйтесь к нам и начните заниматься спортом с опытными тренерами и профессиональным оборудованием.
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                className="bg-orange-500 px-6 py-4 rounded-lg font-semibold text-white text-base sm:text-lg lg:text-xl hover:bg-orange-600 transition duration-300"
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Узнать больше
              </button>
            </div>
          </div>

          {/* Right Block (empty for future content) */}
          <div className="md:w-1/2 hidden md:block"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;