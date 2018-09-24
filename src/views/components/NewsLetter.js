import React from 'react';
import { Container, Row, Col, FormGroup,  InputGroup, InputGroupAddon, Input, Button } from './bootstrap/';
import { APP_URL } from '../../constants/actionTypes';

function NewsLetter(props) {
    return (
        <section className="py-5 d-flex align-items-center" style={style.banner}>
            <Container>
                <Row>
                    <Col sm={{size:8, offset:2}} >
                        <h3 className="text-center text-white mb-4">Quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat.</h3>
                        <FormGroup>
                            <InputGroup>
                                <Input placeholder="Type email address" style={style.Input}/>
                                <InputGroupAddon addonType="append">
                                    <Button color="primary" style={{width: 154}}>
                                        SUBMIT
                                    </Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

let style = {
    banner: {
        backgroundImage : "url('"+APP_URL+"/assets/images/bg/bg-1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 347
    },
    Input: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    }
}

export default NewsLetter;