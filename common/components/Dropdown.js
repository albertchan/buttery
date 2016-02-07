import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import classNames from 'classnames';

export default class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
        this._checkClick = this._checkClick.bind(this);
        this.state = {active: false};
    }

    render() {
        var classes = classNames('by-dropdown', this.props.customClass, {'active': this.state.active});
        var children = React.Children.map(this.props.children, function(child) {
            // if(child.props.className.indexOf('by-dropdown') === -1) return;

            var classes = classNames(child.props.className, {'active': this.state.active});
            var returnedChild =  React.cloneElement(child, {className: classes});

            if(child.props.className.indexOf('by-dropdown_content') !== -1) {
                returnedChild = React.cloneElement(returnedChild, {
                    ref: (c) => this._content = c
                });
            }

            return returnedChild
        }, this);

        return (
            <div className={classes} onClick={this._handleClick}>
                {children}
            </div>
        );
    }

    componentDidMount() {
        this._position();
        document.addEventListener('click', this._checkClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this._checkClick);
    }

    componentDidUpdate() {
        this._position();
    }

    _handleClick(event) {
        if(event.target.className.indexOf('by-dropdown_trigger') !== -1) {
            this.setState({active: !this.state.active});
        }
    }

    _position() {
        if(this._content.getBoundingClientRect().right > (window.innerWidth || document.documentElement.clientWidt)) {
            this._content.className += ' by-dropdown_content--right';
        }
    }

    _checkClick(e) {
        var el = ReactDOM.findDOMNode(this);
        // Check if the target is inside the current component
        if (e.target != el && !this._isDescendant(el, e.target) && document.documentElement.contains(e.target)) {
            this.setState({active: false});
        }
    }

    _isDescendant(parent, child) {
        var node = child.parentNode;

        while (node != null) {
            if (node == parent) return true;
            node = node.parentNode;
        }
        return false;
    }

}
Dropdown.propTypes = { customClass: React.PropTypes.string };