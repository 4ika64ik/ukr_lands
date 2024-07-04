import React, { useState, useEffect } from 'react';
import tovar from "../img/zxn_pe.png"; // Используем WebP формат для оптимизации

const OrderForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [timeLeft, setTimeLeft] = useState(600); // 10 минут в секундах

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', { name, phone });
    setName('');
    setPhone('');
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Formulario de solicitud oficial</h2>
      <img src={tovar} alt="Zeaxan" loading="lazy" width="500" height="500" className="mx-auto mb-4" />
      <p className="text-center">No. 982 de 1000 a fecha de 30 junio 2024</p>
      <p className="text-center mb-4">para la obtención de Zeaxan a precio preferencial de <span className="line-through">298 PEN</span> <span className="text-red-500">149 PEN</span></p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Su nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Su teléfono de contacto</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+51 632 40 68 40"
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded">
          DEJAR SOLICITUD
        </button>
      </form>
      <p className="text-center mt-4">La recepción de solicitudes está a punto de terminar {formatTime(timeLeft)}</p>
      <p className="text-xs text-center mt-2">
        * Sus datos personales se envían directamente al fabricante. Solo él tiene acceso a ellos.
      </p>
    </div>
  );
};

export default OrderForm;
