import React from 'react';
import ebalo from "../img/komar.jpg"
const Profile = () => {
  return (
    <div className="flex items-center py-4">
      <img src={ebalo} alt="Profile" className="rounded-full w-24 h-24 mr-4" />
      <div>
        <h2 className="text-xl font-bold">Евгений Олегович Комаровский</h2>
        <p className="text-gray-600">Врач высшей категории, кандидат медицинских наук, писатель и телеведущий</p>
      </div>
    </div>
  );
};

export default Profile;
