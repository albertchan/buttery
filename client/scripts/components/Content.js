import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router'
import i18n from 'i18next-client';
import Menu from '../../../common/components/Menu.js';


export default class Content extends React.Component {

    constructor(props) {
        super(props);

        this.state = {locale: 'en'};
    }

    render() {
        var menuArray = i18n.t('menu', {returnObjectTrees: true}),
            title = i18n.t('app.name');

        return (
            <div title={title}>
                <h1>Buttery</h1>
                <p className="subheading">Movie information, show times and more.</p>
                <Menu items={menuArray} />
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }

}
