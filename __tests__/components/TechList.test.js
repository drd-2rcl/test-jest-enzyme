import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector } from 'react-redux';

import TechList from '~/components/TechList';

jest.mock('react-redux');

describe('TechList component', () => {
  it('should render tech list', () => {
    useSelector.mockImplementation(cb => cb({
      techs: ['Nodejs', 'Reactjs']
    }));

    const { getByTestId, getByText } = render(<TechList />);

    expect(getByTestId('tech-list')).toContainElement(getByText('Nodejs'));
    expect(getByTestId('tech-list')).toContainElement(getByText('Reactjs'));
  });
});