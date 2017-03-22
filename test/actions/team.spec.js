import expect from 'expect';
import * as actions from '../../src/actions/TeamActions';
import * as types from '../../src/constants/ActionTypes';

const mockState = {
    team: {
        members: {0: { firstName: "john", lastName: "johnson", phone: "1234567890" }}
    }
};
const dispatch = (action) => { return action; };
const getState = () => { return mockState; };
//
// describe('navigator actions', () => {
//     describe('createTeamMember', () => {
//         it('should create CREATE_TEAM_MEMBER action', () => {
//             const member = { firstName: "john", lastName: "johnson", phone: "1234567890" };
//             expect(actions.createTeamMember(member))(dispatch, getState).toEqual({type: types.CREATE_TEAM_MEMBER, member});
//         });
//     });
//     describe('updateTeamMember', () => {
//         it('should create UPDATE_TEAM_MEMBER action', () => {
//             const member = { firstName: "john", lastName: "johnson", phone: "1234567890" };
//             const memberId = 0;
//             expect(actions.updateTeamMember(member, memberId))(dispatch, getState).toEqual({type: types.UPDATE_TEAM_MEMBER, member, memberId});
//         });
//     });
// });
//commented out because I don't know how to test redux-thunk actions yet.
