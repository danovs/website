import { motion } from 'framer-motion'; // Import motion from framer-motion
import { BarChart, Bike, Dumbbell, Heart, Target, Users } from 'lucide-react'; // Added Target and BarChart for the new services
import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import useInView hook from react-intersection-observer
import BannerImg from '../assets/hero.png';

const BgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%"
};

const Services = () => {
  const servicesJson = [
    {
      title: "Силовые упраженния",
      description: "Прокачивайте свои мускулы и повышайте силу с помощью нашей программы тренировок.",
      icon: Dumbbell,
    },
    {
      title: "Групповая работа",
      description: "Присоединяйтесь к группе спортсменов для веселья и поднятия мотивации.",
      icon: Users,
    },
    {
      title: "Кардио упраженния",
      description: "Улучшайте свое сердечно-сосудистое здоровье с нашим универсальным оборудованием и упражнениями.",
      icon: Heart,
    },
    {
      title: "Круговые упражнения",
      description: "Занимайтесь фитнесом на наших интенсивных занятиях по отжиманию под руководством сертифицированных инструкторов.",
      icon: Bike,
    },
    {
      title: "Пилатес",
      description: "Занимайтесь пилатесом для улучшения гибкости и укрепления мышц кора.",
      icon: BarChart,
    },
    {
      title: "Функциональные тренировки",
      description: "Развивайте силу и выносливость с помощью функциональных упражнений и тренажеров.",
      icon: Target,
    },
  ];

  return (
    <div id="service" style={BgStyle} className="relative bg-zinc-900 text-white">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative bg-zinc-950/60 px-6 md:px-0 py-16">
        <div className="max-w-7xl mx-auto min-h-[620px] flex flex-col items-center">
          <h1 className="text-4xl text-center mb-12">
            <span className="text-orange-500 font-bold">Наши</span> <span className="text-white font-bold">услуги</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {
              servicesJson.map((service, index) => {
                const { title, description, icon: Icon } = service;

                const { ref, inView } = useInView({
                  triggerOnce: true,
                  threshold: 0.5
                });

                return (
                  <motion.div
                    key={index}
                    ref={ref}
                    className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:bg-zinc-700 transition duration-300"
                    initial={{ opacity: 0 }} // Start fully transparent
                    animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
                    transition={{
                      delay: index * 0.2,
                      duration: 0.5 // Simple fade-in animation duration
                    }}
                  >
                    <div className="flex flex-col md:flex-row gap-4 items-center text-center md:text-start">
                      {/* Circle with Orange background */}
                      <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center md:mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        {/* Title with alternating colors */}
                        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                        <p className="text-gray-400 text-sm">{description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
