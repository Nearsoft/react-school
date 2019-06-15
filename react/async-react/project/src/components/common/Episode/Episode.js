import React from 'react';
import { Card, Button } from 'react-bootstrap';

export const Episode = ({ name, episode, id, onClick }) => {
    return (<Card>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{episode}</Card.Text>
            <Button onClick={() => onClick(id)}>See Characters</Button>
        </Card.Body>
    </Card>);
};