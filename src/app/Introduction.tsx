import React from 'react';
import Header from '../components/Header';
import '@/styles/introduction.css'

const Introduction: React.FC = () => {
  return (
    <div className='intro'>
        <Header />
        <div>
            <h3>Welcome to Streaming Search Service. <br></br><br></br>
            This is a Next Tsx app which uses API calls to allow you to search for a streaming service for any movie or TV show 
            </h3>
        </div>
    </div>
  );
};

export default Introduction;
