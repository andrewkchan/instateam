import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import TeamMemberList from "../components/TeamMemberList";
import Link from "../components/Link";
import { getSearchResults } from "../utils/TeamUtils";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    isMobile: PropTypes.bool.isRequired,
    team: PropTypes.object.isRequired,
};

class TeamViewerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        };
    }
    onChangeSearchText(event) {
        const { target } = event;
        const { value } = target;
        this.setState({
            searchText: value
        });
    }
    render() {
        const { dispatch, team } = this.props;
        const { searchText } = this.state;
        const { members } = team;
        let memberIds = Object.keys(members);
        if (searchText) {
            memberIds = getSearchResults(members, searchText);
        }
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
                    <div className="team-search-container">
                        <div className="team-search-icon">
                            <i className="icon ion-search" />
                        </div>
                        <input
                            type="text"
                            className="team-search-input"
                            id="teamSearch"
                            name="teamSearch"
                            placeholder="Search for members"
                            onChange={this.onChangeSearchText.bind(this)}
                            />
                    </div>

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
