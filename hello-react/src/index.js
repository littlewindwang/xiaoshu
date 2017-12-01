import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class LikeButton extends Component {

    static defaultProps={
        likedText:'取消',
        unlikedText:'点赞'
    }



    constructor() {
        super();
        this.state = {
            isLiked: false
        }
    }

    handleClickOnLikeButton() {
        this.setState({
            isLiked: !this.state.isLiked
        });

        if (this.props.abc) {
            this.props.abc();
        }

    }


    render() {
        return (
            <button onClick={() => {
                this.handleClickOnLikeButton();
            }}>
                {this.state.isLiked ? this.props.likedText : this.props.unlikedText}👍
            </button>
        )
    }
}

class Index extends Component {

    constructor(){
        super();
        this.state={
            likedText: '已赞',
            unlikedText: '赞'

        }
    }

    handleIndexClick(){
        this.setState({
            likedText: '取消',
            unlikedText: '点赞'
        });
    }


//
//     class Computer extends Component {
//     constructor(){
//         super();
//         this.state={status:false}
//     }
//
//     handleComputerClick(){
//         super();
//         this.state({
//             status:!this.state.status
//         })
//     }
//
//
//     render () {
//         return (
//             <div>
//                 <button onClick={this.handleComputerClick.bind(this)}>开关</button>
//             </div>
//         )
//     }
// }
//
// class Screen extends Component {
//     static defaultProps
//
//
//
//     render () {
//         return (
//             <div className='screen'></div>
//         )
//     }
// }




















render() {
        return (
            <div>
                <LikeButton
                    likedText={this.state.likedText}
                    unlikedText={this.state.unlikedText}
                    abc={()=>{
                        console.log(this);
                    }}
                />

                <div>
                    <button onClick={this.handleIndexClick.bind(this)}>
                        修改显示
                    </button>
                </div>

            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)