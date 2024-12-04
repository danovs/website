import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-zinc-900 text-white py-12'>
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        {/* Верхняя часть футера */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-8'>
          {/* Логотип и описание */}
          <div className='flex-1'>
            <h2 className='text-3xl font-bold text-primary mb-4'>Strength<span className="text-orange-500">LAB</span></h2>
            <p className='text-gray-400'>
              Улучшайте себя каждый день! Присоединяйтесь к нашему фитнес-сообществу и достигайте своих целей вместе с нами.
            </p>
          </div>

          {/* Социальные сети */}
          <div className='flex-1'>
            <h3 className='text-xl font-semibold text-primary mb-4 text-center'>Мы в соцсетях</h3>
            <div className='flex gap-6 justify-center'>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-orange-500 hover:text-primary transition'>
                <Facebook size={24} />
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-orange-500 hover:text-primary transition'>
                <Twitter size={24} />
              </a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-orange-500 hover:text-primary transition'>
                <Instagram size={24} />
              </a>
              <a href='https://youtube.com' target='_blank' rel='noopener noreferrer' className='text-orange-500 hover:text-primary transition'>
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <div className='mt-8 border-t border-gray-700'></div>

        {/* Нижняя часть футера */}
        <div className='mt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm'>
          <p>&copy; 2024 StrengthLAB. Все права защищены.</p>
          <p>
            Разработано{' '}
            <a
              href='https://vk.com/id672349663'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary transition'
            >
              Ибрагимом Аушевым
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
