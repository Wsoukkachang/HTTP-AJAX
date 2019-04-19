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
        axios.get('http://localhost:5000/friends')
            .then(res => this.setState({friends: res.data}))
            .catch(err => console.log(err));
        }

    postFriend = friend => {
        console.log("Posted New", friend);
        axios.post('http://localhost:5000/friends', friend)
            .then(res => this.setState({friends: res.data}))
            .catch(err => console.log(err));
        
        }

    updateFriend = friend => {
        console.log("Updated", friend);
        axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
            .then(res => this.setState({friends: res.data}))
            .catch(err => console.log(err));
        }
        
    deleteFriend = friend => {
        console.log("Deleted", friend);
        axios.delete(`http://localhost:5000/friends/${friend.id}`, friend)
            .then(res => this.setState({friends: res.data}))
            .catch(err => console.log(err));
        }

    render() {
        // console.log("This State", this.state)

        return (
        <div>
            <AddFriend addFriend={this.postFriend} />
            {this.state.friends.map(friend => <Friend friend={friend} key={friend.id} updateFriend={this.updateFriend} deleteFriend={this.deleteFriend} />)}
        </div>
        )
    }
}

export default FriendList;