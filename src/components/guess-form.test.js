import React from 'react';
import {shallow, mount} from 'enzyme';
import {makeGuess} from '../actions';
import {GuessForm} from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should fire the submitGuess callback when the form is submitted', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        const value = 10;
        wrapper.find('input[type="text"]').node.value = value;
        wrapper.simulate('submit');
        console.log(dispatch.mock.calls);
        expect(dispatch.mock.calls[0][0].guess).toEqual(value.toString());
        
    });

    it('Should reset the input when the form is submitted', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        const input = wrapper.find('input[type="text"]');
        expect(input.node.value).toEqual('');
        const value = 10;
        wrapper.find('input[type="text"]').node.value = value;
        wrapper.simulate('submit');
        //doesn't clear, need to debug with Ken
        expect(input.node.value).toEqual('');
        
    });
    
});
