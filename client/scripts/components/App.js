import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import i18n from 'i18next-client';
import { resetErrorMessage } from '../actions';

import Header from '../../../common/components/Header';
import Menu from '../../../common/components/Menu';


// connect with decorator
@connect(mapStateToProps, {resetErrorMessage, pushState})
export default class App extends Component {
    static propTypes = {
        errorMessage: PropTypes.string,
        resetErrorMessage: PropTypes.func.isRequired,
        pushState: PropTypes.func.isRequired,
        inputValue: PropTypes.string.isRequired,
        children: PropTypes.node
    };

    constructor(props) {
        super(props)
    }

    render() {
        const { children, inputValue } = this.props;

        var menuArray = i18n.t('menu', {returnObjectTrees: true}),
            title = i18n.t('app.name');

        return (
            <div>
                <Header menu={menuArray} />
                <main className="content">
                    {children}
                </main>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        errorMessage: state.errorMessage,
        inputValue: state.router.location.pathname.substring(1)
    }
}

// connect without decorator
//export default connect(mapStateToProps, mapDispatchToProps(dispatch))(App);
