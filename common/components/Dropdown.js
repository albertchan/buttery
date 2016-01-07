import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
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
                            var classes = classNames(child.props.className, {'active': this.state.active});
                            if(child.props.className.indexOf('by-dropdown_trigger') !== -1 ||
                               child.props.className.indexOf('by-dropdown_content') !== -1) {
                                return React.cloneElement(child, {
                                    className: classes
                                });
                            }
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

}