import React, { Component } from 'react';


class Input extends Component {
    constructor(){
        super();
        this.state={
            inputNumber:''
        }
    }

    onChangeHandler(event){

        this.setState({
            inputNumber:event.target.value
        });

        if(this.props.onSub) {
            const inputNumber = this.state.inputNumber;
            this.props.onSub(inputNumber);
        }




    }


    onClickHandler(){
        const inputNumber=this.state.inputNumber
        console.log('+++++++'+inputNumber);
    }

    render () {
        return (
            <div>
                <input type='number'
                       value={this.state.inputNumber}
                        onChange={this.onChangeHandler.bind(this)}
                />
                <button onClick={this.onClickHandler.bind(this)}>click</button>
            </div>
        )
    }
}

export default Input