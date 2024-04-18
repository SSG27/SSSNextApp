import React from 'react';
import userEvent from '@testing-library/user-event';
import SearchForm from '@/components/SearchForm';
import { screen, render } from '@testing-library/react';

it('updates state on user input', () => {
    // Create a snapshot for the initial rendering
    render(
        <SearchForm
            handleSubmit={() => { }}
            handleChange={() => { }}
            inputs={{ movietitle: '', moviecountry: '' }}
        />
    );

    // Manually trigger user input for movie title

    const titleInput = screen.getByTestId("movie-title-input")
    userEvent.type(titleInput, 'dunkirk');

    // Manually trigger user input for country code

    const ccInput = screen.getByTestId("country-code-input")
    const buttonClicked = screen.getByTestId("submit-button")
    userEvent.type(ccInput, 'gb');
    userEvent.click(buttonClicked);

});
