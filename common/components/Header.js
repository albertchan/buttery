import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next';
import classNames from 'classnames';
import Select from './Select';
import SelectRegion from './SelectRegion';


export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const items = this.props.items !== undefined ? this.props.items : [];

        return (
            <header className="by-header mw8-ns phm-ns center cf">
                <div className="cf">
                    <div className="by-header_logo w-50 u-float-left--ns">
                        <h1>Buttery <span className="fl">Showtimes</span></h1>
                    </div>
                </div>
                <div className="cf">
                    <div className="w-50 u-float-left--ns">
                        <div className="by-header_row pbxs">
                            <label>{i18n.t('header.category')}</label>
                        </div>
                    </div>
                    <div className="w-25 u-float-left--ns">
                        <div className="by-header_row pbxs">
                            <label>{i18n.t('header.date')}</label>
                        </div>
                    </div>
                    <div className="w-25 u-float-left--ns">
                        <div className="by-header_row pbxs">
                            <label>{i18n.t('header.region')}</label>
                        </div>
                    </div>
                </div>
                <div className="cf">
                    <div className="w-50 u-float-left--ns">
                        <div className="by-header_row mrl">
                            <Link to="/cinemas">{i18n.t('header.cinemas')}</Link>
                        </div>
                        <div className="by-header_row mrl">
                            <Link to="/movies">{i18n.t('header.movies')}</Link>
                        </div>
                    </div>
                    <div className="w-50 u-float-left--ns">
                        <div className="by-header_row cf">
                            <div className="w-50 u-float-left--ns">
                                <Select items={this.props.region}
                                        handleChange={this.props.changeRegion.bind(this)} />
                            </div>
                            <div className="w-50 u-float-left--ns">
                                <Select items={this.props.region}
                                        handleChange={this.props.changeRegion.bind(this)} />
                            </div>
                        </div>
                    </div>
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
