import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

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
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);