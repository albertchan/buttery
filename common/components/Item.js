import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';


export default class Item extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    handleClick(index, e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
            </div>
        );
    }

}

Item.propTypes = { items: React.PropTypes.array };
