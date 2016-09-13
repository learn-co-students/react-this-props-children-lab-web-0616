# React this.props.children Lab

## Overview

In this lab, you'll use `this.props.children` to build reusable components and use `React.Children` utilities

## The party planner
![Organizing a party](https://media.giphy.com/media/l2JdSrBGOtj0UpLOM/giphy.gif)

Let's throw a party! The first thing we'll need is an invitation we can send to people, with a customized message:

1. In the `components/Invitation.js` file, create an `Invitation` React component.
2. This component renders out a `h1` with the text `'You have been invited!'`.
2. After this `h1`, you render out any children that are passed into the `Invitation` component. This allows us to
customize the message.

A good party also has a theme and decorations that match. Let's create a component that takes its children and adds an
additional prop to them. This way we can pass in the theme to our decorations by wrapping them in this component.

1. In the `components/ThemedDecorations.js` file, create a `ThemedDecorations` React component.
2. This component renders out all of its children, while adding a `className` prop to every child.


## Resources
- [React.Children](https://facebook.github.io/react/docs/top-level-api.html#react.children)
- [Children prop types](https://facebook.github.io/react/tips/children-props-type.html)
