// pages/index.tsx
import React from 'react';
import Introduction from './Introduction';
import Navigation from '../components/Navigation';
import '@/app/global.css'

const Home: React.FC = () => {
  // Here i need to make the functions handlesubmit, handlechange, inputs, the api and error handling for the api

  return (
    <div>
      <Navigation />
      <Introduction />
      
    </div>
  );
};

export default Home;
