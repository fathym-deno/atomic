import React from 'react';

interface StepsFeaturesProps {
  children: React.ReactNode;
  hideDescription?: boolean;
  step: number; // Updated prop name from 'steps' to 'step'
}

export const StepsFeatures: React.FC<StepsFeaturesProps> = ({ children, hideDescription, step }) => {
  return (
    <div className='steps-features'>
      {React.Children.map(children, (child, index) => (
        <div className={`step-feature ${index === step ? 'active' : ''}`}> // Updated prop name from 'steps' to 'step'
          {child}
          {!hideDescription && <p className='description'>{child.props.children}</p>}
        </div>
      ))}
    </div>
  );
};