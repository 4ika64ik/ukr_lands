import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Article from './components/Article';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto p-4">
        <Profile />
        <Article />
      </div>
    </div>
  );
}

export default App;
