import React, { Component } from 'react';
import PercentageShower from './PercentageShower'
import Input from './Input'

class PercentageApp extends Component {


    constructor(){
        super();
        this.state={
            enterNumber:''
        }
    }


    handleSubNumber(num){
        this.setState({
            enterNumber:num
        });
    }


    render () {
        return (
            <div>
                <Input onSub={this.handleSubNumber.bind(this)} />
                <PercentageShower enterNumber={((pNumber)=>{
                    console.log(typeof(pNumber));
                    console.log((pNumber*100).toFixed(2));
                    return pNumber;
                })(this.state.enterNumber)} />
            </div>
        )
    }
}






export default PercentageApp;