import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import TeamMemberList from "../components/TeamMemberList";
import Link from "../components/Link";
import { getSearchResults, filterMembersByRole } from "../utils/TeamUtils";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    isMobile: PropTypes.bool.isRequired,
    team: PropTypes.object.isRequired,
};

class TeamViewerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            activeTab: "all"
        };
    }
    onChangeSearchText(event) {
        const { target } = event;
        const { value } = target;
        this.setState({
            searchText: value
        });
    }
    getMemberList() {
        const { dispatch, team } = this.props;
        const { searchText, activeTab } = this.state;
        const { members } = team;
        let memberIds = Object.keys(members);
        let numMembers = memberIds.length;
        let result;
        if (searchText) {
            memberIds = getSearchResults(members, searchText);
        }
        if (activeTab === "admins") {
            memberIds = filterMembersByRole(members, true, memberIds);
        } else if (activeTab === "regulars") {
            memberIds = filterMembersByRole(members, false, memberIds);
        }
        return memberIds;
    }
    renderMemberList(memberIds) {
        const { dispatch, team } = this.props;
        let result;
        if (memberIds.length > 0) {
            result = (
                <TeamMemberList
                    dispatch={dispatch}
                    team={team}
                    memberIds={memberIds}
                />
            );
        } else {
            result = (
                <div className="sad">
                    No team members were found. :(
                </div>
            );
        }
        return result;
    }
    render() {
        const { dispatch, team } = this.props;
        const { activeTab } = this.state;
        const numMembers = Object.keys(team.members).length;
        const memberList = this.getMemberList();
        return (
            <div className="container">
                <div className="team-header">
                    <div className="team-header-text">
                        <h1>Team Members</h1>
                        {`You have ${numMembers} team members.`}
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
                    <div className="team-tabs">
                        <div
                            className={`team-tab team-tab-all ${activeTab === "all" ? "team-tab-active" : null}`}
                            onClick={() => { this.setState({ activeTab: "all" }); }}
                        >
                            All
                        </div>
                        <div
                            className={`team-tab team-tab-admins ${activeTab === "admins" ? "team-tab-active" : null}`}
                            onClick={() => { this.setState({ activeTab: "admins" }); }}
                        >
                            Admins
                        </div>
                        <div
                            className={`team-tab team-tab-regulars ${activeTab === "regulars" ? "team-tab-active" : null}`}
                            onClick={() => { this.setState({ activeTab: "regulars" }); }}
                        >
                            Regular
                        </div>
                    </div>
                    {this.renderMemberList(memberList)}
                </div>
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
