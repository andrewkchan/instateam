import React, { Component, PropTypes } from "react";
import TeamMemberCard from "../components/TeamMemberCard";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    team: PropTypes.object.isRequired,
    memberIds: PropTypes.array.isRequired //an array consisting of the IDs of the team members in this list, in order.
};

class TeamMemberList extends Component {
    render() {
        const { dispatch, team, memberIds } = this.props;
        const { members } = team;
        const memberCards = memberIds.map((memberId) => {
            const member = members[memberId];
            return (
                <TeamMemberCard
                    dispatch={dispatch}
                    memberId={memberId}
                    member={member}
                />
            );
        });

        return (
            <div className="member-list">
                {memberCards}
            </div>
        );
    }
}

TeamMemberList.propTypes = propTypes;

export default TeamMemberList;
