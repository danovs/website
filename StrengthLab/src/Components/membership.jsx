import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Membership = () => {
  const navigate = useNavigate(); // Хук для навигации

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
    {
      plan: 'Премиум',
      text: 'Для тех, кто хочет все и больше',
      price: '₽12,000/мес',
      t1: 'Все функции Элита',
      t2: 'Доступ к VIP-зоне',
      t3: 'Персональный тренер на каждый день',
    },
    {
      plan: 'Мастер',
      text: 'Для профессионалов фитнеса',
      price: '₽15,000/мес',
      t1: 'Все функции Премиум',
      t2: 'Консультации с диетологом',
      t3: 'Личное пространство для тренировок',
    },
    {
      plan: 'Супер Элита',
      text: 'Для самых требовательных',
      price: '₽20,000/мес',
      t1: 'Все функции Мастер',
      t2: 'Доступ к закрытым тренировочным зонам',
      t3: 'Бесплатные курсы по фитнесу и питанию',
    },
  ];

  // Обработчик нажатия на кнопку
  const handlePlanClick = () => {
    navigate(`/subscription/`); // Переход по маршруту с параметром
  };

  return (
    <section id="pricing" className="min-h-screen p-8 bg-zinc-900 text-gray-400 flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-orange-500 text-center">Тарифные планы</h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
          Если вам нужна дополнительная информация или вы просто хотите отправить нам сообщение, не стесняйтесь обращаться к нам. Мы будем рады услышать ваше мнение.
        </p>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3 justify-center">
          {pricingJson.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="border p-6 rounded-lg shadow-md text-start bg-zinc-800 text-white"
            >
              <h3 className="text-2xl font-semibold text-center">{item.plan}</h3>
              <p className="text-center text-gray-400 mb-4">{item.text}</p>
              <h1 className="text-orange-500 text-3xl font-bold mt-4 mb-4 text-center">{item.price}</h1>
              <div className="flex flex-col gap-1 mb-4">
                <p>{item.t1}</p>
                <p>{item.t2}</p>
                <p>{item.t3}</p>
              </div>
              <button
                className="bg-gray-300 text-black font-semibold px-3 py-2 rounded-md w-full mt-4 hover:bg-orange-400 transition duration-300"
                onClick={() => handlePlanClick(item.plan)} // Передаем план
              >
                Выбрать план
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;