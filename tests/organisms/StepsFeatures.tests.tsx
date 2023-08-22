import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StepsFeatures from '../../src/organisms/StepsFeatures';

describe('<StepsFeatures />', () => {
  test('it should render', () => {
    const { getByText } = render(
      <StepsFeatures
        steps={['Step 1', 'Step 2', 'Step 3']}
        hideDescription={true}
        step={1}
      >
        {[{
          title: 'Step 1',
          children: <p>Step 1 Content</p>,
        },
        {
          title: 'Step 2',
          children: <p>Step 2 Content</p>,
        },
        {
          title: 'Step 3',
          children: <p>Step 3 Content</p>,
        }]}
      </StepsFeatures>
    );

    expect(getByText('Step 1')).toBeInTheDocument();
    expect(getByText('Step 2')).toBeInTheDocument();
    expect(getByText('Step 3')).toBeInTheDocument();
    expect(getByText('Step 2 Content')).toBeInTheDocument();
  });
});