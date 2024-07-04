import React from 'react';
import ebalo from "../img/ebalo_doca.webp"
const Profile = () => {
  return (
    <div className="flex items-center py-4">
      <img src={ebalo} alt="Profile" className="rounded-full w-24 h-24 mr-4" />
      <div>
        <h2 className="text-xl font-bold">Dr. Pérez-Albela</h2>
        <p className="text-gray-600">Journalist at BBC Culture</p>
      </div>
    </div>
  );
};

export default Profile;
