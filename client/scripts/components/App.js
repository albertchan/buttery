import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import i18n from 'i18next-client';
import Menu from '../../../common/components/Menu.jsx';


export default class App extends React.Component {

    render() {
        var menuArray = i18n.t('menu', {returnObjectTrees: true}),
            title = i18n.t('app.name');

        return (
            <div title={title}>
                <h1>{title}</h1>
                <p className="subheading">{i18n.t('app.tagline')}</p>
                <Menu items={menuArray} />
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }

}
