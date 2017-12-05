import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'


const users=[
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }];





class Index extends Component {
    render () {
        return (
            <div>
                {[
                    <span>React.js </span>,
                    <span>is </span>,
                    <span>good</span>
                ]}
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)