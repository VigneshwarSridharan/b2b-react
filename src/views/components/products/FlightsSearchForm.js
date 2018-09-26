import React from 'react';
import styled from 'styled-components';
import { APP_URL } from '../../../constants/actionTypes';
import { Button } from '../bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrpper = styled.div`
    min-height: 650px;
    background-image: url('${APP_URL}/assets/images/bg/bg-3.png');
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
`;

const BannerText = styled.h1`
    margin-bottom: 70px;
`;

const SearchFromWrapper = styled.div`
    margin: 30px 0;
    border: solid 1px #e6e7eb;
    border-radius: 3px;
`;

const SearchFieldItemWrapper = styled.div`
    border-right: solid 1px #e6e7eb;
    position: relative;
`;

const AirportSelection = styled.div`
    max-width: 180px;
    input {
        height:72px;
        max-width: 180px;
        padding: 20px 32px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
        border:none;
        outline: none;
        font-weight:500;
    }
`;

const SwapAirport = styled.div`
    width: 36px;
    height:36px;
    line-height:36px;
    text-align: center;
    background-color: #fff;
    border: solid 1px #e6e7eb;
    color: #e6e7eb;
    position: absolute;
    right:-18px;
    bottom: 0;
    top:0;
    margin:auto;
    z-index:10;
`;

function FlightsSearchForm(props) {
    return (
        <Wrpper className="d-flex justify-content-center flex-column">
            <div>
                <BannerText>Fly from <span className="text-primary">anywhere</span>, Best price guaranteed.</BannerText>
                <Button color="primary" size="s1" className="mr-2">RETURN</Button>
                <Button outline color="light-gray" size="s1" className="mr-2">ONE-WAY</Button>
                <Button outline color="light-gray" size="s1" className="mr-2">MULTICITY</Button>
                <Button outline color="light-gray" size="s1" className="mr-2">EXPLORE</Button>
                <SearchFromWrapper className="d-flex">
                    <SearchFieldItemWrapper>
                        <AirportSelection>
                            <input type="text" placeholder="From?"/>
                        </AirportSelection>
                        <SwapAirport>
                            <FontAwesomeIcon icon="swap" />
                        </SwapAirport>
                    </SearchFieldItemWrapper>
                    <SearchFieldItemWrapper>
                        <AirportSelection>
                            <input type="text" placeholder="To?"/>
                        </AirportSelection>
                    </SearchFieldItemWrapper>
                </SearchFromWrapper>
            </div>
        </Wrpper>
    )
}

FlightsSearchForm.icon = 'flight-o';
FlightsSearchForm.productName = 'Flight';

export default FlightsSearchForm;