import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import classNames from 'classnames';


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
            <ul className="by-list by-list--vertical">
                {items.map(function(item, i) {
                    // item = {id: id, title: 'Movie title', image: thumbnail_url}
                    var link = '/movie/' + item.id;

                    return (
                        <li key={i}
                            className={classNames('by-list_item')}
                            onClick={(i) => this.handleClick.bind(i)}>
                            <Link to={link}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                }, this)}
            </ul>
        );
    }

}

MovieList.propTypes = { items: React.PropTypes.array };
