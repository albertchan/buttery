import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import classNames from 'classnames';

export default class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {active: false};
    }

    render() {
        var classes = classNames('by-dropdown', {'active': this.state.active});
        var children =  React.Children.map(this.props.children, function(child){
                            if(child.props.className.indexOf('by-dropdown') === -1) return;

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
            <div className={classes} onClick={this.handleClick}>
                {children}
            </div>
        );
    }

    handleClick(event) {
        if(event.target.className.indexOf('by-dropdown_trigger') !== -1) {
            this.setState({active: !this.state.active});
        }
    }

    position() {
        if(this._content.getBoundingClientRect().right > (window.innerWidth || document.documentElement.clientWidt)) {
            this._content.className += ' by-dropdown_content--right';
        }
    }

    componentDidMount() {
        this.position();
    }

    componentDidUpdate() {
        this.position();
    }

}