import React, { Component, PropTypes } from "react";
import Link from "../components/Link";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    memberId: PropTypes.string.isRequired,
    member: PropTypes.object.isRequired
};

/*
TeamMemberCard
The mini card containing immediate info when viewing a team member in the list of team members.
*/
class TeamMemberCard extends Component {
    render() {
        const { dispatch, member, memberId } = this.props;
        const { firstName, lastName, role, phone, email } = this.props;
        return (
            <div className="member-card">
                <Link
                    dispatch={dispatch}
                    route={{ path: ["members", memberId]}}
                >
                    <div className="member-card-thumbnail">
                        <i className="ion-android-person" />
                    </div>
                </Link>
                <div className="member-card-info">
                    <div className="member-card-info_title">
                        <Link
                            dispatch={dispatch}
                            route={{ path: ["members", memberId]}}
                        >
                            {`${firstName} ${lastName} (${role})`}
                        </Link>
                    </div>
                    <div className="member-card-info_phone">
                        {phone}
                    </div>
                    <div className="member-card-info_email">
                        <a href={`mailto:${email}`} title={`Email ${firstName}`}>{email}</a>
                    </div>
                </div>
            </div>
        );
    }
}

TeamMemberCard.propTypes = propTypes;

export default TeamMemberCard;
