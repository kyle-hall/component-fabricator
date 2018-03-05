
# Component Generator for React

This is a handy little CLI I made for myself after I had been doing React for a bit.

__Note:__ This is a **very** opinionated CLI. I use Jest and Enzyme for testing. I created my app using `create-react-app`, which does not support many of the Jest configurations that would otherwise be available. Specifically, setup files attaching enzyme and its adapter to global scope are not supported.

I had tried Angular a couple weeks prior, and I liked the ability to automate the repetitive/error-prone process of creating the same basic component skeleton every time I needed a new component. When I went back to React, I found myself creating that same skeleton for all my components, which was annoying. Being a dev, I automated it.

The result is this component generator. 

To run this CLI, first install it:

``` yarn global add react-component-generator ```

Then, in the directory where you want to create a component run the CLI:

``` react-component-generator create <name-of-component> ```

I will create a component called `MyComponent` for demonstration purposes:

``` react-component-generator create MyComponent ```

This will create two files (for now):

1. MyComponent.spec.js // because testing - TDD, specifically - is very important
2. MyComponent.js

The spec file will contain imports for Jest, Enzyme, and a couple Enzyme-related helpers. 

```js


/**
 * @jest-environment node
*/

import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import MyComponent from './MyComponent';

Enzyme.configure({ adapter: new Adapter() });

```

The component file will contain a bare-bones component:

```js

import React, { Component } from 'react';
import './MyComponent.css';

class MyComponent extends Component {
  render() {
    return (
    );
  }
}

export default MyComponent;

```