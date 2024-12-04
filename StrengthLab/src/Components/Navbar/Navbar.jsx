import React, { useState } from 'react';
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-router-dom'; // Импортируем Link
import Logo from '../../assets/Logo.png';
import ResponsiveMenu from './ResponsiveMenu';

// eslint-disable-next-line react-refresh/only-export-components
export const NavLinks = [
  {
    id: 1,
    name: "Наш клуб",
    link: "/", // Обновляем ссылку для маршрута
  },
  {
    id: 2,
    name: "Членство",
    link: "/membership", // Для страницы "Членство"
  },
  {
    id: 3,
    name: "Расписание",
    link: "/schedule", // Для страницы "Расписание"
  },
  {
    id: 4,
    name: "Наша команда",
    link: "/team", // Для страницы "Наша команда"
  },
  {
    id: 5,
    name: "Вакансии",
    link: "/vacancies", // Для страницы "Вакансии"
  },
  {
    id: 6,
    name: "Контакты",
    link: "/contacts", // Для страницы "Контакты"
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='fixed z-10 shadow-md w-full bg-zinc-900 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center justify-between'>
          {/* Logo Section */}
          <div className='sm:flex items-center gap-3 font-semibold text-gray-500 group'>
            <Link to="/"> {/* Добавляем ссылку на главную страницу */}
              <img src={Logo} alt="Logotype" className='w-20 md:w-24' />
            </Link>
          </div>

          {/* Navigation Links - Centered */}
          <nav className='hidden md:flex md:items-center'>
            <ul className='flex items-center gap-6 md:gap-8'>
              {NavLinks.map(({ id, name, link }) => (
                <li key={id} className='py-4'>
                  <Link
                    to={link} // Используем Link для маршрутизации
                    className='inline-block text-sm md:text-lg font-semibold text-white hover:text-orange-500'
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right-aligned address */}
          <div className='hidden md:flex items-center text-white text-sm md:text-md font-semibold'>
            <span className='hidden lg:block'>Москва, Вятская ул., 27</span>
          </div>

          {/* Mobile view */}
          <div className='flex items-center gap-4 md:hidden py-4'>
            {/* Hamburger */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className='cursor-pointer transition-all text-white'
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className='cursor-pointer transition-all text-white'
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      {/* Responsive Menu for mobile */}
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;