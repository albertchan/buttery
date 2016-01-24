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
        const items = this.props.items !== undefined ? this.props.items : [];

        return (
            <section className="by-movie-list">
                {items.map(function(item, i) {
                    // item = {id: id, title: 'Movie title', image: thumbnail_url}
                    var link = '/movie/' + item.id;
                    console.log(item);
                    return (
                        <article key={i}
                            title={item.title}
                            className={classNames('by-movie-list_movie flag flag--top', 'cf', 'mvm')}>
                            <Link className="flag_img prm" to={link}>
                                <img className="db" alt={item.title} src="http://ia.media-imdb.com/images/M/MV5BMjM2MTQ2MzcxOF5BMl5BanBnXkFtZTgwNzE4NTUyNzE@._V1_UX140_CR0,0,140,209_AL_.jpg"/>
                            </Link>
                            <div className="flag_body">
                                <h3>{item.title}</h3>
                                <Dropdown customClass="by-btn-group">
                                    <Link className="by-btn by-btn--gray" to={link} >
                                        <time className="by-btn_time green">24 mins</time>UA Cityplaza
                                    </Link>
                                    <button className="by-btn by-btn--gray phm last by-dropdown_trigger">&#9660;</button>

                                    <div className="by-dropdown_content">
                                        <ul className="by-list by-list--vertical">
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="db">UA Cine Times</span>
                                                    <time className="db yellow f0">1 hr 5 mins</time>
                                                </a>
                                            </li>
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

MovieList.propTypes = { items: React.PropTypes.array };
