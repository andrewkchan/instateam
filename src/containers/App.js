import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import NavBar from "../components/NavBar";
import TeamViewerContainer from "../containers/TeamViewerContainer";
import UpdateTeamMember from "../components/UpdateTeamMember";
import { initEnv } from "../actions/EnvActions";
import { initNav } from "../actions/NavActions";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    isMobile: PropTypes.bool,
    nav: PropTypes.object.isRequired,
    team: PropTypes.object.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
};

class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(initEnv());
        dispatch(initNav());
    }
    renderRoute() {
        const { dispatch, nav } = this.props;
        const { path, query } = nav.route;
        switch (path[0]) {
            case "team":
                return (<TeamViewerContainer />);
            case "members":
                const { team } = this.props;
                if (query && query.s) {
                    
                }
                if (path.length > 1) {
                    let member = team.members[path[1]];
                    member = member ? member : {};
                    return (
                        <UpdateTeamMember
                            dispatch={dispatch}
                            member={member}
                            memberId={path[1]}
                        />
                    );
                }
            default:
                return (<TeamViewerContainer />);
        }
    }
    render() {
        const { dispatch, env, nav } = this.props;
        return (
            <div>
                <NavBar nav={nav} dispatch={dispatch} />
                <div className="content">
                    {this.renderRoute()}
                </div>
            </div>
        );
    }
}

App.propTypes = propTypes;

function mapStateToProps(state) {
    const { env, nav, team } = state;
    const { isMobile, width, height } = env;
    return {
        isMobile,
        nav,
        team,
        width,
        height
    };
}

export default connect(mapStateToProps)(App);
