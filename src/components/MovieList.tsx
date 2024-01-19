// components/MovieList.tsx
import React from 'react';
import '@/styles/Table.css';

interface MovieListProps {
  responseData: {
    result: {
      type: string;
      title: string;
      streamingInfo: {
        gb?: {
          service: string;
          streamingType: string;
          quality: string;
          audios: { language: string }[];
          subtitles: { locale: { language: string } }[];
          price?: { formatted: string };
        }[];
      };
    }[];
  };
}

const MovieList: React.FC<MovieListProps> = ({ responseData }) => {
  return (
    <div>
      <h2>Available Media:</h2>
      <table className="container">
        <thead>
          <tr>
            <th><h1>Type</h1></th>
            <th><h1>Title</h1></th>
            <th><h1>Service</h1></th>
            <th><h1>Streaming</h1></th>
            <th><h1>Quality</h1></th>
            <th><h1>Audio languages</h1></th>
            <th><h1>Subtitles</h1></th>
            <th><h1>Price</h1></th>
          </tr>
        </thead>
        <tbody>
          {responseData.result.map((item, index) => (
            <React.Fragment key={index}>
              {item.streamingInfo.gb ? (
                item.streamingInfo.gb.map((stream, streamIndex) => (
                  <tr key={streamIndex}>
                    <td>{item.type}</td>
                    <td>{item.title}</td>
                    <td>{stream.service}</td>
                    <td>{stream.streamingType}</td>
                    <td>{stream.quality}</td>
                    <td>{stream.audios.map((audio) => audio.language).join(', ')}</td>
                    <td>{stream.subtitles.map((subtitle) => subtitle.locale.language).join(', ')}</td>
                    <td>{stream.price ? stream.price.formatted : 'N/A'}</td>
                  </tr>
                ))
              ) : (
                <tr key={index}>
                  <td>{item.type}</td>
                  <td>{item.title}</td>
                  <td colSpan={6}>No streaming info available</td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
