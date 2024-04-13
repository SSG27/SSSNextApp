import React from 'react';
import { render } from '@testing-library/react';
import MovieSearch from '@/components/MovieSearch';

test('renders MovieSearch component', () => {
  const { container } = render(<MovieSearch />);
  expect(container.firstChild).toMatchSnapshot();
});
