import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class LikeButton extends Component{
    constructor(){
        super();
        this.state={
            isLiked:false
        }
    }

    handleClickOnLikeButton(){
       console.log("button1");
       console.log(this);

    }
    handleClickOnLikeButton2(){
        console.log("button2");
        console.log(this);

    }


    render(){
        return(
            <button onClick={()=>{
                this.handleClickOnLikeButton();
                this.handleClickOnLikeButton2();
            }}>
                {this.state.isLiked?'取消':'点赞'}👍
            </button>
        )
    }
}

class Index extends Component{
    render(){
        return (
            <div>
                <LikeButton />
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)