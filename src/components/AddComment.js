import React, { useState } from 'react';

const AddComment = ({ onAddComment }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [photo, setPhoto] = useState('');
  const [preview, setPreview] = useState('');

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toISOString();
    onAddComment({ name, comment, photo, date });
    setName('');
    setComment('');
    setPhoto('');
    setPreview('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg shadow-md">
      <div>
        <label className="block text-gray-700">Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Comentario:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Foto:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="w-full p-2 border rounded"
        />
        {preview && <img src={preview} alt="Preview" className="mt-2 w-16 h-16 rounded-full" />}
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Añadir Comentario
      </button>
    </form>
  );
};

export default AddComment;
