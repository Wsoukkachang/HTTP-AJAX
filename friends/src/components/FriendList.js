import React, {Component} from 'react';
import Friend from './Friend.js';
import AddFriend from './AddFriend';
import axios from "axios";

class FriendList extends Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/friends")
            .then(res => {this.setState({friends: res.data})})
                .catch(err => console.log(err))
    }

    postFriend = friend => {
        
        axios.post('http://localhost:5000/friends', friend)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });

        this.setState((friend) => {

            return {
                friends: [...this.state.friends, {
                    name: friend.name,
                    age: friend.age,
                    email: friend.email
                }]
            }
        })
    }

    render() {
        console.log(this.state)

        return (
        <div>
            <AddFriend addFriend={this.postFriend} />
                {this.state.friends.map(friend => <Friend friend={friend} key={friend.id} />)}
        </div>
        )
    }
}

export default FriendList;