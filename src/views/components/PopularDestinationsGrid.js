import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from './bootstrap/';

const destinationsData = [
    {
        banner: 'http://localhost:4100/assets/images/destinations/moscow.jpg',
        destination: 'moscow',
    },
    {
        banner: 'http://localhost:4100/assets/images/destinations/dubai.jpg',
        destination: 'dubai',
    },
    {
        banner: 'http://localhost:4100/assets/images/destinations/paris.jpg',
        destination: 'Paris',
    },
    {
        banner: 'http://localhost:4100/assets/images/destinations/new-york.jpg',
        destination: 'new york',
    },
];

const Wrapper = styled.section`
    padding: 80px 0px 65px;
`;

const Title = styled.h2`
    text-align:center;
    margin-bottom: 40px;
`;

const Overlay = styled.div`
    text-align:center;
    background-color: #fc5e32;
    padding:15px;
    font-weight: 600;
    color: #fff;
    margin-bottom: -46px;
    transition: all 0.25s ease;
`;

const Item = styled.div`
    height: 340px;
    position: relative;
    border-radius: 3px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    margin-bottom: 15px;
    cursor: pointer;
    &:hover ${Overlay}{
        margin-bottom: 0;
    }
`;

const Destinations = styled.div`
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    padding-bottom: 30px;
    position:relative;
    z-index:1;
    &:before {
        content:' ';
        position:absolute;
        background: -webkit-linear-gradient(90deg, #242e3f 0%, rgba(36, 46, 63, 0) 100%);
        background: -moz-linear-gradient(90deg, #242e3f 0%, rgba(36, 46, 63, 0) 100%);
        background: -o-linear-gradient(90deg, #242e3f 0%, rgba(36, 46, 63, 0) 100%);
        background: -ms-linear-gradient(90deg, #242e3f 0%, rgba(36, 46, 63, 0) 100%);
        background: linear-gradient(0deg, #242e3f 0%, rgba(36, 46, 63, 0) 100%);
        height: 90px;
        left:0;
        right:0;
        bottom: 0;
        z-index: -1;
    }
`;

function PopularDestinationsGrid(props) {
    return (
        <Wrapper>
            <Container>
                <Title>Popular Destinations</Title>
                <Row>
                    {
                        destinationsData.map((dest,k)=>{
                            return (
                                <Col sm={3} key={k}>
                                    <Item style={{backgroundImage: "url('"+dest.banner+"')"}} className="d-flex justify-content-end flex-column">
                                        <Destinations className="text-capitalize">{dest.destination}</Destinations>
                                        <Overlay>
                                            Search Flights
                                        </Overlay>
                                    </Item>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </Wrapper>
    )
}

export default PopularDestinationsGrid;