import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const DisplayCard = ({title, description, buttonText, url, handleClick}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" onClick={handleClick}>{buttonText}</Button>
            </Card.Body>
        </Card> 
    )
}

export default DisplayCard;