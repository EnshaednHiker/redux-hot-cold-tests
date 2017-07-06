import React from 'react';
import {shallow} from 'enzyme';

//this passes
//import Game from './game';

//this fails, why?
import {Game} from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });
});
