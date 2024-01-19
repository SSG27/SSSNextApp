"use client"
import { useState } from "react";
import MovieList from "./MovieList"
import SearchForm from "./SearchForm"
import axios from 'axios'

type SearchInputs = {
    movietitle:string,
    moviecountry:string
}

const MovieSearch: React.FC = () => {
    const [inputs, setInputs] = useState<SearchInputs>({movietitle:"", moviecountry:""});
    const [responseData, setResponseData] = useState(null);
    const [myError, setError] = useState<string | null>(null);
  
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    // function to init preventDefault
    const handleSubmit = async (event:React.FormEvent) => {
        event.preventDefault();
        // add validation to ensure inputs are not empty
        // api
        const options = {
            method: 'GET',
            url: 'https://streaming-availability.p.rapidapi.com/search/title',
            params: {
                title: inputs.movietitle,
                country: inputs.moviecountry,
                show_type: 'all',
                output_language: 'en'
            },
            headers: {
                'X-RapidAPI-Key': '40ca44c84bmsh145b9b00a4acff0p1bac6cjsne48e70272caf',
                'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
            }
        };
        try {
            const response = await axios.request(options);
            setResponseData(response.data);
            setError(null);
        } catch (myError) {
            console.error(myError);
            alert("Error: Bad input \nPlease enter a valid movie title and counrty code");
            setError("An error occured");
        }
    }

    return (
        <div>
            <SearchForm {...{ handleSubmit, handleChange, inputs }} />
            { responseData && <MovieList responseData={responseData} /> }
        </div>
        
    );
};

export default MovieSearch;