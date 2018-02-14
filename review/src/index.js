import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends Component {

    renderGood(goodWord,badWord){
        const isGood=true;
        return isGood?goodWord:badWord;
    }

    handleClickOnHeader(word, e){
        console.log(word);
        console.log(e.target.innerHTML);
    }

    render(){
        // const word ='is good';
        return (
            <div>
                <h1 className='title' onClick={this.handleClickOnHeader.bind(this,'hello')}>react xiaoshu {
                    this.renderGood(<span>is godod</span>,<span>is bad</span>)
                }</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
)