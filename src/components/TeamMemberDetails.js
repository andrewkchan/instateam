import React, { Component, PropTypes } from "react";
import FluidInput from "../components/FluidInput";

const propTypes = {
    member: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
};

class TeamMemberDetails extends Component {
    /*
    Calls onChange() with the id of the field changed and the new value of the field.
    Ex:
    If firstName was changed, calls
    onChange({
        firstName: (NEW FIRST NAME)
    });
    */
    onInputChange(event) {
        const { target } = event;
        const { onChange } = this.props;
        onChange({
            [target.id]: target.value
        });
    }
    render() {
        const { member } = this.props;
        const { firstName, lastName, role, phone, email } = member;
        return (
            <div className="member-details-container">
                <div className="member-details-info">
                    <div className="member-details-info member-details-header">
                        info
                    </div>
                    <div className="member-details-info-form">
                        <FluidInput
                            id="firstName"
                            name="first name"
                            type="text"
                            onChange={this.onInputChange.bind(this)}
                            value={firstName}
                        />
                        <FluidInput
                            id="lastName"
                            name="last name"
                            type="text"
                            onChange={this.onInputChange.bind(this)}
                            value={lastName}
                        />
                        <FluidInput
                            id="email"
                            name="email"
                            type="email"
                            onChange={this.onInputChange.bind(this)}
                            value={email}
                        />
                        <FluidInput
                            id="phone"
                            name="phone"
                            type="tel"
                            onChange={this.onInputChange.bind(this)}
                            value={phone}
                        />
                    </div>
                </div>
                <div className="member-details-role">
                    <div className="member-details-role member-details-header">
                        role
                    </div>
                    <div className="member-details-role-form">
                    </div>
                </div>
            </div>
        );
    }
}

TeamMemberDetails.propTypes = propTypes;

export default TeamMemberDetails;
