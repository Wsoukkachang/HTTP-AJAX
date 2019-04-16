import React from 'react';
import FriendList from './FriendList';
import {Card, CardBody, CardTitle, CardText} from '../StyledComponents';

function Friend(props) {
    return (
        <Card>
            <CardBody>
                <CardTitle>
                    <strong>Name: </strong> {props.friend.name}
                </CardTitle>
                <CardText>
                    <strong>Age: </strong> {props.friend.age}
                </CardText>
                <CardText>
                    <strong>Email: </strong> {props.friend.email}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default Friend;