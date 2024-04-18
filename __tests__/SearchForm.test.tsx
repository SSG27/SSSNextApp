import React from 'react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import SearchForm from '@/components/SearchForm';

it('updates state on user input', () => {
  // Create a snapshot for the initial rendering
  const component = renderer.create(
    <SearchForm 
      handleSubmit={() => {}} 
      handleChange={() => {}} 
      inputs={{ movietitle: '', moviecountry: '' }} 
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // Manually trigger user input for movie title
  renderer.act(() => {
    userEvent.type(tree.children[1].children[1], 'dunkirk'); // Assuming the movie title input is at index 1
  });

  // Re-rendering after user input
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // Manually trigger user input for country code
  renderer.act(() => {
    userEvent.type(tree.children[3].children[1], 'gb'); // Assuming the country code input is at index 3
    userEvent.click(tree.children[5]);
  });

  // Re-rendering after user input
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
