import React from 'react';
import { Container, Row, Col } from './bootstrap/';
import moment from 'moment';
import styled from 'styled-components';
import { APP_NAME } from '../../constants/actionTypes';

const Wrapper = styled.section`
    padding: 80px 0 65px;
    background-color: #fff;
`;

const Heading = styled.h2`
    text-align: center;
    margin-bottom: 60px;
`;

const Para = styled.p`
    color:  rgba(45, 45, 45, 1);
    font-weight: 400;
    line-height: 30px;
`;

const PublishBy = styled.p`
    color:  #939599;
    font-weight: 400;
    line-height: 48px;
`;

const Title = styled.h4`
    color:  #1b1b1c;
    font-size: 23.98px;
    font-weight: 400;
    line-height: 42px;
`;

const Item = styled.div`
    margin-bottom: 15px;
`;

const blogData = [
    {
        title: 'Enimad veniam lamco quisnostrd alito',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        published_by: "2017-10-08T23:09:16+05:30",
        banner: 'http://localhost:4100/assets/images/blogs/post-1.png',
    },
    {
        title: 'Enimad veniam lamco quisnostrd alito',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        published_by: "2017-10-08T23:09:16+05:30",
        banner: 'http://localhost:4100/assets/images/blogs/post-2.png',
    }
]

function BlogGrid(props) {
    return (
        <Wrapper>
            <Container>
                <Heading >{APP_NAME} Blog</Heading>
                <Row>
                    {
                        blogData.map((post, k) => {
                            return (
                                <Col sm={6} key={k}>
                                    <Item className="shadow d-flex align-items-center">
                                        <div className="post-banner">
                                            <img src={post.banner} alt="" />
                                        </div>
                                        <div className="post-content p-3">
                                            <PublishBy>On {moment(post.published_by).format('MMMM DD, YYYY')}</PublishBy>
                                            <Title>{post.title}</Title>
                                            <Para>{post.description}</Para>
                                        </div>
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

export default BlogGrid;