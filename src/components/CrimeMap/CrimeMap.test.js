import React from 'react';
import ReactDOM from 'react-dom';
import CrimeMap from './CrimeMap.js';
import {shallow,mount} from 'enzyme';

it('renders without crashing', () => {
  mount(<CrimeMap />);
});
