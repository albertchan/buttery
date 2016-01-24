import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import classNames from 'classnames';
import Dropdown from './Dropdown';


export default class MovieList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    handleClick(index, e) {
        e.preventDefault();
    }

    render() {
        const locale = 'en_us',
            items = this.props.items !== undefined ? this.props.items : [];

        return (
            <section className="by-movie-list">
                {items.map(function(item, i) {
                    let link = '/movie/' + item.id;

                    return (
                        <article key={i}
                                 title={item[locale]}
                                 className={classNames('by-movie-list_movie flag flag--top', 'cf', 'mvm-ns', 'mvxs')}>
                            <Link className="flag_img prm" to={link}>
                                <img className="by-movie-list_movie_thumb db" alt={item[locale]} src="http://ia.media-imdb.com/images/M/MV5BMjM2MTQ2MzcxOF5BMl5BanBnXkFtZTgwNzE4NTUyNzE@._V1_UX140_CR0,0,140,209_AL_.jpg"/>
                            </Link>
                            <div className="flag_body">
                                <h4 className="f2">{item[locale]}</h4>
                                <Dropdown customClass="by-btn-group">
                                    <Link className="by-btn by-btn--gray" to={link} >
                                        <time className="by-btn_time green">24 mins</time>UA Cityplaza
                                    </Link>
                                    <button className="by-btn by-btn--gray phm last by-dropdown_trigger">&#9660;</button>
                                    <div className="by-dropdown_content">
                                        <ul className="by-list by-list--vertical">
                                            {item.MovieShowings.map(function(showing, i) {
                                                let showtime = showing.datetime_showing;
                                                return (
                                                    <li key={showing.id}>
                                                        <a href="javascript:;">
                                                            <span className="db">UA Cine Times</span>
                                                            <time className="db yellow f0">{showtime}</time>
                                                        </a>
                                                    </li>
                                                );
                                            }, this)}
                                        </ul>
                                    </div>
                                </Dropdown>
                            </div>
                        </article>
                    );
                }, this)}
            </section>
        );
    }

}

MovieList.propTypes = {
    items: React.PropTypes.array.isRequired
};
