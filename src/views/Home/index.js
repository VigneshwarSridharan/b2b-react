import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
    HOME_PAGE_UNLOADED,
} from '../../constants/actionTypes';
import { Button } from '../components/bootstrap/';
import NewsLetter from '../components/NewsLetter';
import BlogGrid from '../components/BlogGrid';

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
                <div className="container">
                    <Button color="primary">RETURN</Button> {' '}
                    <button className="btn btn-primary">Primary</button>
                    <button className="btn btn-primary">Primary</button>
                </div>
                <BlogGrid />
                <NewsLetter />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
