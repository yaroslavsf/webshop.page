import React from 'react'
// import Enzyme, {shallow} from 'enzyme';
const Enzyme = require('enzyme')
const {shallow} = require('enzyme')
// import { shallow } from 'enzyme';
// import { EnzymeAdapter } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from './Button';
// import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('Button', () => {
    it('should work onclick', () => {
        const mockCallBack = jest.fn();
        const wrapper = shallow(<Button onClickEvent={mockCallBack}/>);
        wrapper.find('button').simulate('click')
        expect(mockCallBack.mock.calls.length).toEqual(1);
    })
});