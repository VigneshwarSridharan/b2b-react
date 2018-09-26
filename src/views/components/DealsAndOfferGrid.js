import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Button } from '../components/bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DealsAndOfferGridData = [
    {
        banner: 'http://localhost:4100/assets/images/deals/air-asia.png',
        title: 'Lorem Ipsum deals',
        description: 'Enim minim veniam, nostrud exercitation ullamco laboris nisi aliquip consequat. lorem ipsum odlos',
    },
    {
        banner: 'http://localhost:4100/assets/images/deals/emirates.png',
        title: 'Lorem Ipsum deals',
        description: 'Enim minim veniam, nostrud exercitation ullamco laboris nisi aliquip consequat. lorem ipsum odlos',
    },
    {
        banner: 'http://localhost:4100/assets/images/deals/indigo.png',
        title: 'Lorem Ipsum deals',
        description: 'Enim minim veniam, nostrud exercitation ullamco laboris nisi aliquip consequat. lorem ipsum odlos',
    },
];

const Wrapper = styled.section`
    padding: 80px 0 65px;
`;
const Title = styled.h2`
    text-align: center;
    margin-bottom: 40px;
`;

const Overlay = styled.div`
    color: #fff;
    background-color: rgba(0,0,0,0.6);
    font-size: 24px;
    opacity:0;
    transition: all .5s ease;
`;

const Banner = styled.div`
    height: 160px;
    background-size: 100%;
    background-position: center;
    
`;


const Item = styled.div`
    background-color: #ffffff;
    &:hover ${Overlay} {
        opacity: 1;
    }
`;

const Content = styled.div`
    padding: 30px;
    border: solid 1px #e6e7eb;
    border-top: none;
`;

function DealsAndOfferGrid(props) {
    return (
        <Wrapper>
            <Container>
                <Title>Deals and Offers</Title>
                <Row>
                    {
                        DealsAndOfferGridData.map((roues, k) => {
                            return (
                                <Col sm={4} key={k}>
                                    <Item>
                                        <Banner className="d-flex" style={{backgroundImage:"url('"+roues.banner+"')"}}>
                                            <Overlay className="d-flex w-100 align-items-center justify-content-center">
                                                <FontAwesomeIcon icon="link" />
                                            </Overlay>
                                        </Banner>
                                        <Content>
                                            <h4>{roues.title}</h4>
                                            <p>{roues.description}</p>
                                            <Button color="secondary">DEALSCODE</Button>
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

export default DealsAndOfferGrid;