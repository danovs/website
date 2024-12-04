import { motion } from 'framer-motion';
import { BicepsFlexed, CircleCheck, Dumbbell, HeartPulse, Target, Users } from 'lucide-react';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import AboutImg1 from '../assets/AboutImg1.jpg';
import AboutImg2 from '../assets/AboutImg2.jpg';
import AboutImg3 from '../assets/AboutImg3.jpg';

const About = () => {
  // Используем хук useInView
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });
  {/*const [ref6, inView6] = useInView({ triggerOnce: true });*/}

  return (
    <div>
      <motion.section
        className="bg-zinc-900 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div id="about" className="p-8 text-center max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-4 text-orange-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            О нас
          </motion.h2>
          <motion.p
            className="text-gray-300  max-w-md mx-auto mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Наш спортзал направлен на помощь получения ваших спортивных целей с профессиональными тренерами и мотивирующей обстановкой.
          </motion.p>

          <div className="w-full py-12 md:py-24 lg:py-10">
            <div className="px-4 md:px-6">
              <div className="grid gap-10 lg:grid-cols-2 items-center">
                <div className="space-y-6 text-start">
                  <motion.h2
                    className="text-3xl font-bold tracking-tighter sm:text-5xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    Про StrengthLAB
                  </motion.h2>
                  <motion.p
                    className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  >
                    Мы открылись в 2005 году. StrengthLAB выступает лидером по достижению персональных целей в спорте у клиентов. Спортзал помогает достичь спортивные цели. Нашим преимуществом является то, что у нас работают профессиональные тренеры, мотивирующая атмосфера и приятное общество.
                  </motion.p>
                </div>

                {/* Слайдер с изображениями */}
                <div className="w-full lg:order-last hidden md:block">
                  <Swiper
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                      delay: 500,
                      disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    className="w-full"
                  >
                    <SwiperSlide>
                      <img
                        src={AboutImg1}
                        alt="Gym Image 1"
                        className="mx-auto rounded-xl object-cover w-full h-[400px]"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={AboutImg2}
                        alt="Gym Image 2"
                        className="mx-auto rounded-xl object-cover w-full h-[400px]"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={AboutImg3}
                        alt="Gym Image 3"
                        className="mx-auto rounded-xl object-cover w-full h-[400px]"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>

              {/* Сетка с контейнерами */}
              <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                <motion.div
                  className="flex flex-col items-center space-y-4 p-6 bg-zinc-800 rounded shadow-sm shadow-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  ref={ref1}
                >
                  <Dumbbell className="h-12 w-12 text-orange-500" />
                  <h3 className="text-xl font-bold">Наша цель</h3>
                  <p className="text-center text-gray-300 ">
                    Вдохновлять и расширять возможности людей полностью раскрывать свой потенциал с помощью фитнеса, способствуя созданию более здорового и счастливого сообщества.
                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center space-y-4 p-6 bg-zinc-800 rounded shadow-sm shadow-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  ref={ref2}
                >
                  <Users className="h-12 w-12 text-orange-500" />
                  <h3 className="text-xl font-bold">Наше сообщество</h3>
                  <p className="text-center text-gray-300 ">
                    Мы гордимся тем, что создаем гостеприимную, инклюзивную среду, в которой участники поддерживают и мотивируют друг друга для достижения своих целей.
                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center space-y-4 p-6 bg-zinc-800 rounded shadow-sm shadow-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  ref={ref2}
                >
                  <Target className="h-12 w-12 text-orange-500" />
                  <h3 className="text-xl font-bold">Наш подход</h3>
                  <p className="text-center text-gray-300 ">
                  Мы сочетаем ультрасовременное оборудование, индивидуальные программы тренировок и рекомендации по питанию, чтобы помочь вам достичь устойчивых результатов.
                  </p>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center space-y-4 p-6 bg-zinc-800 rounded shadow-sm shadow-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  ref={ref3}
                >
                  <HeartPulse className="h-12 w-12 text-orange-500" />
                  <h3 className="text-xl font-bold">Наше здоровье</h3>
                  <p className="text-center text-gray-300">
                  Мы ставим в приоритет не только физическую форму, но и общее благополучие. Помогаем укрепить тело, повысить выносливость и найти баланс между нагрузками и восстановлением.
                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center space-y-4 p-6 bg-zinc-800 rounded shadow-sm shadow-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView4 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  ref={ref4}
                >
                  <BicepsFlexed className="h-12 w-12 text-orange-500" />
                  <h3 className="text-xl font-bold">Наша сила</h3>
                  <p className="text-center text-gray-300">
                  Это не только о мускулах, но и о внутренней уверенности. Мы создаем условия, в которых каждый может преодолеть свои ограничения, почувствовать силу тела и разума.

                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center space-y-4 p-6 bg-zinc-800 rounded shadow-sm shadow-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView5 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  ref={ref5}
                >
                  <CircleCheck className="h-12 w-12 text-orange-500" />
                  <h3 className="text-xl font-bold">Наш успех</h3>
                  <p className="text-center text-gray-300 ">
                  Мы измеряем успех не только в килограммах и сантиметрах, но и в эмоциях. Каждая ваша победа, от маленькой до большой, – это наша общая радость.

                  </p>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;