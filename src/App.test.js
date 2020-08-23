import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { mount } from 'enzyme';

test('<App /> renders correcly', () => {
  mount(<App />)
});
