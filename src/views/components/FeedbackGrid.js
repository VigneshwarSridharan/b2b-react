import React from 'react';
import { Container, Row, Col, Button } from './bootstrap/';
import styled from 'styled-components';


const feedbackData = [
    {
        profile_pic: 'http://localhost:4100/assets/images/profile-pic/j.png',
        comment: 'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
        full_name: 'Jonnathan Stess ',
        email: 'Jonnathan@gmail.com'
    },
    {
        profile_pic: 'http://localhost:4100/assets/images/profile-pic/d.png',
        comment: 'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
        full_name: 'Jonnathan Stess ',
        email: 'Jonnathan@gmail.com'
    },
];

const Wrapper = styled.section`
    padding: 80px 0;
`;

const Comment = styled.p`
    line-height: 26px;
    &:before,&:after {
        content: '"';
        color:  rgba(45, 45, 45, 0.1);
        font-size: 83px;
        font-weight: 700;
        position:absolute;
        font-style:italic;
        line-height:1;
    }
    &:before {
        transform: rotateY(180deg);
        margin-top: -15px;
        margin-left: -2px;
    }
    &:after {
        margin-left: -36px;
        margin-top: -7px;
    }
    color:  rgba(45, 45, 45, 1);
`;
const FeedbackWrapper = styled.div`
    padding:30px;
`

const FullName = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0;
`;

const FeedbackButton = styled.div`
    margin-top: 70px;
    text-align: center;
`;

function FeedbackGrid(props) {
    return (
        <Wrapper>
            <Container>
                <Row>
                    {
                        feedbackData.map((feed, k) => {
                            return (
                                <Col sm={6} key={k}>
                                    <FeedbackWrapper className="d-flex bg-white mb-3 align-items-center">
                                        <div className="pr-4">
                                            <img src={feed.profile_pic} alt="" />
                                        </div>
                                        <div>
                                            <Comment>{feed.comment}</Comment>
                                            <FullName>- {feed.full_name}</FullName>
                                        </div>
                                    </FeedbackWrapper>
                                </Col>
                            )
                        })
                    }
                </Row>
                <FeedbackButton>
                    <Button color="primary">WRITE FEEDBACK</Button>
                </FeedbackButton>
            </Container>
        </Wrapper>
    )
}

export default FeedbackGrid;