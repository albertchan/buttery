import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';

export default class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {active: true};
    }

    render() {
        var classes = classNames('by-dropdown', {'active': this.state.active});
        return (
            <div className={classes} onClick={this.handleClick}>
                {this.props.children}
            </div>
        );
    }

    handleClick(event) {
        console.log('sssssss');
        this.setState({active: !this.state.active});
    }
}