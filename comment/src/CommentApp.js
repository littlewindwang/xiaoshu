import React, { Component } from 'react'

import CommentInput from './CommentInput'

class CommentApp extends CommentInput{
    render(){
        return(
            <div>
                <CommentInput/>
            </div>
        );
    }
}