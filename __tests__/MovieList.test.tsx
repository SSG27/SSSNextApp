import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieList from '@/components/MovieList';

describe('MovieList component', () => {
  it('renders movie list with correct data', () => {
    const responseData = {
      result: [
        {
          type: 'movie',
          title: 'Dunkirk',
          streamingInfo: {
            gb: [
              {
                service: 'Netflix',
                streamingType: 'stream',
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

    render(<MovieList responseData={responseData} />);

    // Check if the movie title is rendered
    expect(screen.getByText('Dunkirk')).toBeInTheDocument();

    // Check if the streaming service is rendered
    expect(screen.getByText('Netflix')).toBeInTheDocument();

    // Check if the streaming type is rendered
    expect(screen.getByText('stream')).toBeInTheDocument();

    // Check if the quality is rendered
    expect(screen.getByText('HD')).toBeInTheDocument();

    // Check if the audio language is rendered
    expect(screen.getByText('English')).toBeInTheDocument();

    // Check if the subtitles language is rendered
    expect(screen.getByText('English')).toBeInTheDocument();

    // Check if the price is rendered
    expect(screen.getByText('$9.99')).toBeInTheDocument();
  });

  it('renders fallback message when streaming info is not available', () => {
    const responseData = {
      result: [
        {
          type: 'movie',
          title: 'Inception',
          streamingInfo: {},
        },
      ],
    };

    render(<MovieList responseData={responseData} />);

    // Check if the movie title is rendered
    expect(screen.getByText('Inception')).toBeInTheDocument();

    // Check if the fallback message is rendered when streaming info is not available
    expect(screen.getByText('No streaming info available')).toBeInTheDocument();
  });
});
