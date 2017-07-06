import { expect } from 'chai';

import {
    NEW_GAME,
    newGame,
    MAKE_GUESS,
    makeGuess,
    TOGGLE_INFO_MODAL,
    toggleInfoModal
} from './actions';

describe('newGame', () => {
    it('Should return the action', () => {
        const action = newGame();
        expect(action.type).to.equal(NEW_GAME);
        expect(action.correctAnswer).to.be.a('number');
    });
});

describe('makeGuess', () => {
    it('Should return the action', () => {
        const action = makeGuess(25);
        expect(action.type).to.equal(MAKE_GUESS);
        expect(action.guess).to.equal(25);
    });
});

describe('toggleInfoModal', () => {
    it('Should return the action', () => {
        const action = toggleInfoModal();
        expect(action.type).to.equal(TOGGLE_INFO_MODAL);
    });
});