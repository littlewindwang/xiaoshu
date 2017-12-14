'use strict'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Clock extends Component {
    constructor(){
        super();
        this.state={
            data:new Date()
        }
    }
    componentWillMount () {
        console.log(this);

        console.log('component will mount');

        this.timer=setInterval(()=>{
            this.setState({data:new Date()})
        },1000);

    }

    handleClick(){
        console.log(this);
    }
    componentDidMount () {
        console.log(this);

        console.log('component did mount');
    }

    componentWillUnmount(){
        console.log('component will un mount');
        console.log(this);
        clearInterval(this.timer);
    }


    render () {
        return (
            <div>
                <h1>
                    <p onClick={this.handleClick}>现在的时间是</p>
                    {this.state.data.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

class Index extends Component{
    constructor(){
        super();
        this.state={
            showClock:true
        }
    }

    handleButtonClick(){
        this.setState({
            showClock:!this.state.showClock
        })
    }




    render(){
        return(
            <div>
                <button onClick={this.handleButtonClick.bind(this)}>
                显示隐藏时钟
                </button>
                {this.state.showClock?<Clock />:null}

            </div>
        )
    }
}






ReactDOM.render(
    <Index />,
    document.getElementById('root')
)