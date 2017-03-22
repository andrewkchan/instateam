import React, { Component, PropTypes } from "react";
import { navigateHome } from "../actions/NavActions";

import Link from "../components/Link";
import { populateTeam } from "../actions/TeamActions";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
};

class NavBar extends Component {
    render() {
        const { dispatch } = this.props;
        return (
            <div className="navbar">
                <Link
                    className="navbar-logo-container"
                    dispatch={dispatch}
                    route={{ path: ["team"] }}
                >
                    <div className="navbar-logo-icon">
                        <i className="icon ion-android-home" />
                    </div>
                    <div className="navbar-logo-text">
                        instateam
                    </div>
                </Link>
                <div className="populate-team" onClick={() => { dispatch(populateTeam()); }}>
                    <i className="icon ion-android-contacts" />
                </div>
            </div>
        );
    }
}

NavBar.propTypes = propTypes;

export default NavBar;
