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
    prettyPrintPhone(phone) {
        return `${phone.substring(0,3)}-${phone.substring(3,6)}-${phone.substring(6,9)}`;
    }
    render() {
        const { dispatch, member, memberId } = this.props;
        const { firstName, lastName, role, phone, email } = member;
        return (
            <div className="member-card">
                <Link
                    dispatch={dispatch}
                    route={{ path: ["members", memberId]}}
                >
                    <div className="member-card-thumbnail">
                        <i className="icon ion-android-person" />
                    </div>
                </Link>
                <div className="member-card-info">
                    <div className="member-card-info_title">
                        <Link
                            className="important"
                            dispatch={dispatch}
                            route={{ path: ["members", memberId]}}
                        >
                            {`${firstName} ${lastName} (${role})`}
                        </Link>
                    </div>
                    <div className="member-card-info_phone">
                        {this.prettyPrintPhone(phone)}
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
