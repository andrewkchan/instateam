import * as types from "../constants/ActionTypes";

const initialState = {
    nextId: 0,
    members: {}
}

export default function team(state = initialState, action) {
    switch (action.type) {
        case types.CREATE_TEAM_MEMBER:
            return {
                ...state,
                nextId: (nextId + 1),
                members: { ...state.members, [state.nextId]: action.member }
            };
        case types.UPDATE_TEAM_MEMBER:
            return {
                ...state,
                members: { ...state.members, [action.memberId]: action.member }
            };
        case types.DELETE_TEAM_MEMBER:
            let members = { ...state.members };
            delete members[action.memberId];
            return {
                ...state,
                members
            };
        default:
            return state;
    }
}
