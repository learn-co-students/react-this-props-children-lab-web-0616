import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Invitation from '../src/components/Invitation';
import ThemedDecorations from '../src/components/ThemedDecorations';

const INVITATION_CONTENT = <p>Come to this awesome party!</p>;

describe('<Invitation />', () => {
  const wrapper = shallow(
    <Invitation>
      {INVITATION_CONTENT}
    </Invitation>
  );

  it('should render an invitation title', () => {
    const title = wrapper.find('h1');
    expect(title.length).to.equal(1, 'The component does not have a `h1` element');
    expect(title.text()).to.equal("You've been invited!", 'The component does not have the right title content');
  });

  it('should render the passed children', () => {
    expect(wrapper.contains(INVITATION_CONTENT)).to.be.true;
  });
});

describe('<ThemedDecorations />', () => {
  const wrapper = shallow(
    <ThemedDecorations theme="heaven">
      <p>A decoration</p>
      <p>Some other decoration</p>
      <p>A last decoration</p>
    </ThemedDecorations>
  );

  it('should render the passed children', () => {
    expect(wrapper.children().length).to.equal(3);
  });

  it('should pass down the `theme` prop as a `className` prop to its children', () => {
    expect(
      wrapper
        .children()
        .map(element => element.prop('className'))
        .every(prop => prop === 'heaven')
    ).to.be.true;
  });
});
