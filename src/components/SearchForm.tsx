import React from 'react';
import '@/styles/SearchForm.css'

interface SearchFormProps {
  handleSubmit: (event: React.FormEvent) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputs: {
    movietitle: string;
    moviecountry: string;
  };
}

const SearchForm: React.FC<SearchFormProps> = ({ handleSubmit, handleChange, inputs }) => {
  return (
    <form onSubmit={handleSubmit}>
      <br></br>
      <label className='form'>Enter the movie title: 
        <input type="text" 
        name = "movietitle"
        value={inputs.movietitle || ""} 
        onChange={handleChange}
        data-testid="movie-title-input"
        />
      </label>
      <br></br>
      <label>Enter the two letter country code (e.g gb): 
        <input type="text"
        name = "moviecountry"
        value={inputs.moviecountry || ""} 
        onChange={handleChange}
        data-testid="country-code-input"
        />
      </label>
      <br></br>
      {/* creates submit button */}
      <input type="submit" 
      className='button' 
      data-testid="submit-button"
      />
    </form>
  );
};

export default SearchForm;
