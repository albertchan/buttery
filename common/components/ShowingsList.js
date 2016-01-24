import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import classNames from 'classnames';


export default class ShowingsList extends React.Component {

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
            <ul className="list-group">
                {items.map(function(item, i) {
                    // item = {id: id, title: 'Movie title', image: thumbnail_url}
                    var link = '/movie/' + item.id;

                    return (
                        <li key={i}
                            className={classNames('list-group-item')}
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

ShowingsList.propTypes = { items: React.PropTypes.array };
