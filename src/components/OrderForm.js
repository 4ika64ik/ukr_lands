import React, { useState, useEffect } from 'react';
import tovar from "../img/prod.png"; // Используем WebP формат для оптимизации

const OrderForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [timeLeft, setTimeLeft] = useState(600); // 10 минут в секундах
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Order submitted:', result);
        setMessage('Заявка успешно отправлена!');
        setName('');
        setPhone('');
      } else {
        setMessage('Ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.');
        console.error('Failed to submit order');
      }
    } catch (error) {
      setMessage('Ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.');
      console.error('Error:', error);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Официальная заявка</h2>
      <img src={tovar} alt="Instaflex" loading="lazy" width="500" height="500" className="mx-auto mb-4" />
      <p className="text-center">№ 982 из 1000 на дату 30 июня 2024 года</p>
      <p className="text-center mb-4">для получения Instaflex по бесплатной акции</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Ваше имя</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Ваш контактный телефон</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+51 632 40 68 40"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded">
          ОСТАВИТЬ ЗАЯВКУ
        </button>
      </form>
      {message && <p className="text-center mt-4 text-red-500">{message}</p>}
      <p className="text-center mt-4">Прием заявок заканчивается через {formatTime(timeLeft)}</p>
      <p className="text-xs text-center mt-2">
        * Ваши персональные данные отправляются напрямую производителю. Только он имеет доступ к ним.
      </p>
    </div>
  );
};

export default OrderForm;
