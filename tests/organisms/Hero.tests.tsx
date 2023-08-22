import { h } from 'preact';
import { shallow } from 'enzyme';
import { Hero, HeroProps } from '../../src/organisms/Hero';

describe('Hero', () => {
  const defaultProps: HeroProps = {
    callToAction: 'Call to action',
    heroStyle: 1,
  };

  it('renders with default props', () => {
    const wrapper = shallow(<Hero {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with children', () => {
    const wrapper = shallow(
      <Hero {...defaultProps}>
        <button>Button 1</button>
        <button>Button 2</button>
      </Hero>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with custom class', () => {
    const wrapper = shallow(<Hero {...defaultProps} class="custom-class" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with custom style', () => {
    const wrapper = shallow(<Hero {...defaultProps} style={{ color: 'red' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});