import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import classNames from 'classnames';
import Dropdown from './Dropdown';
import SelectRegion from './SelectRegion';


export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const items = this.props.items !== undefined ? this.props.items : [];

        return (
            <header className="by-header cf">
                <nav className="by-header_left">
                    <ul className="by-menu by-menu--horizontal dn-ns">
                        <li>
                            <Dropdown>
                                <a className="by-dropdown_trigger" href="javascript:;">Movies</a>
                                <div className="by-dropdown_content">
                                    <ul className="by-menu by-menu--vertical">
                                        <li><a href="javascript:;">Cinemas</a></li>
                                    </ul>
                                </div>
                            </Dropdown>
                        </li>
                    </ul>
                    <ul className="by-menu by-menu--horizontal dn db-ns">
                        {this.props.menu.map(function(item, i) {
                            var link = '/' + item.id;
                            return (
                                <li key={i}
                                    className={classNames({'active': i == this.state.active})}
                                    onClick={(i) => this.handleClick.bind(i)}>
                                    <Link to={link}>{item.name}</Link>
                                </li>
                            );
                        }, this)}
                    </ul>
                </nav>
                <div className="by-header_right">
                    <ul className="by-menu by-menu--horizontal">
                        <li>
                            <Dropdown>
                                <a className="by-dropdown_trigger" href="javascript:;">Today</a>
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
                        <li>
                            <SelectRegion />
                        </li>
                    </ul>
                </div>
            </header>
        );
    }

}

Header.propTypes = { menu: React.PropTypes.array };
