import React, { Component } from 'react'

class CommentInput extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            content:''
        }
    }

    handleUsernameChange(event){
        this.setState({
            username:event.target.value
            // username: event.target.value

        });
    }

    handleContentChange(event){
        this.setState({
            content:event.target.value
        })
    }

    handleSubmit(){
        console.log("before"+this.props.onSub);
        if(this.props.onSub){
            const {username,content}=this.state;
            this.props.onSub({username,content});
            console.log('ssss'+this.props.onSub);

        }


        this.setState({
            content:''
        })
    }


    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>user name:</span>
                    <div className='comment-field-input'>
                        <input
                            value={this.state.username}
                            onChange={this.handleUsernameChange.bind(this)}
                        />
                    </div>
                </div>

                <div className='comment-field'>
                    <span className='comment-field-name'>comment:</span>
                    <div className='comment-field-input'>
                        <textarea
                            value={this.state.content}
                            onChange={this.handleContentChange.bind(this)}
                        />
                    </div>
                </div>

                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        fabu
                    </button>
                </div>






            </div>
        )
    }
}

export default CommentInput