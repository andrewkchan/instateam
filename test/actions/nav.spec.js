import expect from 'expect';
import * as actions from '../../src/actions/NavActions';
import * as types from '../../src/constants/ActionTypes';

describe('navigator actions', () => {
    describe('changePath', () => {
        it('should create CHANGE_PATH action', () => {
            const route = {path: ['dank'], query: {q: 'memes'}};
            expect(actions.changePath(route)).toEqual({type: types.CHANGE_PATH, route});
        });
    });
});
