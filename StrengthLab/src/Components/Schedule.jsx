import axios from "axios"; // Используем axios для запросов
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

// Функция для конвертации day_id в день недели (если нужно)
const getDayName = (dayId) => {
  const days = [
    "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"
  ];
  return days[dayId - 1] || "Неизвестный день"; // dayId, возможно, начинается с 1
};

const Schedule = () => {
  const [scheduleData, setScheduleData] = useState([]); // Храним расписание в state
  const [loading, setLoading] = useState(true); // Стейт для отслеживания загрузки данных

  // Анимация
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    // Загружаем данные с сервера
    const fetchSchedule = async () => {
      try {
        const response = await axios.get("http://localhost:5000/schedule"); // Путь к вашему API
        setScheduleData(response.data);
        setLoading(false); // Данные загружены
      } catch (error) {
        console.error("Ошибка при загрузке расписания:", error);
        setLoading(false); // Если ошибка, тоже останавливаем индикатор загрузки
      }
    };

    fetchSchedule();
  }, []); // Загружаем данные один раз при монтировании компонента

  if (loading) {
    return <p>Загрузка...</p>; // Показываем текст, пока данные загружаются
  }

  // Группируем расписание по дням
  const groupedSchedule = scheduleData.reduce((acc, scheduleItem) => {
    const dayName = getDayName(scheduleItem.day_id);
    if (!acc[dayName]) {
      acc[dayName] = [];
    }
    acc[dayName].push(scheduleItem);
    return acc;
  }, {});

  // Порядок дней недели
  const daysOrder = [
    "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"
  ];

  // Сортируем группы расписания по порядку дней
  const sortedSchedule = daysOrder.filter(day => groupedSchedule[day]);

  return (
    <motion.section
      className="min-h-screen bg-zinc-900 text-gray-400 p-8 pt-32"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Заголовок */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-6xl font-bold text-orange-500 mb-4">Расписание работы</h1>
        <p className="text-lg text-gray-300">
          Ознакомьтесь с расписанием работы наших тренеров. Мы предлагаем разнообразные занятия на каждый день недели!
        </p>
      </div>

      {/* Таблица с расписанием */}
      <motion.div
        className="overflow-x-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="bg-zinc-800 text-gray-300 text-lg uppercase">
            <tr>
              <th className="px-6 py-3">День</th>
              <th className="px-6 py-3">Время</th>
              <th className="px-6 py-3">Тренер</th>
            </tr>
          </thead>
          <tbody>
            {sortedSchedule.map((dayName) => (
              <React.Fragment key={dayName}>
                {/* День недели (только один раз) */}
                <motion.tr
                  className="bg-zinc-700 text-gray-300 font-bold"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <td className="px-6 py-4" colSpan={3}>
                    {dayName}
                  </td>
                </motion.tr>
                {/* Смены для дня */}
                {groupedSchedule[dayName].map((scheduleItem, index) => (
                  <motion.tr
                    key={scheduleItem.id}
                    className="border-b border-zinc-800 text-white hover:bg-orange-500 duration-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4">{scheduleItem.shift_time}</td>
                    <td className="px-6 py-4">{scheduleItem.trainer_name}</td>
                  </motion.tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.section>
  );
};

export default Schedule;