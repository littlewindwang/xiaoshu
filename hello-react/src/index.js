import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

<<<<<<< HEAD
const users = [
    {username: 'Jerry', age: 21, gender: 'male'},
    {username: 'Tomy', age: 22, gender: 'male'},
    {username: 'Lily', age: 19, gender: 'female'},
    {username: 'Lucy', age: 20, gender: 'female'}
];


class User extends Component{
    render(){
        const {user}=this.props;
        // const {abc}=this.props;
        console.log(this.props);
        // console.log(user);
        // console.log(abc);
        return(
            <div>
                <div>姓名：{user.username}</div>
                <div>年龄：{user.age}</div>
                <div>性别：{user.gender}</div>
                <hr />
            </div>
        )
    }
}



class Index extends Component {
    render() {
        return (
            <div>
                {users.map((user,i)=> {
                    // console.log(user);
                    console.log(i);
                   return <User user={user} key={i} index={i} />
                })}
=======

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
>>>>>>> b485e0c89391017262a4cc5403e947db6fe0a668
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);