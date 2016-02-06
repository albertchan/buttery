import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next';
//import i18n from 'i18next-client';
import classNames from 'classnames';
import Dropdown from './Dropdown';
import SelectRegion from './SelectRegion';


export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    handleClick(e) {

    }

    render() {
        const items = this.props.items !== undefined ? this.props.items : [];

        return (
            <header className="by-header cf">
                <nav className="by-header_left">
                    <ul className="by-list by-list--horizontal dn-ns">
                        <li>
                            <Dropdown>
                                <a className="by-dropdown_trigger" href="javascript:;">Movies</a>
                                <div className="by-dropdown_content">
                                    <ul className="by-list by-list--vertical">
                                        <li><a href="javascript:;">Cinemas</a></li>
                                    </ul>
                                </div>
                            </Dropdown>
                        </li>
                    </ul>
                    <ul className="by-list by-list--horizontal dn db-ns">
                        {this.props.menu.map(function(item, i) {
                            var link = '/' + item.id;
                            return (
                                <li key={i}
                                    className={classNames({'active': i == this.state.active})}>
                                    <Link to={link}>{item.name}</Link>
                                </li>
                            );
                        }, this)}
                    </ul>
                </nav>
                <div className="by-header_right">
                    <ul className="by-list by-list--horizontal">
                        <li>
                            <Dropdown>
                                <a className="by-dropdown_trigger" href="javascript:;">Today</a>
                                <div className="by-dropdown_content">
                                    <ul className="by-list by-list--vertical">
                                        <li><a href="javascript:;">Tomorrow</a></li>
                                        <li><a href="javascript:;">Tomorrow</a></li>
                                        <li><a href="javascript:;">Tomorrow</a></li>
                                        <li><a href="javascript:;">Tomorrow</a></li>
                                    </ul>
                                </div>
                            </Dropdown>
                        </li>
                        <li>
                            <SelectRegion items={this.props.region} handleChange={this.props.changeRegion.bind(this)} />
                        </li>
                    </ul>
                </div>
            </header>
        );
    }

}

Header.propTypes = {
    menu: React.PropTypes.array.isRequired,
    region: React.PropTypes.array.isRequired,
    changeRegion: React.PropTypes.func.isRequired
};
