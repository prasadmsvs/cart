import React from 'react'
import { Container, Accordion } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Cart = () => {
    const products = useSelector(state => state.cart.products); //products added to cart
    return (
        // accordion of products added to cart
        <Container fluid>
            <Accordion>
                {
                    products.map((product, index) => {
                        return <Accordion.Item eventKey={index} key={index}>
                            <Accordion.Header>
                                <div className="d-flex">
                                    {product.name}
                                </div>
                                <div className="ms-auto">
                                    ${product.price}
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                {product.category}
                            </Accordion.Body>
                        </Accordion.Item>
                    })
                }

            </Accordion>
        </Container>
    );
}

export default Cart;