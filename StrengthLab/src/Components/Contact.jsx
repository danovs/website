import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Обработчик изменений в форме
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.text();
      setResponseMessage(result);

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      setResponseMessage('Произошла ошибка при отправке данных.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className='bg-zinc-900 text-white'>
      <div className='max-w-7xl mx-auto items-center flex flex-col py-8 px-4 md:px-8'>
        {/* Заголовок */}
        <h2 className='text-3xl md:text-4xl font-bold text-orange-500 mb-4 text-center'>
          Свяжитесь с нами
        </h2>
        <p className='text-gray-400 text-center max-w-xl mb-12'>
          У вас есть вопросы или предложения? Напишите нам, мы будем рады помочь!
        </p>
        <div className='grid md:grid-flow-col gap-10'>
          {/* Форма связи */}
          <div className='bg-zinc-800 shadow-lg rounded-lg p-8 md:p-12 max-w-xl md:w-[400px]'>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-300'>
                  Имя
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='mt-1 p-3 block w-full border border-orange-400 bg-zinc-900 rounded-md shadow-sm sm:text-sm focus:border-primary focus:outline-none'
                  placeholder='Иван Иванов'
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-300'>
                  Электронная почта
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='mt-1 p-3 block w-full border border-orange-400 bg-zinc-900 rounded-md shadow-sm sm:text-sm focus:border-primary focus:outline-none'
                  placeholder='example@mail.ru'
                />
              </div>
              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-300'>
                  Сообщение
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='4'
                  className='mt-1 p-3 block w-full border border-orange-400 bg-zinc-900 rounded-md shadow-sm sm:text-sm focus:border-primary focus:outline-none'
                  placeholder='Ваше сообщение...'
                />
              </div>
              <button
                type='submit'
                disabled={isSubmitting}
                className='bg-orange-500 text-white py-2 px-4 font-semibold rounded-md shadow-md hover:bg-orange-600 transition duration-300'
              >
                {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
              </button>
            </form>
            {responseMessage && (
              <p className='text-center mt-4 text-gray-300'>{responseMessage}</p>
            )}
          </div>

          {/* Локация и карта */}
          <div className='bg-zinc-800 shadow-lg rounded-lg p-8 md:p-12 max-w-3xl w-full flex flex-col items-center md:flex-row gap-7 space-y-6 md:space-y-0 md:space-x-8'>
            <div className='flex-1'>
              <h3 className='text-2xl font-semibold text-primary mb-4'>Наше расположение</h3>
              <div className='text-gray-300 flex gap-2 items-center mb-4'>
                <MapPin className='text-orange-500' />
                <a href='https://yandex.ru/maps/org/megapolis/1095330103/?ll=37.580287%2C55.796972&mode=search&sctx=ZAAAAAgBEAAaKAoSCYVDb%2FHwuEJAET%2BrzJTW8UtAEhIJ8bkT7L%2FO1j8RAG%2BBBMWPvT8iBgABAgMEBSgKOABAhlRIAWoCcnWdAc3MzD2gAQCoAQC9AXBCMGDCAQW30qWKBIICX1N0cmVuZ3RoTEFCLiDQotGA0LXQvdCw0LbRkdGA0L3Ri9C5INC30LDQuy4g0JLRj9GC0YHQutCw0Y8g0YPQuy4sIDI3LCDRgdGC0YAuIDEyLCDQnNC%2B0YHQutCy0LAuigIAkgIDMjEzmgIMZGVza3RvcC1tYXBz&sll=37.580287%2C55.796972&sspn=0.022273%2C0.007234&text=StrengthLAB.%20%D0%A2%D1%80%D0%B5%D0%BD%D0%B0%D0%B6%D1%91%D1%80%D0%BD%D1%8B%D0%B9%20%D0%B7%D0%B0%D0%BB.%20%D0%92%D1%8F%D1%82%D1%81%D0%BA%D0%B0%D1%8F%20%D1%83%D0%BB.%2C%2027%2C%20%D1%81%D1%82%D1%80.%2012%2C%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0.&z=17'>
                  StrengthLAB. Тренажёрный зал.<br />
                  Вятская ул., 27, стр. 12, Москва.
                </a>
              </div>
              <div className='flex gap-2 items-center mb-4 text-gray-300'>
                <Phone className='text-orange-500' />
                <p>Телефон: +7 (979) 456-29-02</p>
              </div>
              <div className='flex gap-2 items-center text-gray-300'>
                <Mail className='text-orange-500' />
                <p>Email: strengthlab@fitbodygym.ru</p>
              </div>
            </div>
            <div>
              {/* Карта Яндекса */}
              <div className='w-full h-96 bg-gray-700 rounded-lg'>
                <iframe
                  title='Локация фитнес-центра'
                  className='w-full h-full rounded-lg'
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Aac582ad4c77dcab444a5fecc1c09a15488a8b8cde99a97e475f1d3a757109f58&amp;source=constructor"
                  width="631" height="438"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;