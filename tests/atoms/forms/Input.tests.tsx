import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../../../src/atoms/forms/Input';

import { afterEach, assert, assertEquals, beforeEach, describe, it, render, } from "../../test.deps.ts";
import { Input } from "../../../src/atoms/forms/Input.tsx";

describe('Input Tests', () => {
  it('Renders input element', () => {
    const { getByTestId } = render(<Input />);
    assert(getByTestId('input'));
  });

  it('Input value changes when typing', () => {
    const { getByTestId } = render(<Input />);
    const inputElement = getByTestId('input');

    inputElement.value = 'test value';
    inputElement.dispatchEvent(new Event('input'));
    assertEquals(inputElement.value, 'test value');
  });
});

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