const React = require('react');
const { shallow } = require('enzyme');

const Invitation = require('../components/Invitation');
const ThemedDecorations = require('../components/ThemedDecorations');

const INVITATION_CONTENT = <p>Come to this awesome party!</p>;

describe('<Invitation />', function () {
  const wrapper = shallow(
    <Invitation>
      {INVITATION_CONTENT}
    </Invitation>
  );

  it('should render an invitation title', function () {
    const title = wrapper.find('h1');
    expect(title.length).toEqual(1, 'The component does not have a `h1` element');
    expect(title.text()).toEqual("You've been invited!", 'The component does not have the right title content');
  });

  it('should render the passed children', function () {
    expect(wrapper.contains(INVITATION_CONTENT)).toBeTruthy();
  });
});

describe('<ThemedDecorations />', function () {
  const wrapper = shallow(
    <ThemedDecorations theme="heaven">
      <p>A decoration</p>
      <p>Some other decoration</p>
      <p>A last decoration</p>
    </ThemedDecorations>
  );

  it('should render the passed children', function () {
    expect(wrapper.children().length).toEqual(3);
  });

  it('should pass down the `theme` prop as a `className` prop to its children', function () {
    expect(
      wrapper
        .children()
        .map(element => element.prop('className'))
        .every(prop => prop === 'heaven')
    ).toBeTruthy();
  });
});
