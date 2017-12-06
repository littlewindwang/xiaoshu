import React, { Component } from 'react';
import Input from './Input';
import PercentageShower from './PercentageShower'

class PercentageApp extends Component {

    constructor(){
        super();
        this.state={
            enterNumber:''
        }
    }

    handleSubmitNumber(enterNumber){
        console.log(enterNumber);
        this.setState({
            enterNumber:enterNumber
        });

    }


    render () {
        return (
            <div>
                <Input onSub={this.handleSubmitNumber.bind(this)}/>
                <PercentageShower enterNumber={this.state.enterNumber}/>
            </div>
        )
    }
}

export default PercentageApp