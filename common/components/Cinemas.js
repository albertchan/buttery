import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';


export default class Cinemas extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    handleClick(index, e) {
        e.preventDefault();
    }

    render() {
        const items = this.props.items !== undefined ? this.props.items : [];s

        return (
            <ul className="list-group">
                {items.map(function(item, i) {
                    // item = {id: 'Cinema name'}
                    var id = Object.keys(item)[0],
                        link = '/cinema/' + id;

                    return (
                        <li key={i}
                            className={classNames('list-group-item')}
                            onClick={(i) => this.handleClick.bind(i)}>
                            <a href={link}>
                                <span>{item[id]}</span>
                            </a>
                        </li>
                    );
                }, this)}
            </ul>
        );
    }

}

Cinemas.propTypes = { items: React.PropTypes.array };