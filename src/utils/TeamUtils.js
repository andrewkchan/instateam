/*
Searches all team members for the given string (matching to firstName, lastName, and email),
returning an array of member Ids as a search result.
*/
export function getSearchResults(members, str) {
    let result = Object.keys(members).filter((memberId) => {
        const member = members[memberId];
        const searchableInfo = [member.firstName, member.lastName, member.email].join(" ");
        return (new RegExp(str, "i")).test(searchableInfo);
    });
    return result;
}

/*
Returns a list of the IDs of all members matching the given role (isAdmin) from the given set of members. If inputList is given,
filters the inputList to get all members matching the given role in it.
*/
export function filterMembersByRole(members, isAdmin, inputList) {
    let result;
    if (Array.isArray(inputList)) {
        result = inputList.filter((memberId) => {
            const member = members[memberId];
            return member.isAdmin === isAdmin;
        });
    }
    Object.keys(members).filter((memberId) => {
        const member = members[memberId];
        return member.isAdmin === isAdmin;
    });
    return result;
}
