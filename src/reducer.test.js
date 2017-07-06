import {
    newGame,
    makeGuess,
    toggleInfoModal
} from './actions';

import {assert} from 'chai';

import {gameReducer} from  './reducer';

describe('gameReducer', () => {
    
    it('Should set the initial state', () =>{

        const state = gameReducer(undefined, {type: '__unknown'});
        const correctAnswer = state.correctAnswer;

        expect(state).toEqual({
            guesses: [],
            feedback: 'Make your guess!',
            showInfoModal: false,
            correctAnswer: correctAnswer
        });
    });
    it('Should return the state of an unknown action', () => {
        let currentState = {};
        const state = gameReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });
    
    describe('newGame', () => {
        it('Should clear the state to initial state values', ()=>{
            let state;
            state = gameReducer(state,newGame());
            let correctAnswer = state.correctAnswer;
        
            expect(state).toEqual({
                guesses: [],
                feedback: 'Make your guess!',
                showInfoModal: false,
                correctAnswer: correctAnswer
            });
        });
    });

    describe('makeGuess', () => {
        it('Winning guess should provide feedback \'You got it!\'', ()=>{
            let state;
            let winningFeedback = 'You got it!'
            
            state = gameReducer(state,newGame());
            
            let correctAnswer = state.correctAnswer;
            let correctGuess = correctAnswer;
            let nextState;
            
            nextState = gameReducer(state,makeGuess(correctGuess));
        
            expect(nextState).toEqual({
                guesses: [correctGuess],
                feedback: winningFeedback,
                showInfoModal: false,
                correctAnswer: correctAnswer
            })
        });
        it('Guess off by 1 should provide feedback \'You\'re Hot!\'', ()=>{
            let state;
            let hotFeedback = 'You\'re Hot!'
            
            state = gameReducer(state,newGame());
            
            let correctAnswer = state.correctAnswer;
            let hotGuess = correctAnswer-1;
            let nextState;
            
            nextState = gameReducer(state,makeGuess(hotGuess));
            
            expect(nextState).toEqual({
                guesses: [hotGuess],
                feedback: hotFeedback,
                showInfoModal: false,
                correctAnswer: correctAnswer
            })
        });
        it('Guess off by 10 should provide feedback \'You\'re Warm\'', ()=>{
            let state;
            let warmFeedback = 'You\'re Warm'
            
            state = gameReducer(state,newGame());
            
            let correctAnswer = state.correctAnswer;
            let warmGuess = correctAnswer-10;
            
            
            let nextState;
            
            nextState = gameReducer(state,makeGuess(warmGuess));
            
            expect(nextState).toEqual({
                guesses: [warmGuess],
                feedback: warmFeedback,
                showInfoModal: false,
                correctAnswer: correctAnswer
            })
        });
        it('Guess off by 30 should provide feedback \'You\'re Cold...\'', ()=>{
            let state;
            let coldFeedback = 'You\'re Cold...'
            
            state = gameReducer(state,newGame());
            
            let correctAnswer = state.correctAnswer;
            let coldGuess = correctAnswer-30;
            let nextState;
            
            nextState = gameReducer(state,makeGuess(coldGuess));
            
            expect(nextState).toEqual({
                guesses: [coldGuess],
                feedback: coldFeedback,
                showInfoModal: false,
                correctAnswer: correctAnswer
            })
        });
        it('Guess off by 50 should provide feedback \'You\'re Ice Cold...\'', ()=>{
            let state;
            let iceColdFeedback = 'You\'re Ice Cold...'
            
            state = gameReducer(state,newGame());
            
            let correctAnswer = state.correctAnswer;
            let iceColdGuess = correctAnswer-50;
            let nextState;
            
            nextState = gameReducer(state,makeGuess(iceColdGuess));
            
            expect(nextState).toEqual({
                guesses: [iceColdGuess],
                feedback: iceColdFeedback,
                showInfoModal: false,
                correctAnswer: correctAnswer
            })
        });
        it('Guess that\'s not a number should provide feedback \'Please enter a valid number\'', ()=>{
            let state;
            let NaNFeedback = 'Please enter a valid number';
            let NaNGuess = 'foo';
            state = gameReducer(state,newGame());
            let correctAnswer = state.correctAnswer;
            
            let nextState;
            nextState = gameReducer(state,makeGuess(NaNGuess));

            expect(nextState).toEqual({
                guesses: [],
                feedback: NaNFeedback,
                showInfoModal: false,
                correctAnswer: correctAnswer
            })
        });
    });
    describe('toggleInfoModal', () => {
        it('Should toggle the info modal if that action is passed', ()=>{
            let state;
            state = gameReducer(state,newGame());
            let correctAnswer = state.correctAnswer;
            
            let nextState;
            nextState = gameReducer(state,toggleInfoModal());

            expect(nextState).toEqual({
                guesses: [],
                feedback: 'Make your guess!',
                showInfoModal: true,
                correctAnswer: correctAnswer
            })
        });
    });




});

