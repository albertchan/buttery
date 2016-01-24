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
        let element;
        const locale = 'en_us',
            items = this.props.items !== undefined ? this.props.items : [];

        console.log(this.props.type);

        switch (this.props.type) {
            case 'main':
                element =
                    <ul className="list-group">
                        {items.map(function(item, i) {
                            return (
                                <li key={i}
                                    className={classNames('list-group-item')}>
                                    <span>{item.thumbnail_url}</span>
                                    <span>{item[locale]}</span>
                                    <select>
                                        {item.MovieShowings.map(function(showing, i) {
                                            let showtime = showing.datetime_showing;
                                            return (
                                                <option key={showing.id} value={showing.id}>{showtime}</option>
                                            );
                                        }, this)}
                                    </select>
                                </li>
                            );
                        }, this)}
                    </ul>;
                break;
            default:
                element =
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
                    </ul>;
                break;
        }

        return element;
    }

}

MovieList.propTypes = {
    items: React.PropTypes.array.isRequired,
    type: React.PropTypes.oneOf(['main', 'titles'])
};
