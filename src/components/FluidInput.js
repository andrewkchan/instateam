import React, { Component, PropTypes } from "react";

const propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired, //call this function to update state in parent components when the value of input changes
    type: PropTypes.string.isRequired,
    value: PropTypes.string
};

/*
Text type input whose placeholder moves up above the input to act as a label when the user starts typing.
*/
class FluidInput extends Component {
    constructor(props) {
        super(props);
        const { value } = this.props;
        this.state = {
            focused: false,
            value: value
        };
    }
    toggleFocus() {
        const { focused } = this.state;
        this.setState({
            focused: !focused
        });
    }
    render() {
        const { className, type, id, name, onChange, value } = this.props;
        const { focused } = this.state;
        let containerClass = "fluid-input-container ";
        if (focused || value) {
            containerClass += "fluid-input--active";
        }
        return (
            <div className={containerClass}>
                <div className="fluid-input-body">
                    <input
                        id={id}
                        className="fluid-input-input"
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onFocus={this.toggleFocus.bind(this)}
                        onBlur={this.toggleFocus.bind(this)}
                    />
                    <label className="fluid-input-label">
                        {name}
                    </label>
                </div>
            </div>
        );
    }
}

FluidInput.propTypes = propTypes;

export default FluidInput;
