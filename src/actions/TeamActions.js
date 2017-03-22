import * as types from "../constants/ActionTypes";

import { navigateHome } from "../actions/NavActions";

//adds the given member object {member} to the team as a new team member.
export function createTeamMember(member) {
    return (dispatch) => {
        dispatch({
            type: types.CREATE_TEAM_MEMBER,
            member
        });

        dispatch(navigateHome());
    };
}

//updates the team member with id {memberId} to match the given object {member}.
export function updateTeamMember(member, memberId) {
    return (dispatch, getState) => {
        const { team } = getState();
        const { members } = team;
        if (members.hasOwnProperty(memberId)) {
            dispatch({
                type: types.UPDATE_TEAM_MEMBER,
                member,
                memberId
            });
            dispatch(navigateHome());
        } else {
            console.error(`Tried to update a nonexistent team member with id ${memberId}`);
        }
    }
}

//removes the team member with id {memberId} from the team.
export function deleteTeamMember(memberId) {
    return (dispatch, getState) => {
        const { team } = getState();
        const { members } = team;
        if (members.hasOwnProperty(memberId)) {
            dispatch({
                type: types.DELETE_TEAM_MEMBER,
                memberId
            });
            dispatch(navigateHome());
        } else {
            console.error(`Tried to delete a nonexistent team member with id ${memberId}`);
        }
    }
}

const fakeTeam = [{
    firstName: "Andrew",
    lastName: "Chan",
    email: "andrewkchan@berkeley.edu",
    phone: "2018879070",
    isAdmin: true,
    img: "/img/lens.jpg"
}, {
    firstName: "Jackie",
    lastName: "Chan",
    email: "jackie.chan@universal.hk",
    phone: "1234567890",
    isAdmin: true
}, {
    firstName: "Bruce",
    lastName: "Lee",
    email: "bruce.lee@gmail.com",
    phone: "9999999999",
    isAdmin: true
}, {
    firstName: "Chuck",
    lastName: "Norris",
    email: "cnorris@hotmail.com",
    phone: "1213334040",
    isAdmin: false
}, {
    firstName: "Aamir",
    lastName: "Khan",
    email: "aamir@ice.in",
    phone: "5671230000",
    isAdmin: false
}, {
    firstName: "Cathy",
    lastName: "O'Neil",
    email: "cathy@mathbabe.org",
    phone: "3141592653",
    isAdmin: false
}, {
    firstName: "Kareena",
    lastName: "Kapoor",
    email: "kkapoor@universal.in",
    phone: "1111111111",
    isAdmin: true
}];

//populates the team with fake team members.
export function populateTeam() {
    return (dispatch) => {
        fakeTeam.forEach((member) => {
            dispatch(createTeamMember(member));
        });
    };
}
