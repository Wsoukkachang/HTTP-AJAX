import React, {Component} from 'react';
import {Form, Input, Button} from '../StyledComponents';

class AddFriend extends Component {
    constructor(props){
        super(props);
        this.state = {
            friend: {
                name: '',
                age: '',
                email: '',
                phone: ''
            }
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value,
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.friend);
        this.props.addFriend(this.state.friend)
    }
    
    render() {

        return(
            <Form onSubmit={this.handleSubmit}>
                <Input name="name" placeholder="Enter Name" onChange={this.handleChange}/>
                <Input name="age" placeholder="Enter Age" onChange={this.handleChange}/>
                <Input name="email" placeholder="Enter Email" onChange={this.handleChange}/>
                <Input name="phone" placeholder="Enter Phone" onChange={this.handleChange}/>
                <Button type="submit">Add Friend</Button>
            </Form>
        )
    }
}

export default AddFriend;