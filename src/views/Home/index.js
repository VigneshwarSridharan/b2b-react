import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
    HOME_PAGE_UNLOADED,
} from '../../constants/actionTypes';
import { Button, Container } from '../components/bootstrap/';
import NewsLetter from '../components/NewsLetter';
import BlogGrid from '../components/BlogGrid';
import FeedbackGrid from '../components/FeedbackGrid';
import WhyBrandGrid from '../components/WhyBrandGrid';
import PopularDestinationsGrid from '../components/PopularDestinationsGrid';
import PopularRoutesGrid from '../components/PopularRoutesGrid';
import DealsAndOfferGrid from '../components/DealsAndOfferGrid';
import PromoFlashMessage from '../components/PromoFlashMessage';
import Products from '../components/products';

const Promise = global.Promise;

const mapStateToProps = state => ({
    ...state.home,
    appName: state.common.appName,
    token: state.common.token
});

const mapDispatchToProps = dispatch => ({
    onUnload: () =>
        dispatch({ type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
    componentWillMount() {

    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        return (
            <div className="home-page">
                <Products />
                <PromoFlashMessage />
                <DealsAndOfferGrid />
                <Container>
                    <hr />
                </Container>
                <PopularRoutesGrid />
                <Container>
                    <hr />
                </Container>
                <PopularDestinationsGrid />
                <WhyBrandGrid />
                <FeedbackGrid />
                <BlogGrid />
                <NewsLetter />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
