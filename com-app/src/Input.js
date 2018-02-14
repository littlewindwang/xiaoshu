import React, { Component } from 'react';




class Input extends Component {

    constructor(){
        super();
        this.state={
            enterNumber:''
        }
    }




    handleChange(event){

        if(this.props.onSub){
            // const {enterNumber}=this.state;
            this.props.onSub(event.target.value);
        }

        this.setState({
            enterNumber:event.target.value
        });
    }

    render () {
        return (
            <div>
                <input
                    value={this.state.enterNumber}
                    onChange={this.handleChange.bind(this)}
                    type='number' />
            </div>
        )
    }
}



export default Input