/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link из react-router-dom

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? 'left-0' : '-left-full'
      } fixed bottom-0 top-0 z-20 flex h-screen w-[50%] flex-col justify-between bg-zinc-900 text-white px-8 pb-6 pt-16 transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      {/* Заголовок */}
      <div className="text-2xl font-bold text-center mb-8">
        Strength<span className="text-orange-500">LAB</span>
      </div>

      {/* Ссылки */}
      <div className="flex flex-col gap-6">
        {/* Обновленные ссылки с использованием Link для маршрутизации */}
        <Link to="/" className="text-lg font-semibold hover:text-orange-500">
          Наш клуб
        </Link>
        <Link to="/membership" className="text-lg font-semibold hover:text-orange-500">
          Членство
        </Link>
        <Link to="/schedule" className="text-lg font-semibold hover:text-orange-500">
          Расписание
        </Link>
        <Link to="/team" className="text-lg font-semibold hover:text-orange-500">
          Наша команда
        </Link>
        <Link to="/vacancies" className="text-lg font-semibold hover:text-orange-500">
          Вакансии
        </Link>
        <Link to="/contacts" className="text-lg font-semibold hover:text-orange-500">
          Контакты
        </Link>
      </div>

      {/* Нижний текст */}
      <div className="mt-auto">
        <p className="text-sm text-gray-500">© 2024 Ибрагим Аушев</p>
      </div>
    </div>
  );
};

export default ResponsiveMenu;