import axios from 'axios';
import { motion } from 'framer-motion'; // Import framer-motion
import React, { useEffect, useState } from 'react';

const Team = () => {
  const [trainers, setTrainers] = useState([]); // Состояние для хранения данных о тренерах
  const [loading, setLoading] = useState(true); // Состояние для загрузки

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/Trainers'); // Получаем данные с сервера
        setTrainers(response.data); // Сохраняем данные о тренерах
        setLoading(false); // Данные загружены
      } catch (error) {
        console.error('Ошибка при загрузке данных о тренерах:', error);
        setLoading(false); // Если ошибка, останавливаем индикатор загрузки
      }
    };

    fetchTrainers();
  }, []); // Загружаем данные один раз при монтировании компонента

  if (loading) {
    return <p>Загрузка...</p>; // Пока данные загружаются
  }

  return (
    <motion.section
      className="min-h-screen bg-zinc-900 text-gray-400 p-8 pt-[100px]"
      initial={{ opacity: 0 }} // Начальная прозрачность
      animate={{ opacity: 1 }} // Конечная прозрачность
      transition={{ duration: 1 }} // Длительность анимации
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-orange-500 mb-4">Наша команда</h1>
        <p className="text-lg text-gray-300 mb-12">
          Мы объединяем самых лучших профессионалов в области спорта и фитнеса, чтобы помочь вам достичь ваших целей.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.id}
              className="bg-zinc-800 rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0 }} // Начальная прозрачность для каждого элемента
              animate={{ opacity: 1 }} // Конечная прозрачность для каждого элемента
              transition={{ duration: 0.5 }} // Длительность анимации для каждого элемента
            >
              <h3 className="text-2xl text-orange-400 font-bold">{trainer.name}</h3>
              <p className="text-gray-300">{trainer.position}</p>
              <div className="mt-4 w-full aspect-[2/3] bg-zinc-700 rounded overflow-hidden">
                {trainer.photo ? (
                  <img
                    src={`http://localhost:5000${trainer.photo}`}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center text-gray-300 h-full">
                    Нет фото
                  </div>
                )}
              </div>
              <p className="text-gray-300 mt-4 whitespace-pre-line">{trainer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Team;