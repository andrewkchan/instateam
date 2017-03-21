import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import TeamMemberDetails from "../components/TeamMemberDetails";

import { createTeamMember, updateTeamMember, deleteTeamMember } from "../actions/TeamActions";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    member: PropTypes.object.isRequired, //can be empty object if new member. else contains member info being edited.
    memberId: PropTypes.string.isRequired //"new" if new member. else contains member id of member being edited.
};

class UpdateTeamMember extends Component {
    constructor(props) {
        super(props);
        const { member } = this.props
        this.state = { ...member };
    }
    deleteMember() {
        const { dispatch, memberId } = this.props;
        if (memberId === "new") {
            console.error("Can't delete a new member!");
        }
        dispatch(deleteTeamMember(memberId));
    }
    onChange(memberProp) {
        this.setState(memberProp);
    }
    saveMember() {
        const { dispatch, memberId } = this.props;
        if (memberId === "new") {
            dispatch(createTeamMember({ ...this.state }));
        } else {
            dispatch(updateTeamMember({ ...this.state}, memberId));
        }
    }
    renderHeader() {
        const { memberId } = this.props;
        if (memberId !== "new") {
            return (
                <div className="update-member-header">
                    <div className="update-member-header-text">
                        <h1>Edit Team Member</h1>
                        Edit contact info, location, and role.
                    </div>
                </div>
            );
        }
        return (
            <div className="update-member-header">
                <div className="update-member-header-text">
                    <h1>Add Team Member</h1>
                    Set email, location, and role.
                </div>
            </div>
        );
    }
    renderSubmit() {
        const { memberId } = this.props;
        let deleteButton;
        if (memberId !== "new") {
            deleteButton = (
                <div className="btn btn-danger" onClick={this.deleteMember.bind(this)}>
                    delete
                </div>
            );
        }
        return (
            <div className="update-member-submit">
                {deleteButton}
                <div className="btn btn-submit" onClick={this.saveMember.bind(this)}>
                    save
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="update-member-container">
                {this.renderHeader()}
                <TeamMemberDetails
                    member={this.state}
                    onChange={this.onChange.bind(this)}
                />
            </div>
        );
    }
}

UpdateTeamMember.propTypes = propTypes;

export default UpdateTeamMember;
