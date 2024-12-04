import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import Footer from './footer'; // Импортируем Footer

const Pricing = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const pricingJson = [
    {
      plan: 'Стандарт',
      text: 'Для обычных людей',
      price: '₽3200/месяц',
      t1: 'Доступ к снаряжению спортзала',
      t2: 'Доступ к раздевалке',
      t3: 'Зона свободных весов',
    },
    {
      plan: 'Про',
      text: 'Для серьезных любителей фитнеса',
      price: '₽5300/мес',
      t1: 'Все основные функции',
      t2: 'Групповые занятия фитнесом',
      t3: 'Персональный план тренировок',
    },
    {
      plan: 'Элита',
      text: 'Для тех, кто хочет всего этого',
      price: '₽8700/мес',
      t1: 'Все функции Pro',
      t2: 'Персональные тренировки',
      t3: 'Консультация по питанию',
    },
  ];

  const handlePlanClick = () => {
    navigate('/membership'); // Redirect to the /memberships page
  };

  return (
    <>
      <section id="pricing" className="p-8 pb-20 pt-10 text-center bg-zinc-900 text-gray-400">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-orange-500">Тарифные планы</h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
            Если вам нужна дополнительная информация или вы просто хотите отправить нам сообщение, не стесняйтесь обращаться к нам. Мы будем рады услышать ваше мнение.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingJson.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }} // Начальная анимация
                animate={{ opacity: 1, y: 0 }} // Анимация появления
                transition={{ duration: 0.6, ease: 'easeOut' }} // Параметры анимации
                className="border p-6 rounded-lg shadow-md text-start"
              >
                <h3 className="text-2xl font-semibold">{item.plan}</h3>
                <p className="text-gray-400">{item.text}</p>
                <h1 className="text-orange-500 text-3xl font-bold mt-4 mb-4">{item.price}</h1>
                <div className="flex gap-1">
                  <p>{item.t1}</p>
                </div>
                <div className="flex gap-1">
                  <p>{item.t2}</p>
                </div>
                <div className="flex gap-1">
                  <p>{item.t3}</p>
                </div>
                <button
                  onClick={handlePlanClick} // Attach the click handler to the button
                  className="bg-gray-300 text-black font-semibold px-3 py-2 rounded-md w-full mt-4 hover:bg-orange-400 transition duration-300"
                >
                  Выбрать план
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer /> {/* Добавляем Footer */}
    </>
  );
};

export default Pricing;
