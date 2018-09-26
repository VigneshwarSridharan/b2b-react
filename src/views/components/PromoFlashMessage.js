import React from 'react';
import { Container, Button } from '../components/bootstrap/';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import reactStringReplace  from 'react-string-replace';

const promoData = {
    icon: 'http://localhost:4100/assets/images/gift.png',
    title: 'Earn Instantly! Guaranteed wallet rewards up to INR 555 !',
    description: 'Just login and claim wallet rewards up to INR 555. Login now before the offer expires!',
}

function stingToIcon(str){
    return reactStringReplace(promoData.title,'INR',(match,k) => {
        return (
            <FontAwesomeIcon icon={match} key={k} />
        )
    })
}

const shake = keyframes`
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
        transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
        transform: translate3d(4px, 0, 0);
    }
`;

const Section = styled.section`
    position:relative;
    margin-top: -50px;
`;

const Wrapper = styled.div`
    padding: 18px 30px;
    border-radius: 3px;
`;
const GiftIcon = styled.div`
    margin-right: 30px;
    animation: ${shake} 1.2s ease infinite;
`;
const OfferContent = styled.div``;
const Title = styled.h4``;
const Para = styled.p``;

function PromoFlashMessage(props) {
    return (
        <Section>
            <Container>
                <Wrapper className="shadow d-flex bg-white align-items-center jus">
                    <GiftIcon>
                        <img src={promoData.icon} alt="" />
                    </GiftIcon>
                    <OfferContent className="w-100">
                        <Title className="text-primary mb-1">{stingToIcon(promoData.title)}</Title>
                        <Para className="m-0">{stingToIcon(promoData.description)}</Para>
                    </OfferContent>
                    <div>
                        <Button color="secondary">INVITE</Button>
                    </div>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default PromoFlashMessage