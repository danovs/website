import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Requests = () => {
  const [clients, setClients] = useState([]); // Состояние для хранения данных о клиентах
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

  // Получаем данные о клиентах с сервера
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:5000/clients");
        setClients(response.data); // Сохраняем данные о клиентах в состоянии
        setLoading(false); // Данные получены
      } catch (error) {
        console.error("Ошибка при загрузке данных о клиентах:", error);
        setLoading(false);
      }
    };

    fetchClients();
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
        <h1 className="text-6xl font-bold text-orange-500 mb-4">Обращения клиентов</h1>
      </div>

      {/* Таблица с данными клиентов и запросами */}
      <motion.div
        className="overflow-x-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="bg-zinc-800 text-gray-300 text-lg uppercase">
            <tr>
              <th className="px-6 py-3">ФИО клиента</th>
              <th className="px-6 py-3">Почта</th>
              <th className="px-6 py-3">Обращение</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <motion.tr
                key={index} // Используем индекс в качестве ключа, если у клиента нет уникального id
                className="border-b border-zinc-800 hover:bg-orange-500 duration-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <td className="px-6 py-4">{client.name}</td>
                <td className="px-6 py-4">{client.email}</td>
                <td className="px-6 py-4">{client.RequestDescription}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.section>
  );
};

export default Requests;
