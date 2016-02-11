import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import classNames from 'classnames';
import i18n from 'i18next';
import Dropdown from './Dropdown';


export default class MovieList extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick(index, e) {
        e.preventDefault();
    }

    render() {
        const locale = this.props.locale,
            items = this.props.items !== undefined ? this.props.items : [];

        return (
            <section className="by-movie-list">
                {items.map(function(item, i) {
                    let link = '/movie/' + item.id,
                        upcomingShow = item.MovieShowings[0];

                    return (
                        <article key={i}
                                 title={item[locale]}
                                 className={classNames('by-movie-list_movie flag flag--top', 'cf', 'mvm-ns', 'mvxs')}>
                            <Link className="flag_img" to={link}>
                                <img className="by-movie-list_movie_thumb db" alt={item[locale]} src="http://ia.media-imdb.com/images/M/MV5BMjM2MTQ2MzcxOF5BMl5BanBnXkFtZTgwNzE4NTUyNzE@._V1_UX140_CR0,0,140,209_AL_.jpg"/>
                            </Link>
                            <div className="flag_body">
                                <h4 className="f2">{item[locale]}</h4>
                                <div className="by-movie-list_meta cf">
                                    <span><i className="material-icons">access_time</i> 108 minutes</span>
                                    <span>Category 3</span>
                                </div>
                                <div className="cf">
                                    <div className="w-60 u-float-left--ns">
                                        <div className="cf">
                                            <div className="w-25 u-float-left--ns">
                                                <label>{i18n.t('article.cast')}</label>
                                            </div>
                                            <div className="w-75 u-float-left--ns">
                                                Brad Pitt
                                            </div>
                                        </div>
                                        <div className="cf">
                                            <div className="w-25 u-float-left--ns">
                                                <label>{i18n.t('article.director')}</label>
                                            </div>
                                            <div className="w-70 u-float-left--ns">
                                            </div>
                                        </div>
                                        <div className="cf">
                                            <div className="w-25 u-float-left--ns">
                                                <label>{i18n.t('article.genre')}</label>
                                            </div>
                                            <div className="w-75 u-float-left--ns">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-40 u-float-left--ns">
                                        <Dropdown customClass="by-btn-group">
                                            <Link className="by-btn by-btn--gray" to={link} >
                                                <time className="by-btn_time green">24 mins</time>{upcomingShow.Cinema[locale]}
                                            </Link>
                                            <button className="by-btn by-btn--gray phm last by-dropdown_trigger">&#9660;</button>
                                            <div className="by-dropdown_content">
                                                <ul className="by-list by-list--vertical">
                                                    {item.MovieShowings.map(function(showing, i) {
                                                        let showtime = showing.datetime_showing;
                                                        return (
                                                            <li key={showing.id}>
                                                                <a href="javascript:;">
                                                                    <span className="db">{showing.Cinema[locale]}</span>
                                                                    <time className="db yellow f0">{showtime}</time>
                                                                </a>
                                                            </li>
                                                        );
                                                    }, this)}
                                                </ul>
                                            </div>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                }, this)}
            </section>
        );
    }

}

MovieList.propTypes = {
    items: React.PropTypes.array.isRequired,
    locale: React.PropTypes.string.isRequired
};
