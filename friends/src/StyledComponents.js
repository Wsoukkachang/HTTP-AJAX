import styled from 'styled-components';

const Container = styled.div`
    width: 900px;
    margin: 50px auto;
    border: 5px outset gainsboro;
    text-align: center;
    padding-bottom: 10px;
    background-color: skyblue;
`;

const Header = styled.div`
    font-size: 40px;
    color: white;
    margin-top: 20px;
`;

const Card = styled.div`
    max-width: 280px;
    width: 100%;
    border: 1px solid gainsboro;
    border-radius: 5px;
    background-color: cornflowerblue;
    color: white;
    display: inline-block;
`;

const CardBody = styled.div`
    width: 100%;
    padding: 15px;
    align-items: center;
`;

const CardTitle = styled.div`
    display: block;
    text-align: left;
`;

const CardText = styled.text`
    display: block;
    text-align: left;
`;

const Form = styled.form`
`;

const Input = styled.input`
    padding: 5px;
    font-size: 16px;
    margin: 10px;
`;

const Button = styled.button`
    background-color: gainsboro;
    color: black;
    padding: 10px;
    font-size: 16px;
    border: 1px solid lightgrey;
    margin: 10px;
    cursor: pointer;
`;

export {Container, Header, Card, CardTitle, CardBody, CardText, Form, Input, Button}