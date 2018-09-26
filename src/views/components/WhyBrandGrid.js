import React from 'react';
import styled from 'styled-components';
import { APP_URL, APP_NAME } from '../../constants/actionTypes';
import { Container, Row, Col } from '../components/bootstrap/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { iconHotel, iconTag, iconBridge, iconCoins, iconFlight } from './icons/';

library.add(iconHotel, iconTag, iconBridge, iconCoins, iconFlight);

const whyBrandData = [
    {
        icon: 'hotel',
        content: 'Book Cheap Air tickets to any destination across the world. Best Price Guarantee.'
    },
    {
        icon: 'tag',
        content: 'Choose from more than 1000 Best rated Hotels. From cheap hotels to luxurious resorts.'
    },
    {
        icon: 'bridge',
        content: 'Get the Best deals on Holiday Packages to multiple destinations.'
    },
    {
        icon: 'tag',
        content: 'Find Budget Airlines and Full service Airlines in one screen.'
    },
    {
        icon: 'coins',
        content: 'Experience the convenience and savings.'
    },
    {
        icon: 'flight',
        content: 'Book Airline tickets from a wide choice of Airlines.'
    },
];


const Wrppaer = styled.section`
    padding: 80px 0;
    background-image: url('${APP_URL}/assets/images/bg/bg-2.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    z-index:1;
    &:before {
        content: '';
        background: -webkit-linear-gradient(-45deg, #01a0cd 0%, #03708f 100%);
        background: -moz-linear-gradient(-45deg, #01a0cd 0%, #03708f 100%);
        background: -o-linear-gradient(-45deg, #01a0cd 0%, #03708f 100%);
        background: -ms-linear-gradient(-45deg, #01a0cd 0%, #03708f 100%);
        background: linear-gradient(135deg, #01a0cd 0%, #03708f 100%);
        position:absolute;
        left:0;
        top:0;
        right:0;
        bottom: 0;
        opacity:0.95;
        z-index:-1;
    }
    `
const Icon = styled.div`
    margin-bottom: 40px;
    transform-origin: left;
    transition: all .3s ease;
`;

const Para = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
`;

const Item = styled.div`
    margin-bottom: 80px;
    &:hover ${Icon} {
        transform:scale(1.3)
    }
`;

const Title = styled.h2`
    margin-bottom: 50px;
`;

function WhyBrandGrid(props) {
    return (
        <Wrppaer>
            <Container>
                <Title className="text-white text-center">Why {APP_NAME}?</Title>
                <Row>
                    {
                        whyBrandData.map((param, k) => {
                            return (
                                <Col sm={4} key={k}>
                                    <Item>
                                        <Icon>
                                            <FontAwesomeIcon icon={param.icon} color="#fff" size="3x"/>
                                        </Icon>
                                        <Para className="text-white">{param.content}</Para>
                                    </Item>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </Wrppaer>
    )
}

export default WhyBrandGrid;