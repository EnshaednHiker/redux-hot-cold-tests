import React from 'react';
import {shallow} from 'enzyme';
import {toggleInfoModal} from '../actions';
import {InfoModal} from './info-modal';

describe('<InfoModal />', () => {
    it('Renders without crashing', () => {
        shallow(<InfoModal />);
    });

    it('Fires the toggleInfoModal dispatch when the close button is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<InfoModal dispatch={dispatch} />);
        wrapper.find('.close').simulate('click', {
            preventDefault() {}
        });
        console.log(dispatch.mock.calls);
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch.mock.calls[0][0]).toEqual(toggleInfoModal());
    });
});
