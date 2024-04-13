import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MovieSearch from '@/components/MovieSearch';

jest.mock('axios');

describe('MovieSearch component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders MovieSearch component', () => {
    const { container } = render(<MovieSearch />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('fetches movie data when form is submitted', async () => {
    const mockedData = {
      result: [
        {
          type: 'movie',
          title: 'Example Movie',
          streamingInfo: {
            gb: [
              {
                service: 'Netflix',
                streamingType: 'streaming',
                quality: 'HD',
                audios: [{ language: 'English' }],
                subtitles: [{ locale: { language: 'English' } }],
                price: { formatted: '$9.99' },
              },
            ],
          },
        },
      ],
    };

    (axios.request as jest.Mock).mockResolvedValueOnce({ data: mockedData });

    const { getByLabelText, getByText } = render(<MovieSearch />);
    const titleInput = getByLabelText('Enter the movie title:');
    const countryInput = getByLabelText('Enter the two letter country code (e.g gb):');
    const submitButton = getByText('Submit');

    fireEvent.change(titleInput, { target: { value: 'Example Movie' } });
    fireEvent.change(countryInput, { target: { value: 'us' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(axios.request).toHaveBeenCalledWith(expect.objectContaining({ params: { title: 'Example Movie', country: 'us' } }));
      expect(getByText('Example Movie')).toBeInTheDocument();
      expect(getByText('Netflix')).toBeInTheDocument();
      expect(getByText('HD')).toBeInTheDocument();
    });
  });

  it('displays error message when API request fails', async () => {
    (axios.request as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch data'));

    const { getByLabelText, getByText } = render(<MovieSearch />);
    const titleInput = getByLabelText('Enter the movie title:');
    const countryInput = getByLabelText('Enter the two letter country code (e.g gb):');
    const submitButton = getByText('Submit');

    fireEvent.change(titleInput, { target: { value: 'Example Movie' } });
    fireEvent.change(countryInput, { target: { value: 'us' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText('An error occurred')).toBeInTheDocument();
    });
  });
});
