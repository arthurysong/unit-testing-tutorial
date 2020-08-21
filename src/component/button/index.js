import React from 'react';
import PropTypes from 'prop-types';

class SharedButton extends React.Component {
    submitEvent() {
        if(this.props.emitEvent) {
            this.props.emitEvent();
        }
    }

    render(){
        const { buttonText } = this.props;
        return(
            // <button onClick={() => this.submitEvent()} data-test="buttonComponent">
            <button onClick={this.props.emitEvent} data-test="buttonComponent">
                {buttonText}
            </button>
        )
    }
}

SharedButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func,
};

export default SharedButton;