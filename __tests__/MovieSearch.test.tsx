import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import MovieSearch from '@/components/MovieSearch';

jest.mock('axios', () => ({
  request: jest.fn(),
}));

describe('MovieSearch component', () => {
  it('displays error message on API request failure', async () => {
    axios.request.mockRejectedValueOnce(new Error('API request failed'));

    // Mock window.alert
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<MovieSearch />);

    const titleInput = screen.getByTestId("movie-title-input");
    userEvent.type(titleInput, 'dunkirk');

    const ccInput = screen.getByTestId("country-code-input");
    userEvent.type(ccInput, 'gb');

    const buttonClicked = screen.getByTestId("submit-button");
    userEvent.click(buttonClicked);

    // Wait for the alert to be called
    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith("Error: Bad input \nPlease enter a valid movie title and counrty code");
    });

    // Restore the original window.alert
    mockAlert.mockRestore();
  });
});
