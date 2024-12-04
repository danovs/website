import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Vacancies = () => {
  const [vacancies, setVacancies] = useState([]); // Состояние для хранения вакансий
  const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки данных

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  // Получаем данные о вакансиях с сервера
  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await axios.get("http://localhost:5000/vacancies");
        setVacancies(response.data); // Сохраняем вакансии в состоянии
        setLoading(false); // Данные получены
      } catch (error) {
        console.error("Ошибка при загрузке вакансий:", error);
        setLoading(false);
      }
    };

    fetchVacancies();
  }, []);

  if (loading) {
    return <p>Загрузка...</p>; // Пока данные загружаются
  }

  return (
    <motion.section
      className="min-h-screen bg-zinc-900 text-gray-400 p-8 pt-32"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Заголовок и описание */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-6xl font-bold text-orange-500 mb-4">Вакансии</h1>
        <p className="text-lg text-gray-300">
          Ознакомьтесь с доступными вакансиями в нашей компании и присоединяйтесь к нашей команде!
        </p>
      </div>

      {/* Таблица с вакансиями */}
      <motion.div
        className="overflow-x-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="bg-zinc-800 text-gray-300 text-lg uppercase">
            <tr>
              <th className="px-6 py-3">Название вакансии</th>
              <th className="px-6 py-3">Статус</th>
              <th className="px-6 py-3">Зарплата</th>
            </tr>
          </thead>
          <tbody>
            {vacancies.map((vacancy, index) => (
              <motion.tr
                key={vacancy.id} // Используем id, так как это уникальный ключ
                className={`border-b border-zinc-800 ${
                  vacancy.status === "Открыта" ? "text-white" : "text-gray-500"
                } hover:bg-orange-500 duration-100`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <td className="px-6 py-4">{vacancy.title}</td>
                <td className="px-6 py-4">{vacancy.status}</td>
                <td className="px-6 py-4">
                  {vacancy.salary} ₽ {/* Добавляем символ рубля */}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.section>
  );
};

export default Vacancies;