import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'



class Header extends Component {


    renderGoodWord(goodWord,badWord){
        const isGoodWord = true;
        return isGoodWord ? goodWord : badWord;
    }

    con(){
        console.log('con1111');
    }

    handleClickOnTitle() {
        console.log('nidaye');
        // console.log(e.target);
         this.con();

    }



    render() {
        return (
            <div>
                <h1 onClick={this.handleClickOnTitle.bind(this)}>React 小书
                    {
                        this.renderGoodWord(<strong> is good</strong>,<span> is bad</span>)
                    }
                </h1>
            </div>
        )
    }
}

ReactDOM.render(
    <Header/>,
    document.getElementById('root')
)