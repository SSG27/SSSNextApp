import React from 'react';
import Header from '@/components/Header';
import MovieSearch from '@/components/MovieSearch';
import Navigation from '@/components/Navigation';

const Search: React.FC = () => {
  return (
    <div>
      <Navigation />
      <MovieSearch />
    </div>
  );
};

export default Search;
