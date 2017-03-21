import * as types from "../constants/ActionTypes";

import { navigateHome } from "../actions/NavActions";

export function createTeamMember(member) {
    return (dispatch) => {
        dispatch({
            type: types.CREATE_TEAM_MEMBER,
            member
        }).then(() => {
            dispatch(navigateHome());
        });
    };
}

export function updateTeamMember(member, memberId) {
    return (dispatch, getState) => {
        const { team } = getState();
        const members = { team };
        if (members.hasOwnProperty(memberId)) {
            dispatch({
                type: types.UPDATE_TEAM_MEMBER,
                member,
                memberId
            }).then(() => {
                dispatch(navigateHome());
            });
        } else {
            console.error(`Tried to update a nonexistent team member with id ${memberId}`);
        }
    }
}

export function deleteTeamMember(memberId) {
    return (dispatch, getState) => {
        const { team } = getState();
        const members = { team };
        if (members.hasOwnProperty(memberId)) {
            dispatch({
                type: types.DELETE_TEAM_MEMBER,
                memberId
            }).then(() => {
                dispatch(navigateHome());
            });
        } else {
            console.error(`Tried to delete a nonexistent team member with id ${memberId}`);
        }
    }
}
