import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import TeamMemberList from "../components/TeamMemberList";
import Link from "../components/Link";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    isMobile: PropTypes.bool.isRequired,
    team: PropTypes.object.isRequired
};

class TeamViewerContainer extends Component {
    render() {
        const { dispatch, team } = this.props;
        const { members } = team;
        const memberIds = Object.keys(members);
        return (
            <div className="container">
                <div className="team-header">
                    <div className="team-header-text">
                        <h1>Team Members</h1>
                        {`You have ${memberIds.length} team members.`}
                    </div>
                    <Link
                        className="team-header-add-container"
                        dispatch={dispatch}
                        route={{ path: ["members", "new"] }}
                        title={"Add a new team member"}
                    >
                        <div className="team-header-add-icon">
                            <i className="icon ion-plus" />
                        </div>
                    </Link>
                </div>
                <TeamMemberList
                    dispatch={dispatch}
                    team={team}
                    memberIds={memberIds}
                />
            </div>
        );
    }
}

TeamViewerContainer.propTypes = propTypes;

function mapStateToProps(state) {
    const { env, nav, team } = state;
    const { isMobile } = env;
    return {
        isMobile,
        team
    };
}

export default connect(mapStateToProps)(TeamViewerContainer);
