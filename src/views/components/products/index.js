import React from 'react';
import Flight from './FlightsSearchForm';
import Hotel from './HotelsSearchForm';
import Bus from './BusSearchForm';
import Car from './CarSearchForm';
import Cruise from './CruiseSearchForm';
import Insurance from './InsuranceSearchForm';
import Vacation from './VacationSearchForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Container } from '../../components/bootstrap/';

const listofProducts = [Flight, Hotel, Bus, Car, Cruise, Insurance, Vacation]

const Wrapper = styled.section`
    background-color: #fff;
`;
const ProductsNavWrappwr = styled.section`
    position: relative;
    z-index:1;
    &::after {
        content: '';
        position:absolute;
        width:100%;
        border-bottom: solid 1px #e6e7eb;
        bottom: 0;
        z-index:-1;
    }
`;

const ProductsNav = styled.div`

`;
const ProductsNavItem = styled.div`
    padding: 20px 25px;
    flex:1;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    border-left: solid 1px #e6e7eb;
    border-bottom: solid 1px #e6e7eb;
    transition: all .3s ease;
    &:last-child {
        border-right: solid 1px #e6e7eb;
    }
    &.active, &:hover {
        border-bottom-width: 3px;
        border-bottom-color:  #fc5e32;
        color: #fc5e32;
    }
`;
const Icon = styled.i`
    font-size: 24px;
    margin-right: 10px;
`;

function Products(props) {
    return (
        <Wrapper>
            <ProductsNavWrappwr>
                <Container>
                    <ProductsNav className="d-flex">
                        {
                            listofProducts.map((product, k) => {
                                return (
                                    <ProductsNavItem className={product.productName == 'Flight' ? 'active' : ''} key={k}>
                                        <Icon>
                                            <FontAwesomeIcon icon={product.icon} size="lg" style={{ fontSize: 'inherit' }} />
                                        </Icon>
                                        {product.productName}
                                    </ProductsNavItem>
                                )
                            })
                        }
                    </ProductsNav>
                </Container>
            </ProductsNavWrappwr>
            <Container>
                <div>
                    <Flight />
                </div>
            </Container>
        </Wrapper>
    )
}

export {
    Flight,
    Hotel,
    Bus,
    Car,
    Cruise,
    Insurance,
    Vacation
}

export default Products