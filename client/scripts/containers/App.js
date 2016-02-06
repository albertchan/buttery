import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import i18n from 'i18next-client';
import { changeRegion, resetErrorMessage } from '../actions';
import { fetchCinemasIfNeeded } from '../actions/cinemaActions';
import { fetchMoviesIfNeeded } from '../actions/movieActions';

import Header from '../../../common/components/Header';
import Menu from '../../../common/components/Menu';


// connect with decorator
@connect(mapStateToProps, {
    changeRegion,
    fetchCinemasIfNeeded,
    fetchMoviesIfNeeded,
    resetErrorMessage,
    pushState
})
export default class App extends Component {
    static propTypes = {
        errorMessage: PropTypes.string,
        changeRegion: PropTypes.func.isRequired,
        fetchCinemasIfNeeded: PropTypes.func.isRequired,
        fetchMoviesIfNeeded: PropTypes.func.isRequired,
        resetErrorMessage: PropTypes.func.isRequired,
        pushState: PropTypes.func.isRequired,
        inputValue: PropTypes.string.isRequired,
        children: PropTypes.node
    };

    constructor(props) {
        super(props)
    }

    changeRegion(id) {
        let routes = this.props.inputValue.split('/'),
            route = routes[0];
        this.props.changeRegion(id);

        switch(route) {
            case 'cinemas':
                this.props.fetchCinemasIfNeeded(id);
                break;
            case 'movies':
                this.props.fetchMoviesIfNeeded(id);
                break;
            default:
                break;
        }
    }

    render() {
        const { children, inputValue } = this.props;

        var title = i18n.t('app.name'),
            arrayMenu = i18n.t('menu', {returnObjectTrees: true}),
            arrayRegion = [
                {id: 1, name: 'Hong Kong'},
                {id: 2, name: 'Kownloon'},
                {id: 3, name: 'New Territories'}
            ];

        return (
            <div>
                <Header menu={arrayMenu}
                        region={arrayRegion}
                        changeRegion={this.changeRegion.bind(this)} />
                <main className="content">
                    {children}
                </main>
            </div>
        );
    }

}

function mapStateToProps(state) {
    const { changeRegion } = state;

    return {
        changeRegion: state.changeRegion,
        errorMessage: state.errorMessage,
        fetchCinemasIfNeeded: state.fetchCinemasIfNeeded,
        fetchMoviesIfNeeded: state.fetchMoviesIfNeeded,
        inputValue: state.router.location.pathname.substring(1)
    }
}
