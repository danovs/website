import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Subscription = () => {
  const { planName } = useParams(); // Получаем название выбранного плана из URL
  const [formData, setFormData] = useState({ name: '', email: '', planId: '' });
  const [status, setStatus] = useState('');
  const [subscriptionPlans, setSubscriptionPlans] = useState([]); // Начальное состояние — пустой массив

  // Загружаем доступные планы подписки с сервера при монтировании компонента
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get('http://localhost:5000/plans'); // Убедитесь, что путь правильный
        if (Array.isArray(response.data)) {
          setSubscriptionPlans(response.data); // Сохраняем только массив
        } else {
          console.error('Ошибка: данные не в формате массива');
          setStatus('Ошибка при загрузке планов подписки');
        }
      } catch (error) {
        console.error('Ошибка при загрузке планов подписки:', error);
        setStatus('Ошибка при загрузке планов подписки');
      }
    };

    fetchPlans();
  }, []);

  // Функция для обновления данных формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Функция для отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Отправляем данные формы на сервер для оформления подписки
      const response = await axios.post('http://localhost:5000/subscribe', {
        planId: formData.planId,
        name: formData.name,
        email: formData.email,
      });
      setStatus('Подписка успешно оформлена!');
    } catch (error) {
      setStatus('Ошибка при оформлении подписки');
      console.error('Ошибка при отправке данных на сервер:', error);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-200 flex flex-col justify-center items-center py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Оформление подписки на план: {planName}</h2>
      <form onSubmit={handleSubmit} className="max-w-xl w-full space-y-6 bg-zinc-800 p-6 rounded-lg shadow-lg">
        <div>
          <label className="block text-gray-400 mb-2">ФИО</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-md bg-zinc-700 text-white focus:ring-2 focus:ring-orange-500"
            placeholder="Введите ваше ФИО"
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-md bg-zinc-700 text-white focus:ring-2 focus:ring-orange-500"
            placeholder="Введите ваш email"
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-2">Выберите план подписки</label>
          <select
            name="planId"
            value={formData.planId}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-md bg-zinc-700 text-white focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Выберите план</option>
            {Array.isArray(subscriptionPlans) && subscriptionPlans.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.name} - {plan.price}₽ / {plan.benefits}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 transition"
        >
          Оформить подписку
        </button>
      </form>
      {status && <p className="mt-4 text-center text-lg">{status}</p>}
    </div>
  );
};

export default Subscription;