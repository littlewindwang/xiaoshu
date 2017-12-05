import React, {Component} from 'react'
import Comment from "./Comment";

class CommentList extends Component {

    static defaultProps = {
        comments: []
    };

    render() {
        // const comments = [
        //     {username: 'Jerry', content: 'Hello'},
        //     {username: 'Tomy', content: 'World'},
        //     {username: 'Lucy', content: 'Good'}
        // ];


        return (
            <div>{
                this.props.comments.map((comment, i) => {
                    return (
                        <Comment key={i} comment={comment}>
                        </Comment>
                    )
                })

            }</div>
        )
    }
}

export default CommentList