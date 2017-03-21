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
