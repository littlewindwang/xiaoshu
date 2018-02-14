import React, { Component } from 'react';

class PercentageShower extends Component {
    static defaultProps = {
        enterNumber: ''
    };




    render () {
        return (
            <div>{this.props.enterNumber}</div>
        )
    }
}

export default PercentageShower;