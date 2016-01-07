import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import i18n from 'i18next-client';
import { resetErrorMessage } from '../actions';
import Menu from '../../../common/components/Menu';
import Dropdown from '../../../common/components/Dropdown';


export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children, inputValue } = this.props;

        var menuArray = i18n.t('menu', {returnObjectTrees: true}),
            title = i18n.t('app.name');

        return (
            <div title={title}>
                <header className="by-header cf">
                    <nav className="by-header_left">
                        <ul className="by-menu by-menu--horizontal">
                            <li><a href="javascript:;">Movies</a></li>
                            <li><a href="javascript:;">Cinemas</a></li>
                        </ul>
                    </nav>
                    <div className="by-header_right">
                        <ul className="by-menu by-menu--horizontal">
                            <li>
                                <Dropdown>
                                    <a className="by-dropdown_trigger dasda" href="javascript:;">Today</a>
                                    <div className="by-dropdown_content">
                                        <ul className="by-menu by-menu--vertical">
                                            <li><a href="javascript:;">Tomorrow</a></li>
                                            <li><a href="javascript:;">Tomorrow</a></li>
                                            <li><a href="javascript:;">Tomorrow</a></li>
                                            <li><a href="javascript:;">Tomorrow</a></li>
                                        </ul>
                                    </div>
                                </Dropdown>
                            </li>
                            <li><a href="javascript:;">Hong Kong</a></li>
                        </ul>
                    </div>
                </header>
                <h1>{title}</h1>
                <p className="subheading">{i18n.t('app.tagline')}</p>
                <Menu items={menuArray} />
                <div className="content">
                    {children}
                </div>
            </div>
        );
    }

}

App.propTypes = {
    // Injected by React Redux
    errorMessage: PropTypes.string,
    resetErrorMessage: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    // Injected by React Router
    children: PropTypes.node
};

function mapStateToProps(state) {
    return {
        errorMessage: state.errorMessage,
        inputValue: state.router.location.pathname.substring(1)
    }
}

export default connect(mapStateToProps, {
    resetErrorMessage,
    pushState
})(App);
