import { motion } from 'framer-motion'; // Import motion from framer-motion
import { Phone } from 'lucide-react';
import React from 'react';
import Footer from './footer'; // Make sure to import the Footer component

const Contacts = () => {
  const address = 'г. Москва, Вятская ул.,27, стр. 12';

  // Animation variants and transition
  const pageVariants = {
    hidden: { opacity: 0, y: 50 }, // Fade out and slide down
    visible: { opacity: 1, y: 0 }, // Fade in and slide up
  };

  const pageTransition = {
    duration: 1,
    ease: 'easeInOut',
  };

  return (
    <motion.div
      className="bg-zinc-900 text-white min-h-screen"
      initial="hidden" // Initial animation state
      animate="visible" // Final animation state
      variants={pageVariants} // Variants for animation
      transition={pageTransition} // Transition settings
    >
      <div className="container mx-auto p-8 pt-20">
        {/* Title Section */}
        <motion.h1
          className="text-5xl font-bold mb-6 mt-10 text-center"
          initial={{ opacity: 0, y: -20 }} // Start above the viewport
          animate={{ opacity: 1, y: 0 }} // Slide down into view
          transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth transition
        >
          Контакты
        </motion.h1>

        {/* Main Flex Container for Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Side: Work Hours */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -50 }} // Slide from the left
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to place
            transition={{ duration: 0.8, delay: 0.2 }} // Delayed animation
          >
            <h2 className="text-3xl font-bold mb-2">Клуб работает каждый день</h2>
            <p className="text-xl mb-1">по будням: 07:00 – 00:00</p>
            <p className="text-xl mb-1">по выходным: 09:00 – 00:00</p>
            <p className="text-xl mb-1">в праздники: 09:00 – 22:00</p>
          </motion.div>

          {/* Right Side: Contact Info with Icons */}
          <motion.div
            className="flex flex-col space-y-6 justify-end text-right"
            initial={{ opacity: 0, x: 50 }} // Slide from the right
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to place
            transition={{ duration: 0.8, delay: 0.4 }} // Delayed animation
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">Отдел продаж</h3>
              <a href="tel:+79859220775" className="text-orange-500 text-xl flex items-center justify-end">
                <Phone className="mr-2" />+7 (979) 456-29-02
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Ресепшн</h3>
              <a href="tel:+74950500067" className="text-orange-500 text-xl flex items-center justify-end">
                <Phone className="mr-2" />+7 (979) 456-26-02
              </a>
            </div>
          </motion.div>
        </div>

        {/* Address Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }} // Slightly zoomed-out and hidden
          animate={{ opacity: 1, scale: 1 }} // Zoom in and appear
          transition={{ duration: 0.8, delay: 0.6 }} // Delayed transition
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Адрес</h2>
          <p className="text-xl text-center">{address}</p>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="mb-40"
          initial={{ opacity: 0 }} // Hidden initially
          animate={{ opacity: 1 }} // Fade in
          transition={{ duration: 1, delay: 0.8 }} // Delayed fade-in
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aac582ad4c77dcab444a5fecc1c09a15488a8b8cde99a97e475f1d3a757109f58&amp;source=constructor"
            width="100%"
            height="720"
            frameBorder="0"
          ></iframe>
        </motion.div>
      </div>

      {/* Footer Component */}
      <Footer />
    </motion.div>
  );
};

export default Contacts;