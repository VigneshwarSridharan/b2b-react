import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Button } from '../components/bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PopularRoutesData = [
    {
        banner: 'http://localhost:4100/assets/images/routes/img-1.jpg',
        title: 'Amesterdam, Netherlands',
        description: 'MAA Chennai to AMS Amsterdam 31 May to June 8 (9 Days)',
        fare: '48,499',
        currency: 'INR'
    },
    {
        banner: 'http://localhost:4100/assets/images/routes/img-2.jpg',
        title: 'Dublin, Ireland',
        description: 'MAA Chennai to AMS Amsterdam 31 May to June 8 (9 Days)',
        fare: '48,499',
        currency: 'INR'
    },
    {
        banner: 'http://localhost:4100/assets/images/routes/img-3.jpg',
        title: 'Tokyo, Japan',
        description: 'MAA Chennai to AMS Amsterdam 31 May to June 8 (9 Days)',
        fare: '48,499',
        currency: 'INR'
    },
];

const Wrapper = styled.section`
    padding: 80px 0 65px;
`;
const Title = styled.h2`
    text-align: center;
    margin-bottom: 40px;
`;
const Banner = styled.div`
    height: 160px;
    background-size: 100%;
    background-position: center;
    transition: all 0.25s ease;
`;
const Item = styled.div`
    background-color: #ffffff;
    &:hover ${Banner} {
        background-size: 120%;
    }
`;

const Content = styled.div`
    padding: 30px;
    border: solid 1px #e6e7eb;
    border-top: none;
`;
const Para = styled.p`
    
`;
const Fare = styled.p`
    font-family: HKGrotesk;
    color:  #1d1d1d;
    font-size: 16px;
    font-weight: 500;
`;

const Sbutton = styled(Button)`
    font-size: 12px;
    font-weight: 700;
    padding: 14px 16px;
`;

function PopularRoutesGrid(props) {
    return (
        <Wrapper>
            <Container>
                <Title>Popular Routes</Title>
                <Row>
                    {
                        PopularRoutesData.map((roues, k) => {
                            return (
                                <Col sm={4} key={k}>
                                    <Item>
                                        <Banner style={{backgroundImage:"url('"+roues.banner+"')"}}></Banner>
                                        <Content>
                                            <h4>{roues.title}</h4>
                                            <p>{roues.description}</p>
                                            <Fare> <FontAwesomeIcon icon={roues.currency} /> {roues.fare}</Fare>
                                            <Sbutton color="primary">FIND FLIGHTS</Sbutton>
                                        </Content>
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

export default PopularRoutesGrid;