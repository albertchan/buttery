import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import i18n from 'i18next-client';
import { resetErrorMessage } from '../actions';
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
            <div title={title}>
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

function mapStateToProps(state) {
    return {
        errorMessage: state.errorMessage,
        inputValue: state.router.location.pathname.substring(1)
    }
}

// connect without decorator
//export default connect(mapStateToProps, mapDispatchToProps(dispatch))(App);
