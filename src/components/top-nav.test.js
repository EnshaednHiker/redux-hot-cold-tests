import React from 'react';
import {shallow} from 'enzyme';
import {NEW_GAME, toggleInfoModal} from '../actions';
import {TopNav} from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should call newGame when new game is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch}/>);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        });
    
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch.mock.calls[0][0].type).toEqual(NEW_GAME);
    });

    it('Should call onInfo when info is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        const link = wrapper.find('.what');
        link.simulate('click', {
            preventDefault() {}
        });
        
        //expect(dispatch).toHaveBeenCalled();
        expect(dispatch.mock.calls[0][0]).toEqual(toggleInfoModal());
    });

});
