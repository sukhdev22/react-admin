import React from 'react';
import classNames from 'classnames';

class ButtonField extends React.Component {
    constructor(props) {
        super(props);

        this.value = !!props.value;
    }

    isActive() {
        return !!this.value;
    }

    toggle() {
        this.value = !this.value;
        this.refs[this.props.name].getDOMNode().value = this.value;

        this.props.updateField(this.props.name, this.value ? 1 : 0);
    }

    render() {
        let attributes = {
            type: 'hidden',
            value: this.props.value ? 1 : 0,
            name: this.props.name,
            id: this.props.name,
            ref: this.props.name
        };

        let className = classNames('btn', 'btn-default', { active: this.isActive() });

        return (
            <div>
                <input {...attributes} />
                <a onClick={this.toggle.bind(this)}>{this.props.label}</a>
            </div>
        );
    }
}

ButtonField.propTypes = {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    type: React.PropTypes.string,
    updateField: React.PropTypes.func
};

export default ButtonField;