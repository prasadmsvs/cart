import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DisplayCard from './../components/DisplayCard';
import { useHistory } from 'react-router';

const Home = () => {
    let history = useHistory();
    return (
        //grid with basic categories as cards
        <Container fluid>
            <Row>
                <Col>
                    <DisplayCard 
                        title={"Men's Accessories"} 
                        description={"Premium designs in Men's clothing"} 
                        buttonText={"Checkout Designs"} 
                        url={"/img/man.jpg"} 
                        handleClick={()=>{history.push("/designs/1")}}
                    />
                </Col>
                <Col>
                    <DisplayCard 
                        title={"Women's Accessories"} 
                        description={"Premium designs in Women's clothing"} 
                        buttonText={"Checkout Designs"} 
                        url={"/img/woman.jpg"} 
                        handleClick={()=>{history.push("/designs/2")}}
                    />
                </Col>
                <Col>
                    <DisplayCard 
                        title={"Children Accessories"}
                        description={"Premium designs in Children clothing"} 
                        buttonText={"Checkout Designs"} url={"/img/child.jpg"}
                        handleClick={()=>{history.push("/designs/3")}}
                    />
                </Col>
                <Col>
                    <DisplayCard 
                        title={"Sports Accessories"} 
                        description={"Premium designs in Sports clothing"} 
                        buttonText={"Checkout Designs"} 
                        url={"/img/sports.jpg"} 
                        handleClick={()=>{history.push("/designs/4")}}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;