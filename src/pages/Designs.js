import React, { useState, useEffect } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { add } from './../store/cart/cartReducer';
import DisplayCard from '../components/DisplayCard';
import { useHistory, useParams } from 'react-router';

function chunk(arr, chunkSize) {
    var result = [];
    for (var i=0,len=arr.length; i<len; i+=chunkSize)
        result.push(arr.slice(i,i+chunkSize));
    return result;
}
const Designs = () => {
    const [products, setproducts] = useState([]);
    let { id } = useParams();
    const designs = useSelector(state => state.designs.products); // all products
    const dispatch = useDispatch();
    let history = useHistory();

    //Based on the path parameter filter the products
    useEffect(() => {
        if(id === "all"){
            setproducts(designs);
        } else {
            setproducts(designs.filter(design => { return design.catId === parseInt(id)}));
        }
        
    }, [designs, id])

    // add product on click of Add button
    const handleClick = (designId) => {
        const filtered = products.filter(item => item.id === designId);
        dispatch(add(filtered[0]));
    };
    return (
        <Container fluid className="d-flex">
            {/* categories list. Higlight based on the path parameter*/}
            <ListGroup>
                <ListGroup.Item 
                    active={id==="all"}
                    onClick={()=>{history.push("/designs/all")}}
                >
                    All
                </ListGroup.Item>
                <ListGroup.Item 
                    active={id==="1"}
                    onClick={()=>{history.push("/designs/1")}}
                >
                    Men's
                </ListGroup.Item>
                <ListGroup.Item 
                    active={id==="2"}
                    onClick={()=>{history.push("/designs/2")}}
                >
                    Women's
                </ListGroup.Item>
                <ListGroup.Item 
                    active={id==="3"}
                    onClick={()=>{history.push("/designs/3")}}
                >
                    Children
                </ListGroup.Item>
                <ListGroup.Item 
                    active={id==="4"}
                    onClick={()=>{history.push("/designs/4")}}
                >
                    Sports
                </ListGroup.Item>
            </ListGroup>
            <Container fluid>
                {/* products grid */}
                {
                    chunk(products, 3).map((designs, ind)=>{
                        return <Row key={ind} className="mb-1">
                            {
                                designs.map((design, index) => {
                                    return <Col key={index} lg={4} sm={12}>
                                        <DisplayCard title={design.name} description={design.category} buttonText={"Add to cart"} handleClick={()=>{handleClick(design.id)}}></DisplayCard>
                                    </Col>
                                })
                            }
                        </Row>
                    })
                }
            </Container>
        </Container>
    )
}

export default Designs;