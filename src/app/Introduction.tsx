import React from 'react';
import Header from '../components/Header';
import '@/styles/introduction.css'

const Introduction: React.FC = () => {
  return (
    <div>
        <Header />
        <div>
            <h3>Welcome to My Movie Search App</h3>
            <p>This is an introduction to explain what your app does.</p>
        </div>
    </div>
  );
};

export default Introduction;
