import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../../../src/atoms/forms/Input';

describe('Input component', () => {
  test('renders input element', () => {
    const { getByTestId } = render(<Input />);
    expect(getByTestId('input')).toBeInTheDocument();
  });

  test('input value changes when typing', () => {
    const { getByTestId } = render(<Input />);
    const inputElement = getByTestId('input');

    fireEvent.change(inputElement, { target: { value: 'test value' } });
    expect(inputElement.value).toBe('test value');
  });
});