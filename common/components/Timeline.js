import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';


export default class Timeline extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
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
                            className={classNames('list-group-item')}>
                            <span>{item.datetime_showing}</span>
                            <span>{item.Cinema[this.props.locale]}</span>
                        </li>
                    );
                }, this)}
            </ul>
        );
    }

}

Timeline.propTypes = {
    items: React.PropTypes.array.isRequired,
    locale: React.PropTypes.string.isRequired
};
