import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import classNames from 'classnames';


let items = {};

export default class Select extends Component {

    constructor(props) {
        super(props);

        for (var item of this.props.items) {
            items[item.id] = item.name;
        }

        this.state = {
            active: false,
            items: items,
            selected: this.props.selected || 1
        };
    }

    handleClick(id, e) {
        this.setState({selected: id}); // React will re-render when state changes
        this.props.handleChange(id);
        this.setState({active: !this.state.active});
    }

    handleTrigger(e) {
        e.preventDefault();
        this.setState({active: !this.state.active});
    }

    render() {
        return (
            <div className="by-dropdown">
                <button className="by-dropdown_trigger" onClick={this.handleTrigger.bind(this)}>
                    {items[this.state.selected]}
                    <i className="material-icons">arrow_drop_down</i>
                </button>
                <div className={classNames('by-dropdown_content', {'active': this.state.active})}>
                    <ul className="by-list by-list--vertical">
                        {this.props.items.map(function(item, i) {
                            return (
                                <li key={item.id} onClick={this.handleClick.bind(this, item.id)}>
                                    <a href="javascript:;">{item.name}</a>
                                </li>
                            );
                        }, this)}
                    </ul>
                </div>
            </div>
        );
    }

}

Select.propTypes = {
    handleChange: React.PropTypes.func.isRequired,
    items: React.PropTypes.array.isRequired,
    selected: React.PropTypes.string
};