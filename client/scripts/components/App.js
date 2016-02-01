import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import i18n from 'i18next-client';
import { changeRegion, resetErrorMessage } from '../actions';
import { fetchCinemasIfNeeded } from '../actions/cinemaActions';

import Header from '../../../common/components/Header';
import Menu from '../../../common/components/Menu';


// connect with decorator
@connect(mapStateToProps, {changeRegion, fetchCinemasIfNeeded, resetErrorMessage, pushState})
export default class App extends Component {
    static propTypes = {
        errorMessage: PropTypes.string,
        changeRegion: PropTypes.func.isRequired,
        fetchCinemasIfNeeded: PropTypes.func.isRequired,
        resetErrorMessage: PropTypes.func.isRequired,
        pushState: PropTypes.func.isRequired,
        inputValue: PropTypes.string.isRequired,
        children: PropTypes.node
    };

    constructor(props) {
        super(props)
    }

    changeRegion(id) {
        let routes = this.props.inputValue.split('/');
        this.props.changeRegion(id);

        if (routes[0] === 'cinemas') {
            this.props.fetchCinemasIfNeeded(id);
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
        inputValue: state.router.location.pathname.substring(1)
    }
}
